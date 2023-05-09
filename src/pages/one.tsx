import ImagePlane from "@/components/ImagePlane";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React, { Suspense } from "react";

const one = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Link href="/">index</Link>
      <Suspense fallback={null}>
        <Canvas dpr={Math.max(window.devicePixelRatio, 2)} className="h-[50%]">
          <ImagePlane />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default one;
