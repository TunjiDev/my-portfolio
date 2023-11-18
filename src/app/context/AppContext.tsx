"use client";

import { createContext, useRef, useContext } from "react";

interface AppContextType {
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType>({
  aboutRef: { current: null },
  projectsRef: { current: null },
  contactRef: { current: null },
});

function ContextProvider({ children }: ContextProviderProps) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return <AppContext.Provider value={{ aboutRef, projectsRef, contactRef }}>{children}</AppContext.Provider>;
}

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within the App!");
  }
  return context;
};

export { ContextProvider, useAppContext };
