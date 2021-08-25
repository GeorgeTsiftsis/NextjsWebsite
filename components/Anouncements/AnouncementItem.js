import React from "react";
import classes from "./Anouncements.module.css";
import Link from "next/link";

export default function AnouncementItem(props) {
  return (
    <section className={classes.single_box_of_anouncements} key={props.anouncement.id}>
      <img className={classes.photo1} src={props.anouncement.photo} alt={props.anouncement.title}></img>
      <div className={classes.texts_of_anouncements}>
        <h1 className={classes.title}> {props.anouncement.title}</h1>
        <p className={classes.date_of_anouncements}> {props.anouncement.date}</p>
        <p className={classes.description}> {props.anouncement.description}</p>
        <Link passHref href={"/announcement/" + props.anouncement.id}>
          {/* <span className={classes.span}> */}
          <button className={classes.backlink_more_info}>{props.anouncement.readMore}</button>
          {/* </span> */}
        </Link>
      </div>
    </section>
  );
}
