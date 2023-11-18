"use client";

import { forwardRef } from "react";
import { Button } from "../button";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Resolver, useForm } from "react-hook-form";
import Link from "next/link";

import GithubIcon from "../../../../public/icons/github";
import LinkedinIcon from "../../../../public/icons/linked-in";
import TwitterIcon from "../../../../public/icons/twitter";
import PhoneIcon from "../../../../public/icons/phone";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactSchema } from "@/schema";
import { ContactType } from "@/types";
import { Textarea } from "../textarea";
import Map from "@/components/ui/map/Map";
import LoadingSpinner from "../spinner";

interface Props {}

// eslint-disable-next-line react/display-name
const Contact = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const formHook = useForm<ContactType>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  } as { resolver: Resolver<ContactType> });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = formHook;

  const submit = async (data: any) => {
    const result = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const res = await result.json();

    if (res.status === "success") {
      toast.success("Message sent successfully!");
      reset();
      return res;
    } else {
      return toast.error("An error occurred, please try again!");
    }
  };

  return (
    <div className="mb-20 sm:mb-40" ref={ref}>
      <h1 className="text-center text-2xl sm:text-5xl font-bold mb-8">REACH ME.</h1>

      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10">
        <motion.div
          className="h-full w-full"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <p className="text-center font-bold mb-8">Let&apos;s work together...How do u take your coffee?</p>

          <div className="h-full w-full">
            <div className="flex justify-between sm:justify-evenly items-center mb-16">
              <Link
                href={"https://github.com/TunjiDev"}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform duration-300 ease-out hover:translate-y-2"
              >
                <div className="flex items-center">
                  <GithubIcon />
                  <span className="text-sm sm:text-base">Github</span>
                </div>
              </Link>

              <Link
                href={"https://www.linkedin.com/in/adetunji-igbatayo-0a059416b"}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform duration-300 ease-out hover:translate-y-2"
              >
                <div className="flex items-center">
                  <LinkedinIcon />
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </div>
              </Link>

              <Link
                href={"https://twitter.com/El_directo_"}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform duration-300 ease-out hover:translate-y-2"
              >
                <div className="flex items-center">
                  <TwitterIcon />
                  <span className="text-sm sm:text-base">Twitter</span>
                </div>
              </Link>

              <Link
                href={"tel:+2349053572653"}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform duration-300 ease-out hover:translate-y-2"
              >
                <div className="flex items-center">
                  <PhoneIcon />
                  <span className="text-sm sm:text-base">Call me</span>
                </div>
              </Link>
            </div>

            <div className="h-full w-full">
              <Form {...formHook}>
                <form onSubmit={handleSubmit(submit)} className="space-y-8">
                  <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Kindly Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Kindly Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How may I help you?</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter your message here..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button size={"xl"} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <LoadingSpinner /> : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="h-full w-full"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <Map />
        </motion.div>
      </div>
    </div>
  );
});

export default Contact;
