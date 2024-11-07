import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imagen from "../../public/img/404.jpg"

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateSetTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearTimeout(navigateSetTimeout);
    };
  }, []);

  return (
    <div>
      <img src={imagen} alt= "404" />
    </div>
  );
}

export default NotFound;