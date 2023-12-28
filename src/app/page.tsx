"use client"
import Image from 'next/image'
import { useRef } from "react"
import { OrbitControls, Html } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three";

export default function Home() {
  const textureRef: any = useRef();
  const texture = useLoader(TextureLoader, "/home.jpg");
  return (
    <main className="fixed h-screen w-screen">
      <Canvas
        style={{
          backgroundImage: `url("/home.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className='h-screen w-screen'
        camera={{
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 1,
          far: 1100,
          position: [0, 0, 0.01],
        }}
      >

        <mesh>
          <Html>


            {/* <svg
              className='w-64 h-64'
              viewBox="171.53185630241583 100.16637818406558 232.6719238953561 217.3870203772558"
              data-object-id="d244cc9f-33ac-47aa-9475-a81fd7e8b777"
              data-title="Arya"
              data-image-map-id="e2291345-1481-44f6-888a-162e12728fa0 [fullscreen]"
            >
              <polygon className="bg-black w-60 h-60" points="171.53185630241583,113.75305987138564 171.53185630241583,127.3397415587057 213.99023657529102,236.0331950572662 229.2752534735261,259.80988801007635 298.90699712104146,317.5533985613214 356.65039429215176,295.47492743929143 404.20378019777195,212.25650210445608 392.31543372136684,100.16637818406558 "></polygon>
            </svg> */}
          </Html>
        </mesh>

      </Canvas>
    </main>
  )
}
