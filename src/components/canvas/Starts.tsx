import { OrbitControls, PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as maath from "maath";

const Starts = (props: any) => {
  const ref = useRef<any | null>();
  const { camera, mouse, viewport } = useThree();

  const sphere = maath.random.inSphere(new Float32Array(5000), { radius: 2 });
  console.log(viewport);

  useFrame((state, delta) => {
    // const x = (mouse.x * viewport.width) / 2;
    // const y = (mouse.y * viewport.height) / 2;
    // ref.current.position.set(x, y, 0);
    // ref.current.rotation.set(-y, x, 0);

    ref.current.rotation.x = mouse.x;
    // ref.current.rotation.x -= delta / 10;
    // ref.current.rotation.y -= delta / 10;
    // ref.current.rotation.z -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial tranparent color="#fff" size={0.0005} sizeAttenuation={true} depthWrite={false} />
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
        {/* <OrbitControls onPointerMove={} /> */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StartsCanvas;
