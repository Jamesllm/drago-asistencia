import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useRedirect = (condition, path) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition) {
      navigate(path);
    }
  }, [condition, navigate]);
};

export default useRedirect;