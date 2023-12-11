import { React, Suspense, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const IphoneModel = () => {
  const iphone = useGLTF("../public/apple_iphone_15_pro_max_black/scene.gltf");
  return <primitive object={iphone.scene} scale={20} />;
};
export const Iphone = () => {
  return (
    <>
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
            position: [0, -2, 5],
          }}
        >
          <Suspense fallback={null}>
            <directionalLight intensity={25} position={[0, 150, 0]} />
            <directionalLight intensity={2} position={[0, -2, 5]} />
            <ambientLight intensity={2} />
            <OrbitControls autoRotate />
            <IphoneModel />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};
