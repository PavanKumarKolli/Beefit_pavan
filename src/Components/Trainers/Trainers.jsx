import React from "react";
import "./Trainers.css";

export const Trainers = () => {
  return (
    <div className="trainers_min_container">
      <div className="trainers_heading_container">
        <div>
          <span style={{ color: "#f36100" }}>OUR TEAM</span>
          <h2 style={{ color: "#fff" }}>TRAIN WITH EXPERTS</h2>
        </div>
        <div>
          <button className="trainee_btn">APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};
