import { useNavigate } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="background-image"></div>
      <h3 className="not-found-title">Page not found</h3>
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default NotFound;
