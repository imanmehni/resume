import React, { Component } from "react";
import data from "../../data.json";
import "./card.css";
export default class nav extends Component {
  render() {
    return Object.keys(data.sections[1].items).map(key => {
      return (
        <div className="card">

          <div className="image">
            <img src={data.sections[1].items[key].content.image} alt="" />
          </div>
          <div className="details">
            <div className="center">
              <h3>
                {data.sections[1].items[key].title}
                <br />
                <span>{data.sections[1].items[key].sub}</span>
              </h3>
              <p>{data.sections[1].items[key].content.details}</p>
            </div>
          </div>
        </div>
      );
    });
  }
}
