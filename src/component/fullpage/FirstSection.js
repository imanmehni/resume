import React, { Component } from "react";
import FullPage from "./FullPage";
import SocialIcon from "../icons/socialicon";
import data from "../../data.json";
import Typist from "../typist/typist"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faAngleDoubleDown
} from "@fortawesome/free-solid-svg-icons";
export default class FirstPage extends Component {

  componentDidMount(){
    window.addEventListener('load',Typist(".title",data.title,300))
  }
  render() {
    return (
      <div id="First">
        <FullPage className="first">
          <h1 className="title"></h1>
          <hr/>
          <h2>{data.subtitle}</h2>
          <SocialIcon />

          <a href="#About" id="arrowdown">
            <FontAwesomeIcon icon={faAngleDoubleDown} size="2x"/>
          </a>
          
        </FullPage>
      </div>
    );
  }
}
