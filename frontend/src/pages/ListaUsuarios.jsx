import { useEffect, useState } from "react";
import BackPage from "../components/BackPage";
import { PageAnimate } from "../components/PageAnimate";
import axios from "axios";
import { API_URL } from "../config/api";
import useDate from "../hooks/useDate";

function ListaUsuarios() {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const formattedDate = useDate();
  const datos = async () => {
    const res = await axios.get(`${API_URL}/usuarios`);
    const responseData = res.data;

    if (responseData.length > 0) {
      setListaUsuarios(responseData);
    }
  };

  useEffect(() => {
    datos();
  }, []);

  return (
    <PageAnimate>
      <BackPage />
      <h1 className="h1-home">Lista de Usuarios</h1>
      <p className="date">{formattedDate}</p>
      <div
        className="table-grid table-in"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <div>DNI</div>
        <div>Nombre</div>
        <div>Rol</div>
      </div>
      {listaUsuarios &&
        listaUsuarios.map((item, index) => (
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
            <div>{item.nombre}</div>
            <div>{item.id_rol === 1 ? "Administrador" : "Usuario"}</div>
          </div>
        ))}
    </PageAnimate>
  );
}

export default ListaUsuarios;
