import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";

const useNavigatePage = () => {
  const navigate = useNavigate();
  const { setDatosUsuario } = useContext(userContext);

  const nextPage = (to) => {
    navigate(`/${to}`);
  };

  const closeSession = () => {
    setDatosUsuario();
    navigate("/");
  };

  const backPage = () => {
    navigate("/home");
  };

  return {
    nextPage,
    closeSession,
    backPage,
  };
};

export default useNavigatePage;
