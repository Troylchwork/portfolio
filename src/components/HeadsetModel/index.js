import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import CircularProgress from "@mui/material/CircularProgress";
import * as THREE from "three";
import { easing } from "maath";


export default function ThreeScene() {
    const Model = (props) => {
        const mesh = useRef();
        const { scene } = useGLTF("/models/blender.glb");
        const [dummy] = useState(() => new THREE.Object3D());
        const mousePosition = useRef({ x: 0, y: 0 });

        useEffect(() => {
            const handleMouseMove = (event) => {
                mousePosition.current.x =
                    (event.clientX / window.innerWidth) * 2 - 1;
                mousePosition.current.y =
                    -(event.clientY / window.innerHeight) * 2 + 1;
            };
            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, []);

        useFrame((state, dt) => {
            const offsetX = 0.62;
            const offsetY = -0.35;

            dummy.lookAt(
                mousePosition.current.x + offsetX,
                mousePosition.current.y + offsetY,
                1
            );
            easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.01, dt);

        });

        return <primitive object={scene} ref={mesh} dispose={null} {...props} />;
    };

    const Scene = () => {
        return (
            <>
                <ambientLight intensity={0.7} />
                <directionalLight position={[-10, 10, 5]} castShadow />
                <Model />
            </>
        );
    }

    const Loader = () => {
        return (
            <Html center>
                <CircularProgress size="3rem" />
            </Html>
        );
    }


    return (
        <Canvas shadows camera={{ position: [0, 0, 2.5] }}>
            <Suspense fallback={<Loader />}>
                <Scene />
            </Suspense>
        </Canvas>
    );
}
