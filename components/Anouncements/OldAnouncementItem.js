import React from "react";
import classes from "./Anouncements.module.css";
import { motion } from "framer-motion";

import Link from "next/link";

export default function OldAnouncementItem(props) {
  return (
    <section
      className={classes.single_box_of_anouncements}
      key={props.anouncement.id}
    >
      <img
        className={classes.photo1}
        src={props.anouncement.photo}
        alt={props.anouncement.title}
      ></img>
      <div className={classes.texts_of_anouncements}>
        <h1 className={classes.title}> {props.anouncement.title}</h1>
        <p className={classes.date_of_anouncements}>
          {" "}
          {props.anouncement.date}
        </p>
        <p className={classes.description}> {props.anouncement.description}</p>
        {/* <motion.div
          dangerouslySetInnerHTML={{
            __html: props.anouncement["description"],
          }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.8,
              },
            },
          }}
          className={classes.description}
        ></motion.div> */}
        <Link passHref href={"/announcement/" + props.anouncement.id}>
          <span className={classes.span}>
            <a className={classes.backlink_more_info}>
              Διαβάστε Περισσότερα
            </a>
          </span>
        </Link>
      </div>
    </section>
  );
}
