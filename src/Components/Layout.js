import React from "react";
import { AnimatePresence } from "framer-motion";
function Layout(props) {
  return (
    <>
    
      <AnimatePresence exitBeforeEnter>{props.children}</AnimatePresence>
    </>
  );
}

export { Layout };
