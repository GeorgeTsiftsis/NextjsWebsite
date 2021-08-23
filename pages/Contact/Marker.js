import React from "react";
import classes from "./Marker.module.css";

const Marker = (props) => {
  const { color, name, id } = props;
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.gr/maps/place/%CE%91.%CE%93.%CE%A3.+%CE%9A%CE%BF%CE%B6%CE%AC%CE%BD%CE%B7%CF%82+%CE%9C%CE%B1%CE%BA%CE%B5%CE%B4%CE%BF%CE%BD%CE%B9%CE%BA%CE%AE+%CE%94%CF%8D%CE%BD%CE%B1%CE%BC%CE%B7/@40.3007464,21.7858849,17z/data=!4m13!1m7!3m6!1s0x1359d26d28d94dff:0x7f6b8ba56b15ee18!2sEstias+3,+Kozani+501+00!3b1!8m2!3d40.3006863!4d21.7858936!3m4!1s0x1359d26d2c9a16ab:0xb6b78ea356648f1!8m2!3d40.3006863!4d21.7854351">
        <div className={`${classes.pin} ${classes.bounce}`} style={{ backgroundColor: color, cursor: "pointer" }} title={name} />
        <div className={classes.pulse} />
      </a>
    </div>
  );
};

export default Marker;
