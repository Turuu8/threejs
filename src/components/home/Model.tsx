import { Hexagon } from "../../../public/blender/Hexagon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

export const Model = () => {
  const [fov, setFov] = useState(0);
  useEffect(() => setFov(() => window.innerWidth), []);
  return (
    <>
      <Canvas camera={{ position: [5, 0, 0], fov: fov >= 1921 ? 43 : fov >= 1025 ? 33 : 13 }}>
        <Hexagon />
        <OrbitControls enableZoom={false} minPolarAngle={1.45} maxPolarAngle={Math.PI / 1.85} autoRotate enableRotate={true} autoRotateSpeed={5} />
      </Canvas>
    </>
  );
};
