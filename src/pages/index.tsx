import { RenderTexture, OrbitControls, PerspectiveCamera, useVideoTexture, useTexture, useGLTF, Image, Text } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import FirstModelCube from "@/components/FirstModelCube";
import { Canvas, useLoader } from "@react-three/fiber";
import { CylinderGeometry, TwoPassDoubleSide } from "three";
import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";

export default function Home() {
  const ref = useRef();
  var cylinderGeometry = new THREE.CylinderGeometry(15, 15, 30, 9, 2, true);

  return (
    <div className=" flex items-center justify-center flex-col">
      {/* <Link href="/one">one</Link> */}
      <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-[#1c8bfa22]">
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
          <mesh scale={2.3}>
            <HollowCylinderGeometry />
            {/* <meshPhongMaterial>
              <RenderTexture attach="map">
                <Text fontSize={3}> hello</Text>
                <Image url="/imgs/event6.jpeg" />
              </RenderTexture>
            </meshPhongMaterial>
            <Suspense fallback={null}>
              <Images />
            </Suspense> */}
          </mesh>
          <OrbitControls
            enableZoom={false}
            // minPolarAngle={1.53} maxPolarAngle={Math.PI / 1.95}
          />
        </Canvas>
      </div>
      {/* -------------------------------------- TEST -------------------------------------- */}
      <div className="h-[100vh] w-full">
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
          <mesh scale={1}>
            <cylinderGeometry attach="geometry" args={[2, 2, 2, 6, 1, true]} />
            {/* <HollowCylinderGeometry /> */}
            {/* <boxGeometry /> */}
            {/* <extrudeGeometry /> */}
            <Suspense fallback={null}>
              <Images />
            </Suspense>
            {/* <RenderTexture attach="map">
              <color attach="background" args={["black"]} />
            </RenderTexture> */}
          </mesh>
          <OrbitControls enableZoom={false} maxZoom={2} minPolarAngle={1.4} maxPolarAngle={Math.PI / 1.8} />
        </Canvas>
      </div>
      {/* -------------------------------------- TEST -------------------------------------- */}
      {/* <FirstModelCube /> */}
    </div>
  );
}

function Images() {
  // images
  const map = useTexture(["imgs/event1.jpeg", "imgs/wow.webp", "imgs/galaxy.jpeg", "imgs/event2.jpeg", "imgs/event3.jpeg", "imgs/event5.jpeg"]);
  const texture0 = useLoader(THREE.TextureLoader, "imgs/event1.jpeg");
  // const texture0 = THREE.ImageUtils.loadTexture(, "imgs/event1.jpeg");
  const texture1 = useLoader(THREE.TextureLoader, "imgs/event2.jpeg");
  const texture2 = useLoader(THREE.TextureLoader, "imgs/event3.jpeg");
  const texture3 = useLoader(THREE.TextureLoader, "imgs/event4.jpeg");
  const texture4 = useLoader(THREE.TextureLoader, "imgs/event5.jpeg");
  const texture5 = useLoader(THREE.TextureLoader, "imgs/event6.jpeg");
  const texs = [texture0, texture1, texture2];

  // videos
  const arr = [
    useVideoTexture("videos/vid1.mp4"),
    useVideoTexture("videos/vid2.mp4"),
    useVideoTexture("videos/vid3.mp4"),
    useVideoTexture("videos/vid4.mp4"),
    useVideoTexture("videos/vid5.mp4"),
    useVideoTexture("videos/vid6.mp4"),
  ];
  return (
    <>
      {texs.map((texture, idx) => (
        <meshBasicMaterial key={texture.id} attach={`material-${idx}`} map={texture} side={TwoPassDoubleSide} toneMapped={false} />
      ))}
    </>
  );
}

export function Test3(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/blender2/test3.gltf") as GLTFResult;

  const map = useTexture("imgs/event1.jpeg");

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle.geometry} material={materials.Material} scale={2.5}>
        {/* <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} /> */}
        {/* <Suspense fallback={null}>
          <Foo />
        </Suspense> */}
        {/* <Images /> */}
      </mesh>
    </group>
  );
}

useGLTF.preload("/blender2/test3.gltf");

type GLTFResult = GLTF & {
  nodes: {
    Circle: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshBasicMaterial;
  };
};

function HollowCylinderGeometry({ innerRadius = 1.099, outerRadius = 1.1, radialSegments = 6, height = 1.1, ...props }) {
  const ref = useRef();
  const { arcShape, options } = useMemo(() => {
    const arcShape = new THREE.Shape();
    arcShape.moveTo(outerRadius * 2, outerRadius);
    arcShape.absarc(outerRadius, outerRadius, outerRadius, 0, Math.PI * 2, false);
    const holePath = new THREE.Path();
    holePath.moveTo(outerRadius + innerRadius, outerRadius);
    holePath.absarc(outerRadius, outerRadius, innerRadius, 0, Math.PI * 2, true);
    arcShape.holes.push(holePath);
    const options = {
      depth: height,
      bevelEnabled: false,
      steps: 1,
      curveSegments: radialSegments / 2,
    };
    return { arcShape, options };
  }, []);
  useLayoutEffect(() => {
    ref.current.center();
    ref.current.rotateX(Math.PI * -0.5);
  }, []);
  return (
    <>
      <extrudeBufferGeometry ref={ref} args={[arcShape, options]} {...props} />
    </>
  );
}
