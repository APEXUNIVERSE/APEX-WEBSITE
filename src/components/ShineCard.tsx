// Shine Card — Originkit (Optimized with Pop, Crisp Metallic Glitter, No Tilt)

"use client";

import React, { useEffect, useRef, useState, type CSSProperties } from "react";

function clamp(n: any, min: number, max: number, fallback: number) {
  const v = typeof n === "number" ? n : parseFloat(n);
  if (!Number.isFinite(v)) return fallback;
  return Math.min(max, Math.max(min, v));
}

function parseColor01(input: any, fallback: [number, number, number]) {
  if (!input) return fallback;
  const s = String(input).trim();
  const hex = s.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  if (hex) {
    const h = hex[1];
    const f =
      h.length === 3
        ? h
            .split("")
            .map((c) => c + c)
            .join("")
        : h;
    return [
      parseInt(f.slice(0, 2), 16) / 255,
      parseInt(f.slice(2, 4), 16) / 255,
      parseInt(f.slice(4, 6), 16) / 255,
    ] as [number, number, number];
  }
  const rgb = s.match(/^rgba?\(([^)]+)\)$/i);
  if (rgb) {
    const parts = rgb[1].split(",").map((p) => p.trim());
    if (parts.length >= 3) {
      const to01 = (v: string) =>
        v.endsWith("%")
          ? Math.min(1, Math.max(0, parseFloat(v) / 100))
          : Math.min(1, Math.max(0, parseFloat(v) / 255));
      const out = [to01(parts[0]), to01(parts[1]), to01(parts[2])];
      if (out.every(Number.isFinite)) return out as [number, number, number];
    }
  }
  return fallback;
}

function insetRadius(radius: any, by: number): string {
  const s = String(radius ?? "0px").trim();
  if (!s) return "0px";
  return s
    .split(/\s+/)
    .map((corner) => `max(0px, calc(${corner} - ${by}px))`)
    .join(" ");
}

export interface BorderProps {
  borderWidth?: number;
  borderStyle?: string;
  borderColor?: string;
  borderTopWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
}

export interface ShineCardProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  cardWidth?: number | string;
  cardHeight?: number | string;
  cardColor?: string;
  radius?: string;
  border?: BorderProps;
  density?: number;
  waveSpeed?: number;
  sparkle?: number;
  unlit?: string;
  highlight?: string;
  hoverScale?: number;
  glow?: string;
}

const DEFAULTS = {
  cardColor: "#180205",
  radius: "28px",
  border: {
    borderColor: "#ff1a35",
    borderStyle: "solid",
    borderWidth: 1.5,
  } as BorderProps,
  density: 46,
  waveSpeed: 52,
  sparkle: 100,
  unlit: "#FFDF00",
  highlight: "#FF1F3D",
  hoverScale: 104,
  glow: "rgba(255, 26, 53, 0.45)",
};

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform float u_time;
uniform vec2 u_res;
uniform float u_waveSpeed;
uniform float u_sparkle;
uniform vec2 u_mouse;
uniform float u_density;
uniform vec3 u_theme;
uniform vec3 u_dark;

#define PI 3.14159265359
#define TAU 6.28318530718
#define SQRT3 1.7320508

float hash21(vec2 p) {
    p = fract(p * vec2(233.34, 851.73));
    p += dot(p, p + 23.45);
    return fract(p.x * p.y);
}

vec2 hash22(vec2 p) {
    float n = hash21(p);
    return vec2(n, hash21(p + n * 47.0));
}

vec4 hexTile(vec2 p, float scale) {
    p *= scale;
    vec2 s = vec2(1.0, SQRT3);
    vec2 halfS = s * 0.5;
    vec2 aBase = floor(p / s);
    vec2 aLocal = mod(p, s) - halfS;
    vec2 pOff = p - halfS;
    vec2 bBase = floor(pOff / s);
    vec2 bLocal = mod(pOff, s) - halfS;
    float dA = dot(aLocal, aLocal);
    float dB = dot(bLocal, bLocal);
    float pick = step(dA, dB);
    vec2 localCoord = mix(bLocal, aLocal, pick);
    vec2 cellId = mix(bBase + vec2(0.5), aBase, pick);
    return vec4(localCoord, cellId);
}

float waveField(vec2 cellPos, float t) {
    float w = 0.0;
    w += sin(dot(cellPos, vec2(0.7, 0.5)) * 3.5 - t * 2.8) * 0.35;
    w += sin(cellPos.x * 4.2 + t * 1.9) * 0.25;
    float r1 = length(cellPos - vec2(-0.3, 0.2));
    w += sin(r1 * 6.0 - t * 3.2) * 0.2 * smoothstep(1.2, 0.0, r1);
    w += sin(dot(cellPos, vec2(-0.4, 0.8)) * 2.8 - t * 1.5) * 0.2;
    float r2 = length(cellPos - vec2(0.4, -0.3));
    w += sin(r2 * 5.0 - t * 2.4) * 0.15 * smoothstep(1.0, 0.0, r2);
    return w;
}

float dotSpecular(float tiltAngle, float tiltDir, vec2 uv) {
    float ct = cos(tiltAngle);
    float st = sin(tiltAngle);
    float cd = cos(tiltDir);
    float sd = sin(tiltDir);
    vec3 N = vec3(st * cd, st * sd, ct);
    vec3 L = normalize(vec3(0.4, 0.6, 0.9));
    vec3 V = vec3(0.0, 0.0, 1.0);
    vec3 R = reflect(-L, N);
    float spec = max(dot(R, V), 0.0);
    spec = pow(spec, 48.0);
    float sheen = pow(max(dot(R, V), 0.0), 8.0) * 0.15;
    return spec + sheen;
}

void main() {
    float minDim = max(min(u_res.x, u_res.y), 1.0);
    vec2 uv = (gl_FragCoord.xy - u_res * 0.5) / minDim;
    float t = u_time * u_waveSpeed;

    float dotScale = max(6.0, u_density);
    vec4 hex = hexTile(uv, dotScale);
    vec2 localPos = hex.xy;
    vec2 cellId = hex.zw;

    vec2 rnd = hash22(cellId);
    float sizeVar = 0.88 + rnd.x * 0.28;
    float baseTilt = (rnd.y - 0.5) * 0.22;
    float reflVar = 0.75 + rnd.x * 0.35;
    float phaseOff = rnd.y * TAU;

    float discRadius = 0.44 * sizeVar;
    float dist = length(localPos);
    float disc = smoothstep(discRadius, discRadius - 0.05, dist);

    float bevel = smoothstep(discRadius, discRadius - 0.03, dist)
                - smoothstep(discRadius - 0.03, discRadius - 0.07, dist);

    vec2 worldPos = cellId / dotScale;

    float wave = waveField(worldPos, t);
    float shimmer = sin(t * 3.5 + phaseOff) * 0.08;
    float tiltAngle = wave * 0.95 + baseTilt + shimmer;

    float waveH = waveField(worldPos + vec2(0.01, 0.0), t);
    float waveV = waveField(worldPos + vec2(0.0, 0.01), t);
    float tiltDir = atan(waveV - wave, waveH - wave);

    // Dynamic micro-facet glitter sparkle on individual flakes
    float glitterTwinkle = pow(sin(t * 4.2 + rnd.x * 31.4 + rnd.y * 19.8) * 0.5 + 0.5, 6.0) * 1.8;

    float mouseSpec = 0.0;
    if (u_mouse.x >= 0.0) {
        vec2 mUV = (u_mouse - u_res * 0.5) / min(u_res.x, u_res.y);
        float mDist = length(uv - mUV);
        float mInfluence = exp(-mDist * mDist * 7.5);
        vec3 mLightDir = normalize(vec3(mUV.x - uv.x, mUV.y - uv.y, 0.6));
        float ct = cos(tiltAngle);
        float st2 = sin(tiltAngle);
        float cd = cos(tiltDir);
        float sd = sin(tiltDir);
        vec3 mN = vec3(st2 * cd, st2 * sd, ct);
        vec3 mR = reflect(-mLightDir, mN);
        float mS = pow(max(dot(mR, vec3(0.0, 0.0, 1.0)), 0.0), 24.0);
        mouseSpec = mS * mInfluence * 2.8;
    }

    float spec = dotSpecular(tiltAngle, tiltDir, uv);
    spec *= reflVar * u_sparkle;
    spec += glitterTwinkle * reflVar * 0.6;
    spec += mouseSpec * reflVar;

    vec3 darkDot = clamp(u_dark, 0.0, 1.0);
    vec3 hotTheme = clamp(u_theme, 0.0, 1.0);
    vec3 crimsonGlint = mix(hotTheme, vec3(1.0, 0.6, 0.75), 0.35);

    float facing = clamp(cos(tiltAngle) * 0.5 + 0.5, 0.0, 1.0);

    // Deep dark tactical ruby-obsidian base (sleek, stealthy, not washed out)
    vec3 ambientBase = mix(vec3(0.04, 0.005, 0.01), darkDot, 0.55);
    vec3 dotColor = ambientBase;

    // Rich metallic cyber red sheen as the wave travels across
    float sheenAmount = pow(max(facing, 0.0), 2.2) * 0.55 * reflVar;
    dotColor += hotTheme * sheenAmount;

    // Controlled specular sparkle highlights (fine diamond-ruby twinkle, never blinding)
    float flashLow = smoothstep(0.05, 0.35, spec);
    float flashHigh = smoothstep(0.35, 0.75, spec);
    float flashPeak = smoothstep(0.75, 1.0, spec);
    dotColor += hotTheme * flashLow * 0.5;
    dotColor += crimsonGlint * flashHigh * 0.7;
    dotColor += vec3(1.0, 0.92, 0.94) * flashPeak * 0.45;
    dotColor += hotTheme * bevel * facing * 0.25;

    vec3 col = dotColor * disc;

    vec2 uvSafe = uv + vec2(0.0001);
    float globalLight = 0.95 + 0.15 * dot(normalize(uvSafe), vec2(0.4, 0.6));
    col *= globalLight;

    gl_FragColor = vec4(clamp(col, 0.0, 1.0), disc * 0.98);
}
`;

export default function ShineCard(props: ShineCardProps) {
  const {
    children,
    className = "",
    style,
    cardWidth = "100%",
    cardHeight = "100%",
    cardColor = DEFAULTS.cardColor,
    radius = DEFAULTS.radius,
    border = DEFAULTS.border,
    density = DEFAULTS.density,
    waveSpeed = DEFAULTS.waveSpeed,
    sparkle = DEFAULTS.sparkle,
    unlit = DEFAULTS.unlit,
    highlight = DEFAULTS.highlight,
    hoverScale = DEFAULTS.hoverScale,
    glow = DEFAULTS.glow,
  } = props;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseCoords = useRef({ x: -1, y: -1 });

  // WebGL Shader setup for WaveyDots Metallic Glitter
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: false,
    });
    if (!gl) return;

    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn("WaveyDots link:", gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uni = {
      time: u("u_time"),
      res: u("u_res"),
      waveSpeed: u("u_waveSpeed"),
      sparkle: u("u_sparkle"),
      mouse: u("u_mouse"),
      density: u("u_density"),
      theme: u("u_theme"),
      dark: u("u_dark"),
    };

    let needsResize = true;
    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl!.viewport(0, 0, canvas.width, canvas.height);
      gl!.uniform2f(uni.res, canvas.width, canvas.height);
    }
    resize();

    const ro = new ResizeObserver(() => {
      needsResize = true;
    });
    ro.observe(canvas);

    let raf = 0;
    const speed = (clamp(waveSpeed, 0, 100, DEFAULTS.waveSpeed) / 100) * 1.6;
    const spk = (clamp(sparkle, 0, 100, DEFAULTS.sparkle) / 100) * 3.5;
    const dens = clamp(density, 6, 250, DEFAULTS.density);
    const themeCol = parseColor01(highlight, [1, 0.12, 0.24]);
    const unlitCol = parseColor01(unlit, [1, 0.85, 0.1]);

    function draw(now: number) {
      if (needsResize) {
        resize();
        needsResize = false;
      }

      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.uniform2f(uni.res, canvas!.width, canvas!.height);
      gl!.uniform1f(uni.time, now * 0.001);
      gl!.uniform1f(uni.waveSpeed, speed);
      gl!.uniform1f(uni.sparkle, spk);
      gl!.uniform1f(uni.density, dens);
      gl!.uniform3f(uni.theme, themeCol[0], themeCol[1], themeCol[2]);
      gl!.uniform3f(uni.dark, unlitCol[0], unlitCol[1], unlitCol[2]);

      const m = mouseCoords.current;
      if (m.x >= 0 && canvas) {
        gl!.uniform2f(uni.mouse, m.x * canvas.width, m.y * canvas.height);
      } else {
        gl!.uniform2f(uni.mouse, -1, -1);
      }

      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, [waveSpeed, sparkle, density, highlight, unlit]);

  // Track pointer on root card for interactive metallic specular highlight
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const root = rootRef.current;
    if (!root) return;
    const r = root.getBoundingClientRect();
    mouseCoords.current = {
      x: (e.clientX - r.left) / r.width,
      y: 1 - (e.clientY - r.top) / r.height,
    };
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    mouseCoords.current = { x: -1, y: -1 };
  };

  const b = border || {};
  const borderStyle: CSSProperties = {
    borderStyle: b.borderStyle || "solid",
    borderColor: isHovered ? "#ff4d6d" : (b.borderColor || "#ff1a35"),
    borderWidth: `${b.borderWidth ?? 1.5}px`,
  };

  const scaleVal = isHovered ? hoverScale / 100 : 1;

  return (
    <div
      ref={rootRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`relative group ${className}`}
      style={{
        width: typeof cardWidth === "number" ? `${cardWidth}px` : cardWidth,
        height: typeof cardHeight === "number" ? `${cardHeight}px` : cardHeight,
        transform: `scale(${scaleVal}) translateY(${isHovered ? -8 : 0}px)`,
        transition: "transform 350ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms ease, border-color 350ms ease",
        borderRadius: radius,
        boxShadow: isHovered
          ? `0 20px 45px -10px ${glow}, 0 0 25px 2px rgba(255, 26, 53, 0.4)`
          : "0 15px 35px -10px rgba(0,0,0,0.85), 0 0 15px rgba(255, 26, 53, 0.15)",
        ...style,
      }}
    >
      {/* Outer Card Body */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: cardColor,
          borderRadius: radius,
          overflow: "hidden",
          ...borderStyle,
        }}
      >
        {/* Layer 1: WebGL WaveyDots Metallic Glitter Field (Crisp & Fully Visible) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        {/* Layer 2: Bevel & Rim Light Inset Borders */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          {/* Top Edge Specular White Rim */}
          <div
            style={{
              position: "absolute",
              inset: 2,
              borderRadius: insetRadius(radius, 2),
              boxShadow: "inset 0px 1.5px 3px rgba(255, 255, 255, 0.4)",
              opacity: isHovered ? 0.9 : 0.6,
              transition: "opacity 300ms ease",
            }}
          />
          {/* Subtle Outer Bevel */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: radius,
              boxShadow: "inset 0px 0px 1px 1px rgba(255, 255, 255, 0.15)",
            }}
          />
        </div>

        {/* Layer 3: Foreground Content / Children (Cleanly Positioned at Top) */}
        {children && (
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
