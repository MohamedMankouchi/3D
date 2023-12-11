import { React, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const MacbookModel = () => {
  const mac = useGLTF("macbook_pro/scene.gltf");

  return <primitive object={mac.scene} scale={11} />;
};
export const Macbook = () => {
  return (
    <>
      {" "}
      <div className="back-button">
        <Link to={"/"}>
          <button>Back to store</button>
        </Link>
      </div>
      <div className="canvas" style={{ height: "100%" }}>
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={null}>
            <directionalLight intensity={10} position={[0, -50, 0]} />
            <directionalLight intensity={10} position={[0, 10, 0]} />
            <directionalLight intensity={10} position={[20, 0, -100]} />
            <ambientLight intensity={2} />
            <OrbitControls autoRotate />
            <MacbookModel />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};
