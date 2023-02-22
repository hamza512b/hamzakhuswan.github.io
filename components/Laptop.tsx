/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\laptop.glb -t
*/

import * as THREE from "three";
import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations, useCursor } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";
import {
  CanvasTexture,
  MeshBasicMaterial,
  MeshStandardMaterial,
  RepeatWrapping,
} from "three";
import { ScreenCanvas } from "./ScreenCanvas";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube_1: THREE.Mesh;
    Keyboard: THREE.Mesh;
    Screen: THREE.Mesh;
    Top: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshBasicMaterial;
    Light: THREE.MeshStandardMaterial;
    keys: THREE.MeshStandardMaterial;
    Screen: THREE.MeshPhysicalMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Cube.001Action.001";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
let start = Date.now();
export function Laptop(
  props: JSX.IntrinsicElements["group"] & {
    canvasRef: React.RefObject<HTMLCanvasElement>;
  }
) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/laptop.glb") as GLTFResult;
  const { actions } = useAnimations<GLTFAction>(animations, group);

  const { screenCanvas, screenMaterial } = useMemo(() => {
    const canvas2d = document.createElement("canvas");
    canvas2d.width = 1920 /4;
    canvas2d.height = 1080 /4;
    const screenCanvas = new ScreenCanvas(canvas2d);

    const texture = new CanvasTexture(canvas2d);
    texture.flipY = false;
    texture.wrapS = RepeatWrapping;
    texture.repeat.x = -1;
    texture.needsUpdate = true;
    const screenMaterial = new MeshBasicMaterial({ map: texture });
    // screenMaterial.side = THREE.BackSide;
    return { screenMaterial, screenCanvas };
  }, []);

  useEffect(() => {
    actions["Cube.001Action.001"]?.play();
  }, [actions]);

  useFrame(() => {
    const delay = 500;
    if (start + delay <= Date.now()) {
      screenCanvas.play();
      screenMaterial.map!.needsUpdate = true;
      start = Date.now();
    }
  });

  // useFrame(({ mouse, viewport }) => {
  //   group.current?.rotation.set(0, (mouse.x / viewport.width) * 2 * Math.PI, 0);
  // });
  useEffect(() => {
    function handleMouseMove(ev: MouseEvent) {
      const box = props.canvasRef.current?.getBoundingClientRect();
      if (box)
        group.current?.rotation.set(
          0,
          (ev.x - box.right + box.width / 2) * 0.0001,
          0
        );
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [props.canvasRef]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Bottom">
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            castShadow
          />
          <mesh
            name="Cube_1"
            geometry={nodes.Cube_1.geometry}
            material={materials.Light}
            castShadow
          />
          <mesh
            name="Keyboard"
            geometry={nodes.Keyboard.geometry}
            material={materials.keys}
            position={[0, -0.04, 0]}
            castShadow
          />
          <mesh
            name="Screen"
            geometry={nodes.Screen.geometry}
            material={screenMaterial}
            castShadow
          />
          <mesh
            name="Top"
            geometry={nodes.Top.geometry}
            material={materials.Material}
            castShadow
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/laptop.glb");