import {q} from "@client/context/AppContext";
import type {AppRouter} from "@server/init/router";
import {inferTransformedProcedureOutput} from "@thorium/live-query/server/types";
import {ReactNode} from "react";
import {GiAtomicSlashes, GiOilDrum} from "react-icons/gi";
import {HiOutlineFire, HiOutlineLightningBolt} from "react-icons/hi";
import {TbAtom2} from "react-icons/tb";
import {ReactorSlider} from "./ReactorSlider";

type ReactorItem = inferTransformedProcedureOutput<
  AppRouter["powerGrid"]["reactors"]["get"]
>[0];

export function Reactor({
  id,
  name,
  desiredOutput,
  maxOutput,
  optimalOutputPercent,
  nominalHeat,
  maxSafeHeat,
  maxHeat,
  reserve,
  fuel,
  children,
}: ReactorItem & {children: ReactNode}) {
  const currentHeat = maxSafeHeat;

  return (
    <div className="relative w-full py-2 px-4 panel panel-primary flex items-center gap-2">
      {children}
      <TbAtom2 className="text-5xl" />
      <div className="flex-1">
        <div className="flex items-center gap-2" title="Power Output">
          <HiOutlineLightningBolt className="text-3xl" />

          <ReactorSlider
            aria-label="Desired Power"
            minValue={0}
            maxValue={maxOutput}
            step={0.1}
            className="flex-1"
            value={desiredOutput}
            reactorId={id}
            maxOutput={maxOutput}
            onChange={value => {
              if (typeof value === "number")
                q.powerGrid.reactors.setDesired.netSend({
                  reactorId: id,
                  desiredOutput: value,
                });
            }}
          />
          <span className="whitespace-nowrap tabular-nums">{maxOutput} MW</span>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-2 cursor-help"
        title={`Heat: ${currentHeat}˚ K`}
      >
        <div className="min-h-full h-10 aspect-square -rotate-90 flex items-center -mx-4">
          <meter
            className="w-full"
            value={currentHeat}
            min={nominalHeat}
            max={maxHeat}
          />
        </div>
        <HiOutlineFire className="text-xl" />
      </div>

      <div
        className="flex flex-col items-center gap-2 cursor-help"
        title={`Active Fuel: ${(fuel * 100).toFixed(0)}%`}
      >
        <div className="min-h-full h-10 aspect-square -rotate-90 flex items-center -mx-4">
          <meter className="w-full" value={fuel} min={0} max={1} />
        </div>
        <GiAtomicSlashes className="text-xl" />
      </div>
      <div
        className="flex flex-col items-center gap-2  cursor-help"
        title="Fuel Reserve"
      >
        <div className="min-h-full h-10 aspect-square -rotate-90 flex items-center -mx-4">
          <meter className="w-full" value={reserve} min={0} max={1} />
        </div>
        <GiOilDrum className="text-xl" />
      </div>
    </div>
  );
}
