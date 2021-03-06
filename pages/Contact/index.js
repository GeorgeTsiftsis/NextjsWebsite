import FormforContact from "../../components/FormforContact/FormforConract";
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { motion } from "framer-motion";
import TimeScedule from "../../components/TimeScedule/index";
import HorizontalLine from "../../components/HorizontalLines/HorizontalLine/HorizontalLine";
import TelContact from "../../components/TelContact";
import classes from "./classes.module.css";
import Head from "next/head";
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const SimpleMap = () => {
  const center = {
    lat: 40.3006998281867,
    lng: 21.78543607992064,
  };
  const zoom = 16;
  const defaultOptions = { scrollwheel: false };

  {
    return (
      <>
        <Head>
          <title> Α.Σ. Μακεδονική Δύναμη Κοζάνης Επικοινωνία </title>
          <meta
            name="description"
            content="Πληροφοριες Επικοινωνίας για την Μακεδονικη Δύναμη Κοζάνης"
          />
        </Head>
        <motion.section
          style={{ backgroundColor: "#6096ba" }}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
        >
          <HorizontalLine title={"Πληροφορίες"} />
          <div className={classes.container_details_contact}>
            <p className={classes.text_details}>
              Η έδρα του συλλόγου βρίσκεται επί της οδού Εστίας 3, ΤΚ 50131
              Κοζάνη. Επικοινωνήστε μαζί μας για οποιαδήποτε πληροφορία/απορία
              μέσω της παρακάτω ηλεκτρονικής φόρμας ή να μας καλέσετε στο{" "}
              <strong style={{ display: "block" }}>Σταθερό: 24610 25054</strong>{" "}
              <strong> Κινητό: 6946504020</strong>.
            </p>
          </div>

          <div className={classes.bigDiv}>
            <FormforContact />
            <div className={classes.SceduleContact}>
              <TimeScedule style={{ alignSelf: "end" }} />
              <TelContact />
            </div>
          </div>

          <div style={{ height: "400px", width: "100%", padding: "1rem" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_API_KEY,
              }}
              defaultCenter={center}
              defaultZoom={zoom}
              defaultOptions={defaultOptions}
            >
              <Marker
                lat={center.lat}
                lng={center.lng}
                name="Εστίας 3, Πάτηστε για οδηγίες"
                color="red"
              />
            </GoogleMapReact>
          </div>
        </motion.section>
      </>
    );
  }
};
export default SimpleMap;
