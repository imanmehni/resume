import React from "react";
import data from "../../data.json";
import "../style/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faStackOverflow,
  faYoutube,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default () => {
  return (
    <div className="social-contianer">
      <a className="github social" href={data.link.github}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a className="stackoverflow social" href={data.link.stackoverflow}>
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>
      <a className="youtube social" href={data.link.youtube}>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a className="linkedin social" href={data.link.linked}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a className="facebook social" href={data.link.facebook}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a className="instagram social" href={data.link.instagram}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};
