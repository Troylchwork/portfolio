import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
        const { viewport } = useThree();

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
            // --- 1. 這是您原本覺得沒問題的 Offset 計算邏輯 (完全保留) ---
            const baseViewportWidth = 6.5;
            const ratio = viewport.width / baseViewportWidth;

            const targetOffsetX = 1.1 * ratio;
            const targetOffsetY = -0.35 * ratio;

            // --- 2. 新增：靈敏度設定 (Intensity) ---

            // X 軸靈敏度：數字越大，頭左右轉動幅度越大
            // 如果覺得左右轉太快，改小 (例如 0.5)；覺得轉不夠，改大 (例如 2.0)
            const xIntensity = 1.25;

            // Y 軸靈敏度：數字越大，頭上下轉動幅度越大
            // 您之前覺得 Y 軸太慢，可以設為 3 或 4
            const yIntensity = 0.9;

            // --- 3. 應用靈敏度 ---
            dummy.lookAt(
                (mousePosition.current.x * xIntensity) + targetOffsetX, // X 軸乘上靈敏度
                (mousePosition.current.y * yIntensity) + targetOffsetY, // Y 軸乘上靈敏度
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
