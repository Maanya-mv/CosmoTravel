import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function StarfieldBackground() {
  const particlesInit = async (main) => await loadFull(main);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          number: { value: 150, density: { enable: true, value_area: 800 } },
          color: { value: ["#ffffff", "#00ffff", "#ff00ff"] },
          shape: { type: ["circle", "star"] },
          opacity: { value: 0.7, random: true, animation: { enable: true, speed: 1 } },
          size: { value: { min: 0.5, max: 2 }, random: true },
          move: { enable: true, speed: 0.2, random: true, out_mode: "out" },
        },
        interactivity: {
          events: { onhover: { enable: true, mode: "repulse" } },
        },
      }}
    />
  );
}
