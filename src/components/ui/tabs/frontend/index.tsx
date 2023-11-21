"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Popup from "../../popup";
import ChakraIcon from "../../../../../public/icons/chakra";
import JsIcon from "../../../../../public/icons/javascript";
import ReactIcon from "../../../../../public/icons/react";
import NextIcon from "../../../../../public/icons/next";
import TypeScriptIcon from "../../../../../public/icons/typescript";
import MuiIcon from "../../../../../public/icons/mui";
import ReactRouterIcon from "../../../../../public/icons/react-router";
import FirebaseIcon from "../../../../../public/icons/firebase";
import ReduxIcon from "../../../../../public/icons/redux";
import FrontendData, { DataType } from "./frontend-data";

function Frontend() {
  const [project, setProject] = useState<DataType | null>(null);

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 m-auto"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        {FrontendData.map((data: DataType, i: number) => {
          return (
            <Card key={i} onClick={() => setProject(data)}>
              <CardHeader>
                <Image
                  src={data.imgSrc}
                  alt={data.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={"cardimage"}
                  loading="lazy"
                />
              </CardHeader>
              <CardContent>
                <p className="text-center">{data.title}</p>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>

      {project && (
        <Popup popupOpen={!!project} setPopupOpen={(popupOpen) => setProject(null)}>
          <div>
            <Image
              src={project?.imgSrc || ""}
              alt={project?.title || ""}
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className={"cardimage"}
            />
          </div>
          <h1 className="text-xl sm:text-2xl my-4">
            <span className="text-[#25632e]">Title: </span>
            {project?.shortTitle}
          </h1>
          <p className="text-sm sm:text-base mb-8">
            <span className="text-[#25632e]">Description: </span>
            {project?.description}
          </p>
          <div className="flex mb-8">
            <div className="text-[#25632e]">Technologies: </div>
            <div className="flex justify-evenly items-center w-full">
              {project?.technologies.map((tech, i) => {
                switch (tech) {
                  case "Chakra UI":
                    return (
                      <div key={i} className="cursor-pointer" title="Chakra UI">
                        <ChakraIcon />
                      </div>
                    );
                  case "JavaScript":
                    return (
                      <div key={i} className="cursor-pointer" title="JavaScript">
                        <JsIcon />
                      </div>
                    );
                  case "ReactJs":
                    return (
                      <div key={i} className="cursor-pointer" title="ReactJs">
                        <ReactIcon />
                      </div>
                    );
                  case "NextJs":
                    return (
                      <div key={i} className="cursor-pointer" title="NextJs">
                        <NextIcon />
                      </div>
                    );
                  case "TypeScript":
                    return (
                      <div key={i} className="cursor-pointer" title="TypeScript">
                        <TypeScriptIcon />
                      </div>
                    );
                  case "Material UI":
                    return (
                      <div key={i} className="cursor-pointer" title="Material UI">
                        <MuiIcon />
                      </div>
                    );
                  case "React Router":
                    return (
                      <div key={i} className="cursor-pointer" title="React Router">
                        <ReactRouterIcon />
                      </div>
                    );
                  case "Firebase":
                    return (
                      <div key={i} className="cursor-pointer" title="Firebase">
                        <FirebaseIcon />
                      </div>
                    );
                  case "Redux":
                    return (
                      <div key={i} className="cursor-pointer" title="Redux">
                        <ReduxIcon />
                      </div>
                    );
                  case "React Hook Form":
                    return (
                      <div key={i} className="cursor-pointer" title="React Hook Form">
                        <Image
                          src="/images/react-hook-form.png"
                          alt={"firebase logo"}
                          width={24}
                          height={24}
                          sizes="100vw"
                        />
                      </div>
                    );
                  case "Supabase":
                    return (
                      <div key={i} className="cursor-pointer" title="Supabase">
                        <Image src="/images/supabase.png" alt={"supabase logo"} width={24} height={24} sizes="100vw" />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>

          <div className="flex">
            <span className="text-[#25632e]">Live: </span>
            <div className="flex justify-evenly items-center ml-4 text-sm sm:text-base">
              <div className="mr-4">
                <Link href={project?.githubUrl as string} target="_blank" rel="noopener noreferrer">
                  See Repository
                </Link>
              </div>

              <div>
                <Link href={project?.siteUrl} target="_blank" rel="noopener noreferrer">
                  See Live Project
                </Link>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}

export default Frontend;
