import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Wrapper from "@/components/wrapper";
import { ContextProvider } from "./context/AppContext";
import "./globals.css";

const inter = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tunji's Portfolio",
  description:
    "A friendly Software Engineer with skills in Front-End engineering(ReactJs), Back-End engineering(NodeJs), Wordpress Development, Cloud Engineering(AWS and Microsoft Azure).",
  alternates: {
    canonical: "https://tunji-portfolio.netlify.app/",
    languages: {
      "en-US": "/en-US",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Tunji's Portfolio",
    description:
      "A friendly Software Engineer with skills in Front-End engineering(ReactJs), Back-End engineering(NodeJs), Wordpress Development, Cloud Engineering(AWS and Microsoft Azure).",
    siteId: "1467726470533754880",
    creator: "@el_directo_",
  },
  openGraph: {
    title: "Tunji's Portfolio",
    description:
      "A friendly Software Engineer with skills in Front-End engineering(ReactJs), Back-End engineering(NodeJs), Wordpress Development, Cloud Engineering(AWS and Microsoft Azure).",
    publishedTime: "2023-09-25T00:00:00.000Z",
    authors: ["Tunji"],
  },
  other: {
    "theme-color": "#25632e",
    "og:url": "https://tunji-portfolio.netlify.app/",
    "og:type": "website",
    "og:title": "Tunji's Portfolio",
    "og:description":
      "A friendly Software Engineer with skills in Front-End engineering(ReactJs), Back-End engineering(NodeJs), Wordpress Development, Cloud Engineering(AWS and Microsoft Azure).",
    "og:image": "https://drive.google.com/file/d/1Qa9ptiCkIBu1uOc0tGLROYe8mHMtnDsT/view?usp=sharing",
    "og:image:alt": "Tunji's Portfolio",
    "og:locale": "en_US",
    "og:site_name": "Tunji's Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Wrapper>
            <Toaster
              position="top-right"
              toastOptions={{
                success: {
                  style: {
                    background: "green",
                    color: "white",
                  },
                },
                error: {
                  style: {
                    background: "red",
                    color: "white",
                  },
                },
              }}
            />
            {children}
          </Wrapper>
        </ContextProvider>
      </body>
    </html>
  );
}
