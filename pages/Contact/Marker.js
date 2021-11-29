import React from "react";
import classes from "./Marker.module.css";

const Marker = (props) => {
  const { color, name, id } = props;
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/AiYZRDCK4PyLPSMs9"
      >
        <div
          className={`${classes.pin} ${classes.bounce}`}
          style={{ backgroundColor: color, cursor: "pointer" }}
          title={name}
        />
      </a>
    </div>
  );
};

export default Marker;
