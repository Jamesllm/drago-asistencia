import { useState, useContext } from "react";
import { imageContext } from "../context/imageContext";
function ImageContainer() {
  const { image } = useContext(imageContext);

  return <img style={{ width: "100%" }} src={image} alt="img-logo" />;
}

export default ImageContainer;
