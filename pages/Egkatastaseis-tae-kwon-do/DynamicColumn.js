import React from "react";
import { _IMAGES } from "./data";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import

function ReactImageGalleryTest() {
  return (
    <div>
      {/* <ImageGallery showThumbnails={true} items={props.GalleryItem} /> */}
      <ImageGallery showThumbnails={true} items={_IMAGES} />
    </div>
  );
}
export default ReactImageGalleryTest;
