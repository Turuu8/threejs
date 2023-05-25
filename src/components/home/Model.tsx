import { Hexagon } from "../../../public/blender/Hexagon";
import { OrbitControls, useScroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

export const Model = (props: any) => {
  return (
    <>
      <Canvas camera={{ position: [5, 0, 0], fov: props.fov >= 1921 ? 43 : props.fov >= 1025 ? 33 : 23 }}>
        <mesh scale={props.scroll > 750 ? (props.scroll > 1500 ? 1500 / 700 : props.scroll / 750) : 1}>
          {/* <mesh scale={props.fov < 600 ? (props.scroll >= 550 ? (props.scroll >= 750 ? 750 / 550 : props.scroll / 550) : 1) : 1}> */}
          <Hexagon />
        </mesh>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={1.45}
          maxPolarAngle={Math.PI / 1.85}
          autoRotate
          enableRotate={true}
          autoRotateSpeed={5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </>
  );
};
