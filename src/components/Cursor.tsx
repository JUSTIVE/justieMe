import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";

function GNParticle() {
  useEffect(() => {
    const canvas = document.getElementById("gn-layer") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    let isDown = false;
    let isTransAm = false;
    let downTime = 0;

    const TRANS_AM_DELAY = 600; // ms

    let particles: Particle[] = [];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
      transAm: boolean;
    };

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    window.addEventListener("mousedown", () => {
      isDown = true;
      downTime = performance.now();
    });

    window.addEventListener("mouseup", () => {
      isDown = false;
      isTransAm = false;
    });
    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // GN trail 생성
      for (let i = 0; i < 3; i++) {
        particles.push(createParticle(mouse.x, mouse.y, isTransAm));
      }
    });

    function createParticle(x: number, y: number, transAm: boolean): Particle {
      // 🔥 2사분면 각도만 사용
      const angle = Math.PI / 2 + Math.random() * (Math.PI / 2);

      const speed = (Math.random() * 1.5 + 0.5) * (transAm ? 1.5 : 1);

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        size: Math.random() * 4 + 2,
        transAm,
      };
    }

    function drawParticle(p: Particle) {
      const alpha = Math.max(p.life, 0);
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);

      if (p.transAm) {
        gradient.addColorStop(0, `rgba(255,255,255,${alpha})`);
        gradient.addColorStop(0.3, `rgba(255,120,160,${alpha})`);
        gradient.addColorStop(1, `rgba(255,0,80,0)`);
        ctx.shadowColor = "#ff3366";
      } else {
        gradient.addColorStop(0, `rgba(255,255,255,${alpha})`);
        gradient.addColorStop(0.2, `rgba(180,255,220,${alpha})`);
        gradient.addColorStop(0.5, `rgba(0,255,150,${alpha})`);
        gradient.addColorStop(1, `rgba(0,255,100,0)`);
      }

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }

    function update() {
      const now = performance.now();

      if (isDown && now - downTime > TRANS_AM_DELAY) {
        isTransAm = true;
      }
      const emitRate = isTransAm ? 3 : 1; // 프레임당 생성 개수

      for (let i = 0; i < emitRate; i++) {
        particles.push(createParticle(mouse.x, mouse.y, isTransAm));
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";
      // ctx.shadowBlur = 20;
      // ctx.shadowColor = "#00ff88";

      particles = particles.filter((p) => p.life > 0);

      for (const p of particles) {
        p.x += p.vx;
        p.y -= p.vy;
        p.life -= 0.02;
        p.size *= 1.01;
        drawParticle(p);
      }

      requestAnimationFrame(update);
    }
    update();
  }, []);

  return (
    <canvas
      className="w-screen h-screen fixed top-0 left-0 pointer-events-none inset-0 z-999"
      id="gn-layer"
    />
  );
}

export function Cursor() {
  const ref = useRef<HTMLImageElement>(null);

  const [isTransAm, setIsTransAm] = useState(false);
  useEffect(() => {
    function mouseMove(e: MouseEvent) {
      if (ref.current) {
        ref.current.style = `transform: translateX(${e.clientX - 14}px) translateY(${e.clientY - 10}px)`;
      }
    }

    let isDown = false;

    let downTime = 0;

    const TRANS_AM_DELAY = 600; // ms

    window.addEventListener("mousedown", () => {
      isDown = true;
      downTime = performance.now();
    });

    window.addEventListener("mouseup", () => {
      isDown = false;
      setIsTransAm(false);
    });

    function update() {
      const now = performance.now();

      if (isDown && now - downTime > TRANS_AM_DELAY) {
        setIsTransAm(true);
      }

      requestAnimationFrame(update);
    }
    update();
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  1;

  return (
    <>
      <img
        ref={ref}
        src={"/asset/cursor.png"}
        width="40px"
        height="40px"
        className={twMerge(
          "z-[998] fixed pointer-events-none",
          isTransAm ? "hue-rotate-140 saturate-500" : "",
        )}
        alt=""
      />
      <GNParticle />
    </>
  );
}
