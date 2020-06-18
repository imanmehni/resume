import React from "react";
import FullPage from "./FullPage";
import Card from "../card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faAngleDoubleUp
} from "@fortawesome/free-solid-svg-icons";
export default () => {
  return (
    <div id="Skill">
      <FullPage className="skill">
        <h2>Skills</h2>
        <div>
          <Card />
        </div>
        <a href="#First" id="arrowdown">
            <FontAwesomeIcon icon={faAngleDoubleUp} size="2x"/>
          </a>
      </FullPage>
    </div>
  );
};
