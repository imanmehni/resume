import React, { Component } from "react";
import FullPage from "./FullPage";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faAngleDoubleDown
} from "@fortawesome/free-solid-svg-icons";
export default class Fullpage extends Component {
  render() {
    return (
      <div id="About">
        <FullPage className="about">
          <h2>{data.sections[0].title}</h2>
          <div>
            {data.sections[0].items.map(p=><p>{p.content}</p>)}
            </div>
            <a href="#Skill" id="arrowdown">
            <FontAwesomeIcon icon={faAngleDoubleDown} size="2x"/>
          </a>
        </FullPage>
      </div>
    );
  }
}
