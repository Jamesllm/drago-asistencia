import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { API_URL } from "../config/api";

const useSweetAlert = () => {
  const MySwal = withReactContent(Swal);

  const deleteAlert = () => {
    MySwal.fire({
      title: "¿Seguro que desea eliminar este producto?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0E4876",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "Producto eliminado correctamente",
          icon: "success",
        });
      }
    });
  };

  const alertLogin = async () => {
    const width = window.innerWidth;
    // const res = await axios.get(`${API_URL}/${dni}`);
    // const responseData = res.data;

    // if (responseData.length > 0) {
    //   console.log(responseData);
    //   //const nameArray = responseData.map((item) => item.nombre);
    // }
    MySwal.fire({
      position: "bottom-end",
      icon: "success",
      title: "Asistencia registrada",
      showConfirmButton: false,
      timer: 1500,
      toast: width < 768 ? true : false,
    });
  };

  const usuarioEncontrado = () => {
    MySwal.fire({
      position: "center",
      icon: "error",
      title: "Usuario no encontrado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return { deleteAlert, alertLogin, usuarioEncontrado };
};

export default useSweetAlert;
