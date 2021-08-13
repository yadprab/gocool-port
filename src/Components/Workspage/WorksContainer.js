import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Brushstroke } from "../Brushstroke";
import {container, item} from './ani';
import {motion} from 'framer-motion'
function WorksContainer() {
  return (
    <>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.li variants={item}>
          <div className="image--section">
            <StaticImage src="./worksimg/Rectangle19.png" alt="Poster design" />
          </div>
          <div className="text--section">
            <div className="title">
              <h2>Poster Designs</h2>
              <Brushstroke />
            </div>
            <p>
              if you are new to the gallery, please ask us first before
              visiting.
            </p>
          </div>
        </motion.li>
        <motion.li variants={item}>
          <div className="image--section">
            <StaticImage
              src="./worksimg/Rectangle20.png"
              alt="Abstract design"
            />
          </div>
          <div className="text--section">
            <div className="title">
              <h2>Abstract Arts</h2>
              <Brushstroke />
            </div>
            <p>
              if you are new to the gallery, please ask us first before
              visiting.
            </p>
          </div>
        </motion.li>
        <motion.li variants={item}>
          <div className="image--section">
            <StaticImage src="./worksimg/Rectangle21.png" alt="Poster design" />
          </div>
          <div className="text--section">
            <div className="title">
              <h2>Digital Arts</h2>
              <Brushstroke />
            </div>
            <p>
              if you are new to the gallery, please ask us first before
              visiting.
            </p>
          </div>
        </motion.li>
      </motion.ul>
    </>
  );
}

export { WorksContainer };
