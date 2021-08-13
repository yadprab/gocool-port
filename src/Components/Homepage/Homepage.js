import React from "react";
import { Nav } from "../Nav";
import { HeroContainer } from "./HeroContainer";
function Homepage() {
  return (
    <>
      <main className="homepage--main">
        <div className="header--wrapper">
          <div className="header">
            <Nav />
            <HeroContainer />
          </div>
        </div>
      </main>
    </>
  );
}

export {Homepage};
