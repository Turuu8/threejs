import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { VerticesSix } from "../../public/blender/VerticesSix";
import { HeroSection } from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <div className="w-full h-[100vh]">
        <Canvas camera={{ position: [5, 1, 0], fov: 14 }}>
          <VerticesSix />
          <OrbitControls enableZoom={false} minPolarAngle={1.45} maxPolarAngle={Math.PI / 1.85} autoRotate enableRotate={true} />
        </Canvas>
      </div>
    </main>
  );
}
