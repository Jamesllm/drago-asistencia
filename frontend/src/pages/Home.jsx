import React, { useContext, useEffect, useState } from "react";
import CardButton from "../components/card/CardButton";
import CardNumber from "../components/card/CardNumber";
import { motion } from "framer-motion";
import { imageContext } from "../context/imageContext";
import { userContext } from "../context/userContext";
import useRedirect from "../hooks/useRedirect";
import useDate from "../hooks/useDate";
import useNavigatePage from "../hooks/useNavigatePage";
import useSweetAlert from "../hooks/useSweetAlert";
import { API_URL } from "../config/api";
import axios from "axios";

function Home() {
  const { dniUsuario } = useContext(userContext);
  const formattedDate = useDate();
  const { closeSession, nextPage } = useNavigatePage();
  const { alertLogin } = useSweetAlert();
  const { setImage } = useContext(imageContext);
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [totalRegistros, setTotalRegistros] = useState("");

  const datos = async () => {
    const res = await axios.get(`${API_URL}/usuario/${dniUsuario}`);
    const totalreg = await axios.get(`${API_URL}/usuario/${dniUsuario}/registro`);
    const responseData = res.data;
    const totalReg = totalreg.data;
    // console.log(responseData);

    if (responseData.length > 0) {
      const nombreUsuario = responseData.map((item) => item.nombre);
      const rolUsuario = responseData.map((item) => item.id_rol);
      setNombre(nombreUsuario);
      setRol(rolUsuario);
      setTotalRegistros(totalReg.length);
    }
  };

  useEffect(() => {
    setImage(require("../assets/registro.png"));
    datos();
  }, []);

  async function registartAsistencia(dniR) {
    const currentTime = new Date();

    const dataToSend = {
      dni: dniR,
      fecha: currentTime.toLocaleDateString(),
      hora: currentTime.toLocaleTimeString(),
    };

    axios
      .post(
        `${API_URL}/usuario`,
        {
          date: dataToSend.fecha,
          dni: dataToSend.dni,
          hora: dataToSend.hora,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          alertLogin();
        }
      })
      .catch((error) => {
        console.error("Error making Axios request:", error);
      });
  }

  useRedirect(dniUsuario === undefined, "/");

  const data = [
    {
      title: "Asistencia",
      time: "10:00 AM",
      img: require("../assets/asistencia.png"),
      onclick: () => {
        registartAsistencia(dniUsuario);
      },
      color: "#1BB67B",
      forUser: [1, 2],
    },
    {
      title: "Lista de asistencia",
      time: "",
      img: require("../assets/lista-asistencia.png"),
      onclick: () => {
        nextPage("lista-asistencia");
      },
      color: "#F1961A",
      forUser: [1, 2],
    },
    {
      title: "Lista de usuarios",
      time: "",
      img: require("../assets/list-users.png"),
      onclick: () => {
        nextPage("lista-usuarios");
      },
      color: "#1A9CF1",
      forUser: [1],
    },
    {
      title: "Inventario",
      time: "10:00 PM",
      img: require("../assets/inventario.png"),
      onclick: () => {
        nextPage("inventario");
      },
      color: "#9B0471",
      forUser: [1],
    },
  ];

  const userRole = Array.isArray(rol) ? rol[0] : rol;
  const isAdmin = userRole === 1;

  const filteredData = data.filter((item) =>
    item.forUser.includes(isAdmin ? 1 : 2)
  );

  const dataViewGeneral = [
    {
      title: "Asistencia total",
      number: totalRegistros,
      icon: (
        <path
          d="M5.20831 10.4165L8.33331 13.5415L14.5833 7.2915M5.20831 24.9998L8.33331 28.1248L14.5833 21.8748M5.20831 39.5832L8.33331 42.7082L14.5833 36.4582M21.875 24.9998H44.7916M21.875 39.5832H44.7916M21.875 10.4165H44.7916"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      ),
    },
    {
      title: "Productos totales",
      number: 120,
      icon: (
        <path
          d="M3 6H47V11H3V6ZM6 13V46H44V13H6ZM32 22H17V19H32V22Z"
          fill="black"
        />
      ),
    },
  ];

  return (
    <motion.div
      initial={{
        x: -120,
      }}
      animate={{
        x: 0,
        y: 0,
      }}
      exit={{
        x: 120,
      }}
    >
      <div className="backpage" onClick={closeSession}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.72503 15.6625C9.54925 15.8381 9.31097 15.9367 9.06253 15.9367C8.81409 15.9367 8.57581 15.8381 8.40003 15.6625L3.08753 10.35C2.91197 10.1742 2.81335 9.93596 2.81335 9.68752C2.81335 9.43908 2.91197 9.2008 3.08753 9.02502L8.40003 3.71252C8.57786 3.54701 8.81292 3.45688 9.05582 3.46108C9.29871 3.46527 9.53053 3.56347 9.70253 3.73502C9.87408 3.90703 9.97228 4.13884 9.97647 4.38173C9.98067 4.62463 9.89054 4.8597 9.72503 5.03752L6.01253 8.75002H15.3125C15.5612 8.75002 15.7996 8.84879 15.9754 9.02461C16.1513 9.20042 16.25 9.43888 16.25 9.68752C16.25 9.93616 16.1513 10.1746 15.9754 10.3504C15.7996 10.5262 15.5612 10.625 15.3125 10.625H6.01253L9.72503 14.3375C9.90059 14.5133 9.9992 14.7516 9.9992 15C9.9992 15.2485 9.90059 15.4867 9.72503 15.6625Z"
            fill="#0E4876"
          />
        </svg>{" "}
        Cerrar sesión
      </div>
      <h1 className="h1-home">Hola, {nombre} 👋</h1>
      <p className="date">{formattedDate}</p>

      {/* <p>{formatTo12Hour(currentTime)}</p> */}
      <div className="grid-home">
        {filteredData.map((item, index) => (
          <CardButton key={index} {...item} />
        ))}
      </div>
      <h2 className="h2-home">Vista General</h2>
      <div className="grid-home">
        {dataViewGeneral.map((item, index) => (
          <CardNumber key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
