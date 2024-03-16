import React from "react";
import Status from "../Filter/Category/Status.js";
import Gender from "../Filter/Category/Gender.js";
import Species from "../Filter/Category/Species.js";

const Filter = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gender/>
        <Species/>
        <Status/>
      </div>
    </div>
  );
};

export default Filter;
