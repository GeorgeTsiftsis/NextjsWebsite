// import Footer from "../../components/NiceGrid";
// import MapSection from "../../components/Map/Map";
// const location = {
//   address: "Εστίας 3, Κοζάνη 50 132",
//   lat: 40.3006998281867,
//   lng: 21.78543607992064,
// }; // our location object from earlier

// function Contact() {
//   return (
//     <div>
//       <h1>Επισκεφτείτε μας</h1>
//       <Footer />
//       <MapSection location={location} zoomLevel={17} /> {/* include it here */}
//     </div>
//   );
// }

// export default Contact;
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import classes from "./contact.module.css";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import FormforContact from "../../components/FormforContact/FormforConract";
// const defaultCenter = { lat: 40.3006998281867, lng: 21.78543607992064 };

// const defaultOptions = { scrollwheel: false };

// const RegularMap = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap defaultZoom={17} defaultCenter={defaultCenter} defaultOptions={defaultOptions}>
//       <Marker position={defaultCenter} />
//     </GoogleMap>
//   ))
// );

// const loadingElementStyle = { height: "100%" };
// const containerElementStyle = { height: "580px", padding: "1rem", width: "100%" };
// const mapElementStyle = { height: "100%" };

// export default function GoogleMaps() {
//   return (
//     <>
//       <ContactDetails />
//       {/* <div className={classes.box_of_map}> */}
//       <RegularMap googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8PhnFnWcQnL8Qz2m9s8tKThO1IKZuBvg" loadingElement={<div style={loadingElementStyle} />} containerElement={<div style={containerElementStyle} />} mapElement={<div style={mapElementStyle} />} />
//       <FormforContact />
//       {/* </div> */}
//     </>
//   );
// }

// import FormforContact from "../../components/FormforContact/FormforConract";
// import React from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// // import { useState } from "react";

// const defaultCenter = { lat: 40.3006998281867, lng: 21.78543607992064 };
// const containerStyle = {
//   width: "100%",
//   height: "580px"
//   padding: "1rem",
// };

// const center = {
//   lat: 40.3006998281867,
//   lng: 21.78543607992064,
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyD8PhnFnWcQnL8Qz2m9s8tKThO1IKZuBvg",
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
// //     <>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} defaultCenter={defaultCenter} zoom={17} onLoad={onLoad} onUnmount={onUnmount}>
//         {/* Child components, such as markers, info windows, etc. */}
//         <Marker position={defaultCenter} />
//       </GoogleMap>
//       <FormforContact />
//     </>
//   ) : (
//     <></>
//   );
// }

// export default React.memo(MyComponent);
// address: "Εστίας 3, Κοζάνη 50 132",

// "AIzaSyD8PhnFnWcQnL8Qz2m9s8tKThO1IKZuBvg"
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const SimpleMap = (props) => {
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
};
export default SimpleMap;
