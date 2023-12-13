import { useParams } from "react-router-dom";
const Terminal = () => {
  const { id } = useParams();
  return <div>Terminal {id}</div>;
};

export default Terminal;
