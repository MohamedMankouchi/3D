import { React, Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const ApplewatchModel = () => {
  const watch = useGLTF("./../public/apple_watch_ultra_2/scene.gltf");

  return <primitive object={watch.scene} scale={25} />;
};
export const Applewatch = () => {
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
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [1, 2, 4],
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={2} />
            <OrbitControls autoRotate />
            <ApplewatchModel />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};
