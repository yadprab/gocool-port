import React from "react";
import { StaticImage } from "gatsby-plugin-image";
function Brushstroke() {
  return (
    <>
      <div className="brush--stroke">
        <StaticImage src="../images/brush.png" alt="brush" />
      </div>
    </>
  );
}

export { Brushstroke };
