import React from "react";
import classes from "./Anouncements.module.css";
import { useRouter } from "next/router";

export default function Anouncement(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + props.anouncement.id);
  }

  return (
    <>
      <div className={classes.single_box_of_anouncements}>
        <img className={classes.photo1} src={props.anouncement.photo} alt="lorem"></img>
        <div className={classes.texts_of_anouncements}>
          <p className={classes.date_of_anouncements}> {props.anouncement.date}</p>
          <p className={classes.description}> {props.anouncement.description}</p>

          <button onClick={showDetailsHandler} className={classes.backlink_more_info}>
            {props.anouncement.readMore}
          </button>
        </div>
      </div>
    </>
  );
}
