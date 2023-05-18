import { Hexagon } from "../../../public/blender/Hexagon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Model = () => {
  return (
    <>
      <Canvas camera={{ position: [5, 1, 0], fov: 14 }}>
        <Hexagon />
        <OrbitControls enableZoom={false} minPolarAngle={1.45} maxPolarAngle={Math.PI / 1.85} autoRotate enableRotate={true} autoRotateSpeed={5} />
      </Canvas>
    </>
  );
};
