import React from "react";
import classes from "./Anouncements.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function AnouncementItem(props) {
  return (
    <section
      className={classes.single_box_of_anouncements}
      key={props.anouncement.id}
    >
      <Image
        width={400}
        height={300}
        className={classes.photo1}
        src={props.anouncement.photo}
        alt={props.anouncement.title}
      ></Image>
      <div className={classes.texts_of_anouncements}>
        <h1 className={classes.title}> {props.anouncement.title}</h1>
        <p className={classes.date_of_anouncements}>{props.anouncement.date}</p>
        {/* <motion.div
          className={classes.description}
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
        ></motion.div> */}
        <p className={classes.description}>{props.anouncement.description} </p>
        <Link passHref href={"/announcement/" + props.anouncement.id}>
          <button className={classes.backlink_more_info}>
            {props.anouncement.readMore}
          </button>
        </Link>
      </div>
    </section>
  );
}
