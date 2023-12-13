import { useState } from "react";
import { imageContext } from "./imageContext";

function StateImage({ children }) {
  const [image, setImage] = useState(require("../assets/logo.png"));
  //console.log(image);

  return (
    <imageContext.Provider value={{ image, setImage }}>
      {children}
    </imageContext.Provider>
  );
}

export default StateImage;
