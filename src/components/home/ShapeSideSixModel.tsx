import { VerticesSix } from "../../../public/blender/VerticesSix";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const ShapeSideSixModel = () => {
  return (
    <>
      <Canvas camera={{ position: [5, 1, 0], fov: 14 }}>
        <VerticesSix />
        <OrbitControls enableZoom={false} minPolarAngle={1.45} maxPolarAngle={Math.PI / 1.85} autoRotate enableRotate={true} autoRotateSpeed={5} />
      </Canvas>
    </>
  );
};
