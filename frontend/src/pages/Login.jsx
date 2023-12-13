import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { getUsuario } from "../data";
import { userContext } from "../context/userContext";
import { LoginAnimate } from "../components/PageAnimate";
import useSweetAlert from "../hooks/useSweetAlert";
import { imageContext } from "../context/imageContext";

function Login() {
  const navigate = useNavigate();
  const [dnivalue, setDni] = useState("");
  const { setDatosUsuario } = useContext(userContext);
  const { usuarioEncontrado } = useSweetAlert();
  const { setImage } = useContext(imageContext);

  useEffect(() => {
    setImage(require("../assets/logo.png"));
  }, []);

  const Login = () => {
    //const usuario = getUsuario(dnivalue);
    setDatosUsuario(dnivalue);
    navigate("/home");
    //console.log(users);
    // if (usuario) {
    //   navigate("/home");
    // } else {
    //   console.log("no user");
    //   navigate("/");
    //   usuarioEncontrado();
    // }
  };

  return (
    <LoginAnimate>
      <h1 className="h1-login">REGISTRO DE ASISTENCIA E INVENTARIO</h1>
      <p className="p-login">Ingrese su DNI</p>
      <Input value={dnivalue} setValue={setDni} placeholder="DNI" />
      <button
        onClick={() => {
          Login();
        }}
        style={{ marginTop: 15 }}
      >
        INGRESAR
      </button>
    </LoginAnimate>
  );
}

export default Login;
