import React from "react";
import { WorksContainer } from "./WorksContainer";
import { Nav } from "../Nav";
import { motion } from "framer-motion";
import {LinkId} from '../LinkId'
function WorksPage() {
  return (
    <>
      <main className="work--page--main">
        <Nav />

        <div className="works--page--wrapper">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0.4 }}
            exit={{ y: 80, opacity: 0 }}
          >
            My works
          </motion.h1>
          <WorksContainer />

          <motion.div
            className="navigate--next--page"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0.6 }}
            exit={{ x: 200, opacity: 0 }}
          >
            <LinkId goto="/contact" value="contact" />
          </motion.div>
        </div>
      </main>
    </>
  );
}

export { WorksPage };
