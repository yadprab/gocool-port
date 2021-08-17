import React from "react";
import { Logo } from "./Logo";
import { HamIcon } from "./HamIcon";
import { Link } from "gatsby";

function Nav(props) {

  console.log(props);
  return (
    <>
      <nav>
        <div className="nav--wrapper">
          <div className="top--section">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="bottom--section">
            <button id="navigation--button">
              <HamIcon />
            </button>

            <ul className="desktop--nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Nav };
