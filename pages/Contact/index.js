import ContactDetails from "../../components/ContactDetails/ContactDetails";
import FormforContact from "../../components/FormforContact/FormforConract";

import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function SimpleMap(props) {
  const [center, setCenter] = useState({ lat: 40.3006998281867, lng: 21.78543607992064 });
  const [zoom, setZoom] = useState(16);
  const defaultOptions = { scrollwheel: false };
  {
    return (
      <motion.section initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        <ContactDetails />
        <FormforContact />
        <div style={{ height: "400px", width: "100%", padding: "1rem" }}>
          <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyD8PhnFnWcQnL8Qz2m9s8tKThO1IKZuBvg" }} defaultCenter={center} defaultZoom={zoom} defaultOptions={defaultOptions}>
            <Marker lat={40.3006998281867} lng={21.78543607992064} name="Εστίας 3, Πάτηστε για οδηγίες" color="red" />
          </GoogleMapReact>
        </div>
      </motion.section>
    );
  }
}
