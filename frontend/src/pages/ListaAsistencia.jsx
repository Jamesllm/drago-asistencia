import { useContext, useEffect, useState } from "react";
import BackPage from "../components/BackPage";
import { PageAnimate } from "../components/PageAnimate";
import axios from "axios";
import { API_URL } from "../config/api";
import { userContext } from "../context/userContext";
import useDate from "../hooks/useDate";

function ListaAsistencia() {
  const { dniUsuario } = useContext(userContext);
  const [listaAsistencia, setListaAsistencia] = useState("");

  const formattedDate = useDate();
  const datos = async () => {
    const res = await axios.get(`${API_URL}/usuario/${dniUsuario}/registro`);
    const responseData = res.data;

    if (responseData.length > 0) {
      setListaAsistencia(responseData);
    }
  };

  const formatTo12Hour = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  const formatReadableDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/Lima",
    };
    return dateObject.toLocaleDateString("es-ES", options);
  };

  useEffect(() => {
    datos();
  }, []);

  return (
    <PageAnimate>
      <BackPage />
      <h1 className="h1-home">Lista de Asistencia</h1>
      <p className="date">{formattedDate}</p>
      <div
        className="table-grid table-in"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <div>DNI</div>
        <div>Fecha</div>
        <div>Hora</div>
      </div>
      {listaAsistencia &&
        listaAsistencia.map((item, index) => (
          <div
            key={index}
            className="table-grid"
            style={{
              marginTop: 5,
              fontWeight: "normal",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
          >
            <div>{item.dni}</div>
            <div>{formatReadableDate(item.fecha)}</div>
            <div>{formatTo12Hour(new Date(`2023-01-01T${item.hora}`))}</div>
          </div>
        ))}
    </PageAnimate>
  );
}

export default ListaAsistencia;
