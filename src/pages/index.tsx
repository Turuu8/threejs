import { RenderTexture, OrbitControls, PerspectiveCamera, useVideoTexture, useTexture, useGLTF, Image, Text } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import FirstModelCube from "@/components/FirstModelCube";
import { Canvas, useLoader } from "@react-three/fiber";
import { CylinderGeometry, TwoPassDoubleSide } from "three";
import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { D6Model } from "../../public/today/D6";

export default function Home() {
  const ref = useRef();

  return (
    <div className=" flex items-center justify-center flex-col">
      <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-[#1c8bfa22]">
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
          <mesh scale={2.3}>
            {/* <HollowCylinderGeometry /> */}
            {/* <meshPhongMaterial>
              <RenderTexture attach="map">
                <Text fontSize={3}> hello</Text>
                <Image url="/imgs/event6.jpeg" />
              </RenderTexture>
            </meshPhongMaterial>
            <Suspense fallback={null}>
              <Images />
            </Suspense> */}
            <D6Model />
          </mesh>
          <OrbitControls enableZoom={false} minPolarAngle={1.3} maxPolarAngle={Math.PI / 1.6} />
        </Canvas>
      </div>
      {/* -------------------------------------- TEST -------------------------------------- */}
      <div className="h-[100vh] w-full">
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
          <mesh scale={1}>
            {/* <cylinderGeometry attach="geometry" args={[2, 2, 2, 6, 1, true]} /> */}
            {/* <HollowCylinderGeometry /> */}
            <boxGeometry />
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

export function Images() {
  // images
  // const map = useTexture([
  //   "today/event1.jpeg",
  //   "today/event2.jpeg",
  //   "today/event3.jpeg",
  //   "today/event4.jpeg",
  //   "today/event5.jpeg",
  //   "today/event6.jpeg",
  // ]);
  const texture0 = useLoader(THREE.TextureLoader, "today/event1.jpeg");
  const texture1 = useLoader(THREE.TextureLoader, "today/event2.jpeg");
  const texture2 = useLoader(THREE.TextureLoader, "today/event3.jpeg");
  const texture3 = useLoader(THREE.TextureLoader, "today/event4.jpeg");
  const texture4 = useLoader(THREE.TextureLoader, "today/event5.jpeg");
  const texture5 = useLoader(THREE.TextureLoader, "today/event6.jpeg");
  const texs = [texture0];

  // videos
  const arr = [
    useVideoTexture("videos/vid1.mp4"),
    // useVideoTexture("videos/vid2.mp4"),
    // useVideoTexture("videos/vid3.mp4"),
    // useVideoTexture("videos/vid4.mp4"),
    // useVideoTexture("videos/vid5.mp4"),
    // useVideoTexture("videos/vid6.mp4"),
  ];
  return (
    <>
      {arr.map((texture, idx) => (
        <meshBasicMaterial key={texture.id} attach={`material`} map={texture} side={TwoPassDoubleSide} />
      ))}
    </>
  );
}

export function Image2() {
  // videos
  const arr = [useVideoTexture("videos/vid2.mp4")];
  return (
    <>
      {arr.map((texture, idx) => (
        <meshBasicMaterial key={texture.id} attach={`material`} map={texture} side={TwoPassDoubleSide} />
      ))}
    </>
  );
}

export function Image3() {
  // videos
  const arr = [useVideoTexture("videos/vid3.mp4")];
  return (
    <>
      {arr.map((texture, idx) => (
        <meshBasicMaterial key={texture.id} attach={`material`} map={texture} side={TwoPassDoubleSide} />
      ))}
    </>
  );
}

export function Image4() {
  // videos
  const arr = [useVideoTexture("videos/vid4.mp4")];
  return (
    <>
      {arr.map((texture, idx) => (
        <meshBasicMaterial key={texture.id} attach={`material`} map={texture} side={TwoPassDoubleSide} />
      ))}
    </>
  );
}

export function Image5() {
  // videos
  const arr = [useVideoTexture("videos/vid5.mp4")];
  return (
    <>
      {arr.map((texture, idx) => (
        <meshBasicMaterial key={texture.id} attach={`material`} map={texture} side={TwoPassDoubleSide} />
      ))}
    </>
  );
}

export function Image6() {
  // videos
  const arr = [useVideoTexture("videos/vid6.mp4")];
  return (
    <>
      {arr.map((texture, idx) => (
        <meshBasicMaterial key={texture.id} attach={`material`} map={texture} side={TwoPassDoubleSide} />
      ))}
    </>
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
