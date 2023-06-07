import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as maath from "maath";

const Starts = (props: any) => {
  const ref = useRef<any | null>();

  const sphere = maath.random.inSphere(new Float32Array(5000), { radius: 2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;
    ref.current.rotation.z -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial tranparent color="#fff" size={0.0015} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const StartsCanvas = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Starts />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StartsCanvas;
