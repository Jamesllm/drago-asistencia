import { useState } from "react";
import { userContext } from "./userContext";

function StateUser({ children }) {
  const [dniUsuario, setDatosUsuario] = useState();
 // console.log(dniUsuario);

  return (
    <userContext.Provider value={{ dniUsuario, setDatosUsuario }}>
      {children}
    </userContext.Provider>
  );
}

export default StateUser;
