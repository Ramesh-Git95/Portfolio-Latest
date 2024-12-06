import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Bio from "./sections/Bio";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
import { motion, useAnimation, useInView } from "framer-motion";
import WorkExpirience from "./sections/WorkExpirience";
import ChatSupport from "./components/ChatSupport";
import Testimonial from "./sections/Testimonial";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControll = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControll.start("visible");
    }
  }, [isInView]);

  const numbers = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7"
      >
        <motion.div
          className="flex flex-col items-center justify-start"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControll}
          transition={{ ease: "easeInOut", duration: 2, delay: 0.1 }}
        >
          <Bio />
          <motion.div
            className=""
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControll}
            transition={{ ease: "easeInOut", duration: 2, delay: 0.5 }}
          >
            {/* <Skills /> */}
          </motion.div>
          <motion.div
            className=""
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControll}
            transition={{ ease: "easeInOut", duration: 2, delay: 2.5 }}
          >
            {/* <WorkExpirience /> */}
          </motion.div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 300 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControll}
          transition={{ duration: 2, delay: 1.5 }}
          className="col-span-2"
        >
          <Projects />

          <Testimonial />
           {/* <Work/>  */}
        </motion.div>
        <ChatSupport />
      </div>
    </>
  );
}

export default App;
