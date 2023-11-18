"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Button } from "../button";
import { useAppContext } from "@/app/context/AppContext";
import Styles from "./Header.module.css";

function Header() {
  const { contactRef } = useAppContext();

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView();
  };

  return (
    <header className="flex flex-col md:flex-row justify-center md:justify-between flex-col-reverse items-center h-[95vh]">
      <motion.div
        className="w-full lg:mr-8"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        <div className="w-full lg:mr-8">
          <h1 className="text-2xl sm:text-5xl font-bold mb-8">Hi, I&apos;m Tunji</h1>
          <p className="sm:text-xl font-medium mb-4">A Frontend Engineer based in Lagos, Nigeria.</p>
          <p className="sm:text-lg font-medium mb-8">
            I enjoy creating delightful, user friendly and forward-thinking web applications.
          </p>

          <div className="mt-5">
            <Button onClick={scrollToContact}>Get In Touch</Button>
          </div>
        </div>
      </motion.div>

      <div className="w-full h-1/2 flex justify-center items-center relative lg:ml-8">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.7}>
            <MeshDistortMaterial color={"#25632e"} attach={"material"} distort={0.5} speed={2} />
          </Sphere>
        </Canvas>
        <Image
          src="/images/tunji.png"
          alt="tunji's photo"
          width={250}
          height={250}
          sizes="100vw"
          className={`${Styles.img} `}
        />
      </div>
    </header>
  );
}

export default Header;
