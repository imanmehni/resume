import React,{Component} from "react";
import ChangeColor from "../changecolor/changecolor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPalette,
} from "@fortawesome/free-solid-svg-icons";
export default class navigation extends Component{
  changetheme=()=>{
    const fristpage=document.querySelector(".first");
    const aboutpage=document.querySelector(".about");
    const skillpage=document.querySelector(".skill");
    ChangeColor(fristpage,'#282c34','darkgrey','#fff','black')
    ChangeColor(aboutpage,'#854b5b','cadetblue','#fff','black')
    ChangeColor(skillpage,'#dadcd0','darkgrey','#000','black')
  }
  render(){
    return(
        <div className="navigation">
        <div className="changecolor"
            onClick={this.changetheme}
          >
          <FontAwesomeIcon icon={faPalette} size="2x"/>
        </div>
        <ul>
          <li><a href="#First">HOME</a></li>
          <li><a href="#About">ABOUT</a></li>
          <li><a href="#Skill">SKILLS</a></li>
        </ul>
      </div>
    )
  }
    
}