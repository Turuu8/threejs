import { Hexagon } from "../../../public/blender/Hexagon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

export const Model = () => {
  const [fov, setFov] = useState(0);
  useEffect(() => setFov(() => window.innerWidth), []);

  return (
    <>
      <Canvas camera={{ position: [5, 1, 0], fov: fov <= 1023 ? (fov <= 600 ? fov / 10 : fov / 34) : fov <= 2000 ? fov / 30 : fov / 60 }}>
        <Hexagon />
        <OrbitControls enableZoom={false} minPolarAngle={1.45} maxPolarAngle={Math.PI / 1.85} autoRotate enableRotate={true} autoRotateSpeed={5} />
      </Canvas>
    </>
  );
};
