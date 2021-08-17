import React from "react";
import { Brushstroke } from "../Brushstroke";
import { LinkId } from "../LinkId";
import { StaticImage } from "gatsby-plugin-image";
import {motion} from 'framer-motion'
function HeroContainer() {
  return (
    <>
      <motion.div className="hero--container">
        <motion.div className="hero--text">
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            exit={{ x: 200, opacity: 0 }}
          >
            i'm gokul chella
          </motion.p>

          <motion.div
            className="title--wrapper"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0.4 }}
            exit={{ x: 200, opacity: 0 }}
          >
            <h1>A Graphic designer</h1>
            <Brushstroke />
          </motion.div>
          <motion.div
            className="nav--to--next"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0.6 }}
            exit={{ x: 200, opacity: 0 }}
          >
            <LinkId goto="/works" value="My Works" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero--image"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          exit={{ x: 200, opacity: 0 }}
        >
          <StaticImage src="./HomepageImages/imagenew.png" alt="gokul" />
        </motion.div>
      </motion.div>
    </>
  );
}

export { HeroContainer };
