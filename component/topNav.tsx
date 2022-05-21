import type { NextComponentType } from "next";
import { useEffect, useState } from "react";

const TopNav: NextComponentType = () => {
  return (
    <nav>
      <ul>
        <li>1. who am i</li>
        <li>2. tech</li>
        <li>3. project</li>
        <li>4. 활동</li>
        <li>5. last</li>
      </ul>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <style jsx>
        {`
          nav {
            background-color: yellow;
            height: 3rem;
            line-height: 3rem;
            position: sticky;
            top: 0;
            left: 0;
            z-index: 100;
          }
          ul {
            list-style-type: none;
            margin: 0 auto;
          }
          li {
            float: left;
            width: 20%;
            text-align: center;
          }
          li:after {
            clear: both;
          }
        `}
      </style>
    </nav>
  );
};

export default TopNav;
