import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GaussianSplatViewer } from "@/components/GaussianSplatViewer";

export const Route = createFileRoute("/realhome")({
  component: RealHomeComponent,
});

const SCENES = [
  { id: "workroom", label: "workroom", splat: "/asset/workroom.splat" },
  { id: "homept1", label: "homept1", splat: "/asset/homept1.splat" },
] as const;

function RealHomeComponent() {
  const [sceneId, setSceneId] = useState<string>(SCENES[0].id);
  const scene = SCENES.find((s) => s.id === sceneId) ?? SCENES[0];

  return (
    <div className="flex-1 flex flex-col gap-4">
      <h1 className="level-3 font-semibold">{"real home"}</h1>
      <div className="flex items-center gap-3">
        <div className="level-6 text-gray-500">
          {"3D Gaussian Splatting preview"}
        </div>
        <select
          value={sceneId}
          onChange={(e) => setSceneId(e.target.value)}
          className="ml-auto level-7 px-2 py-1 rounded border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          {SCENES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <GaussianSplatViewer
        key={scene.splat}
        splatUrl={scene.splat}
        className="w-full h-[70vh] rounded-lg overflow-hidden bg-black"
      />
    </div>
  );
}
