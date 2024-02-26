import React from "react";
import styles from "./Cards.module.scss"
const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, location, status, image } = x;
      return (
        <div key={id} className="col-4 position-relative">
          <div className="">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6"> Last location</div>
                <div className="fs-5">{location.name} </div>
                <div className={`${styles.badges} position-absolute badge text-bg-success `}>
                  {status}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No character found :/";
  }
  return <>{display}</>;
};
export default Cards;