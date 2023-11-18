"use client";

import Header from "@/components/ui/layout/Header";
import About from "@/components/ui/layout/About";
import Projects from "@/components/ui/layout/Projects";
import Contact from "@/components/ui/layout/Contact";
import { useAppContext } from "./context/AppContext";

export default function Home() {
  const { aboutRef, projectsRef, contactRef } = useAppContext();
  return (
    <>
      <Header />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  );
}
