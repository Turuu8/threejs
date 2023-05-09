import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Canvas } from "@react-three/fiber";
import { Image2, Image3, Image4, Image5, Image6, Images } from ".";

const d6 = () => {
  return (
    <div className="h-[100vh] w-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
        <mesh scale={2.3}>
          <Model6d />
        </mesh>
        <OrbitControls minPolarAngle={1.3} maxPolarAngle={Math.PI / 1.4} />
      </Canvas>
    </div>
  );
};

export default d6;

type GLTFResult = GLTF & {
  nodes: {
    Circle_1: THREE.Mesh;
    Circle_2: THREE.Mesh;
    Circle_3: THREE.Mesh;
    Circle_4: THREE.Mesh;
    Circle_5: THREE.Mesh;
    Circle_6: THREE.Mesh;
  };
  materials: {
    ["Material.1"]: THREE.MeshStandardMaterial;
    ["Material.2"]: THREE.MeshStandardMaterial;
    ["Material.3"]: THREE.MeshStandardMaterial;
    ["Material.4"]: THREE.MeshStandardMaterial;
    ["Material.5"]: THREE.MeshStandardMaterial;
    ["Material.6"]: THREE.MeshStandardMaterial;
  };
};

function Model6d(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/today/d6.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Circle_1.geometry} material={materials["Material.1"]}>
        <Suspense fallback={null}>
          <Images />
        </Suspense>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Circle_2.geometry} material={materials["Material.2"]}>
        <Suspense fallback={null}>
          <Image2 />
        </Suspense>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Circle_3.geometry} material={materials["Material.3"]}>
        <Suspense fallback={null}>
          <Image3 />
        </Suspense>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Circle_4.geometry} material={materials["Material.4"]}>
        <Suspense fallback={null}>
          <Image4 />
        </Suspense>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Circle_5.geometry} material={materials["Material.5"]}>
        <Suspense fallback={null}>
          <Image5 />
        </Suspense>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Circle_6.geometry} material={materials["Material.6"]}>
        <Suspense fallback={null}>
          <Image6 />
        </Suspense>
      </mesh>
    </group>
  );
}

useGLTF.preload("/today/d6.gltf");
