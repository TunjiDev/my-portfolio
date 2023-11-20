"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Popup from "../../popup";
import { DataType } from "../frontend/frontend-data";
import NodeIcon from "../../../../../public/icons/node";
import MongoDbIcon from "../../../../../public/icons/mongodb";
import JsIcon from "../../../../../public/icons/javascript";
import BackendData from "./backend-data";

function Backend() {
  const [project, setProject] = useState<DataType | null>(null);

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 m-auto"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      >
        {BackendData.map((data: DataType, i: number) => {
          return (
            <Card key={i} onClick={() => setProject(data)}>
              <CardHeader>
                <Image src={data.imgSrc} alt={data.title} width={0} height={0} sizes="100vw" className={"cardimage"} />
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
                  case "NodeJs":
                    return (
                      <span key={i} className="cursor-pointer" title="NodeJs">
                        <NodeIcon />
                      </span>
                    );
                  case "JavaScript":
                    return (
                      <span key={i} className="cursor-pointer" title="JavaScript">
                        <JsIcon />
                      </span>
                    );
                  case "MongoDb":
                    return (
                      <span key={i} className="cursor-pointer" title="MongoDb">
                        <MongoDbIcon />
                      </span>
                    );
                  case "Mongoose":
                    return (
                      <span key={i} className="cursor-pointer" title="Mongoose">
                        <Image src="/images/mongoose.webp" alt={"mongoose logo"} width={24} height={24} sizes="100vw" />
                      </span>
                    );
                  case "Express":
                    return (
                      <span key={i} className="cursor-pointer" title="Express">
                        <Image src="/images/express.png" alt={"Express logo"} width={24} height={24} sizes="100vw" />
                      </span>
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

export default Backend;
