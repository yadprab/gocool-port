import React from "react";
import { Link } from "gatsby";
import { RightChev } from "./RightChev";
function LinkId({ goto, value }) {
  return (
    <>
      <div className="link--id">
        <Link to={goto}>
          {value} <RightChev />
        </Link>
      </div>
    </>
  );
}

export { LinkId };
