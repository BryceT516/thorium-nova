/**
 * Entity Component System module
 */

import Entity from "./entity";
import System from "./system";
import performance from "./performance";
import {fastSplice} from "./utils";
import {RNG, createRNG} from "@thorium/rng";
import {ServerDataModel} from "server/src/classes/ServerDataModel";
class ECS {
  /**
   * Store all entities of the ECS.
   */
  entities: Entity[] = [];
  /**
   * Store entities which need to be tested at beginning of next tick.
   */
  entitiesSystemsDirty: Entity[] = [];
  /**
   * Store all systems of the ECS.
   */
  systems: System[] = [];
  /**
   * Count how many updates have been done.
   */
  updateCounter = 0;
  lastUpdate = performance.now();
  rng: RNG;
  maxEntityId: number = 1;
  entityIndex: Map<number, Entity> = new Map();
  componentCache: Map<string, Set<Entity>> = new Map();
  constructor(
    public server: ServerDataModel,
    seed: string | number = "thorium",
    skip?: number
  ) {
    this.rng = createRNG(seed, skip);
  }
  /**
   * Retrieve an entity by id
   */
  getEntityById(id: number) {
    if (!this.entityIndex.get(id)) {
      for (let i = 0, entity; (entity = this.entities[i]); i += 1) {
        if (entity.id === id) {
          this.entityIndex.set(id, entity);
        }
      }
    }
    return this.entityIndex.get(id) || null;
  }
  /**
   * Add an entity to the ecs.
   */
  addEntity(entity: Entity) {
    this.entities.push(entity);
    entity.addToECS(this);
    this.maxEntityId = Math.max(this.maxEntityId, entity.id);
  }
  /**
   * Remove an entity from the ecs by reference.
   */
  removeEntity(entity: Entity) {
    let index = this.entities.findIndex(e => e.id === entity.id);
    let entityRemoved = null;
    // if the entity is not found do nothing
    if (index !== -1) {
      entityRemoved = this.entities[index];

      entity.dispose();
      this.removeEntityIfDirty(entityRemoved);

      fastSplice(this.entities, index, 1);
    }

    Object.keys(entity.components).forEach(componentName => {
      const componentCache = this.componentCache.get(componentName);
      if (!componentCache) return;
      componentCache.delete(entity);
    });
    return entityRemoved;
  }
  /**
   * Remove an entity from the ecs by entity id.
   */
  removeEntityById(entityId: number) {
    for (let i = 0, entity; (entity = this.entities[i]); i += 1) {
      if (entity.id === entityId) {
        entity.dispose();
        this.removeEntity(entity);

        fastSplice(this.entities, i, 1);

        return entity;
      }
    }
    return null;
  }
  /**
   * Remove an entity from dirty entities by reference.
   */
  removeEntityIfDirty(entity: Entity) {
    let index = this.entitiesSystemsDirty.indexOf(entity);

    if (index !== -1) {
      fastSplice(this.entities, index, 1);
    }
  }
  /**
   * Add a system to the ecs.
   */
  addSystem(system: System) {
    system.ecs = this;
    this.systems.push(system);
    system.attach();

    // iterate over all entities to eventually add system
    for (let i = 0, entity; (entity = this.entities[i]); i += 1) {
      if (system.test(entity)) {
        system.addEntity(entity);
      }
    }
  }
  /**
   * Remove a system from the ecs.
   */
  removeSystem(system: System) {
    let index = this.systems.indexOf(system);

    if (index !== -1) {
      fastSplice(this.systems, index, 1);
      system.dispose();
    }
  }
  /**
   * "Clean" entities flagged as dirty by removing unnecessary systems and
   * adding missing systems.
   */
  cleanDirtyEntities() {
    for (let i = 0, entity; (entity = this.entitiesSystemsDirty[i]); i += 1) {
      for (let s = 0, system; (system = this.systems[s]); s += 1) {
        // for each dirty entity for each system
        let index = entity.systems.indexOf(system);
        let entityTest = system.test(entity);

        if (index === -1 && entityTest) {
          // if the entity is not added to the system yet and should be, add it
          system.addEntity(entity);
        } else if (index !== -1 && !entityTest) {
          // if the entity is added to the system but should not be, remove it
          system.removeEntity(entity);
        }
        // else we do nothing the current state is OK
      }

      entity.systemsDirty = false;
    }

    this.entitiesSystemsDirty = [];
  }
  /**
   * Update the ecs.
   *
   * @method update
   */
  update(testElapsed?: number) {
    let now = performance.now();
    let elapsed = testElapsed ?? now - this.lastUpdate;
    if (this.entitiesSystemsDirty.length) {
      this.cleanDirtyEntities();
    }
    for (let i = 0, system; (system = this.systems[i]); i += 1) {
      if (this.updateCounter % system.frequency > 0) {
        continue;
      }
      if (this.entitiesSystemsDirty.length) {
        // if the last system flagged some entities as dirty check that case
        this.cleanDirtyEntities();
      }
      system.updateAll(elapsed);
    }
    this.updateCounter += 1;
    this.lastUpdate = now;
  }
}

export default ECS;
