import { useEffect, useRef, useState } from "react";
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

type Props = {
  splatUrl: string;
  className?: string;
};

export function GaussianSplatViewer({ splatUrl, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    // biome-ignore lint/suspicious/noExplicitAny: third-party viewer instance
    let viewer: any = null;

    (async () => {
      try {
        console.log(
          "[splat] container size:",
          container.offsetWidth,
          "x",
          container.offsetHeight,
        );
        viewer = new GaussianSplats3D.Viewer({
          rootElement: container,
          sharedMemoryForWorkers: false,
          gpuAcceleratedSort: false,
          useBuiltInControls: true,
          selfDrivenMode: true,
          cameraUp: [0, -1, 0],
          initialCameraPosition: [0, 3, 6],
          initialCameraLookAt: [0, 0, 0],
          logLevel: GaussianSplats3D.LogLevel.Info,
        });
        console.log(
          "[splat] canvas attached:",
          !!viewer.renderer?.domElement?.parentElement,
          "canvas size:",
          viewer.renderer?.domElement?.width,
          "x",
          viewer.renderer?.domElement?.height,
        );

        await viewer.addSplatScene(splatUrl, {
          progressiveLoad: true,
          showLoadingUI: true,
          format: GaussianSplats3D.SceneFormat.Ply,
          onProgress: (percent: number) => {
            if (!disposed) setProgress(Math.round(percent));
          },
        });
        if (disposed) return;
        viewer.start();
        console.log(
          "[splat] after start, canvas size:",
          viewer.renderer?.domElement?.width,
          "x",
          viewer.renderer?.domElement?.height,
          "camera pos:",
          viewer.camera?.position,
        );
      } catch (e) {
        if (!disposed) {
          setError(e instanceof Error ? e.message : String(e));
        }
      }
    })();

    return () => {
      disposed = true;
      if (viewer) {
        try {
          void viewer.dispose();
        } catch {
          // ignore
        }
      }
      container.innerHTML = "";
    };
  }, [splatUrl]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative" }}
    >
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500 p-4 text-sm">
          {`Failed to load splat: ${error}`}
        </div>
      )}
      {!error && progress > 0 && progress < 100 && (
        <div className="absolute bottom-2 left-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
          {`Loading ${progress}%`}
        </div>
      )}
    </div>
  );
}
