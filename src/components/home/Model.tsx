import { Hexagon } from "../../../public/blender/Hexagon";
import { Loader, OrbitControls, Preload, useScroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../canvas/Loader";

export const Model = (props: any) => {
  return (
    <>
      <Canvas camera={{ position: [5, 0, 0], fov: props.fov >= 1921 ? 43 : props.fov >= 1025 ? 33 : 23 }}>
        <mesh scale={props.scroll > 750 ? (props.scroll > 1500 ? 1500 / 700 : props.scroll / 750) : 1}>
          <Suspense fallback={<CanvasLoader />}>
            <Hexagon />
          </Suspense>
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
        <Preload all />
      </Canvas>
    </>
  );
};
