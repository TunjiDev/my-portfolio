import { forwardRef } from "react";
import { motion } from "framer-motion";

import { Button } from "../button";
import Cube from "../cube";

interface Props {}

// eslint-disable-next-line react/display-name
const About = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div className="flex justify-center items-center mb-20 sm:mb-40" ref={ref}>
      <div>
        <h1 className="text-center text-2xl sm:text-5xl font-bold mb-8">About.</h1>

        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
          <motion.div
            className="w-1/4"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            <Cube />
          </motion.div>

          <motion.div
            className="md:w-3/4 md:px-10"
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            <p className="mb-4">
              I am a friendly Software Engineer with a primary expertise in Front-End engineering with ReactJs & NextJs.
              Additionally, I have proficiency in Back-End engineering with NodeJs, some experience with Wordpress
              Development, and also a background in Cloud Engineering encompassing both AWS and Microsoft Azure.
            </p>

            <p className="mb-4">
              I demonstrated my expertise as a Frontend Software Developer at Octosoft Technologies Ltd, contributing
              significantly to the development of Octodoc HIMS, an EMR and Health Information System for health care
              providers. I excel in collaborating with back-end developers, ensuring seamless integration of user-facing
              elements with server-side logic. My proficiency extends to database administration, having served as a
              Microsoft Azure Database Administrator Intern at Stanbic IBTC DISEP. I have also made notable
              contributions as a Backend Software Developer (Nodejs) at Anter Technologies.
            </p>

            <p className="mb-4">
              I am four times Microsoft Azure certified, and possess fundamental knowledge of AWS cloud services. I have
              a strong passion for building scalable and reliable web applications. In my tech stack you will find
              JavaScript, ReactJs, NextJs, ChakraUI, TailwindCSS, Shadcn, Supabase and more. For additional details
              please refer to my resume below.
            </p>

            <div className="w-64 m-auto">
              <a href="/Resume- Adetunji Igbatayo.pdf" target="_blank" download="Resume- Adetunji Igbatayo.pdf">
                <Button>
                  <p className="mr-4">Download Resume</p>

                  <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1zM5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default About;
