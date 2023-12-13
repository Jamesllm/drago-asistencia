import { useState } from "react";

const useDate = () => {
  const [currentTime] = useState(new Date());
  // Opciones para dar formato a la fecha
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Lima",
  };

  // Formato de la fecha actual
  const formattedDate = currentTime.toLocaleDateString("es-PE", options);

  return formattedDate;
};

export default useDate;
