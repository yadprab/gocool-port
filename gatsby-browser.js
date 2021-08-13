import React from "react";
import { Layout } from "./src/Components/Layout";
import { AnimatePresence } from "framer-motion";
import "./src/styles/styles.css";
function wrapPageElement({ element, props }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout {...props}>{element}</Layout>
    </AnimatePresence>
  );
}

export { wrapPageElement };
