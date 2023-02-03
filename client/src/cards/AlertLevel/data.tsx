import {t} from "@server/init/t";
import {pubsub} from "@server/init/pubsub";
import {z} from "zod";

export const alertLevel = t.router({
    update: t.procedure
      .input(z.object({level: z.union([
        z.literal("5"), 
        z.literal("4"), 
        z.literal("3"), 
        z.literal("2"), 
        z.literal("1"), 
        z.literal("p")
      ])}))
      .send(({ctx, input}) => {
        if (!ctx.ship) throw new Error("Ship not found");

        ctx.ship.updateComponent('isShip', {alertLevel:input.level});
        pubsub.publish.ship.get({shipId: ctx.ship.id});
      })
});