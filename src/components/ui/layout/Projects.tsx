"use client";

import { forwardRef } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";
import Frontend from "@/components/ui/tabs/frontend/index";
import Backend from "@/components/ui/tabs/backend/index";
import WordPress from "@/components/ui/tabs/wordpress/index";

interface Props {}

// eslint-disable-next-line react/display-name
const Projects = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div className="mb-20 sm:mb-40" ref={ref}>
      <h1 className="text-center text-2xl sm:text-5xl font-bold mb-8">Projects.</h1>
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="wordpress">WordPress</TabsTrigger>
        </TabsList>
        <TabsContent value="frontend">
          <Frontend />
        </TabsContent>
        <TabsContent value="backend">
          <Backend />
        </TabsContent>
        <TabsContent value="wordpress">
          <WordPress />
        </TabsContent>
      </Tabs>
    </div>
  );
});

export default Projects;
