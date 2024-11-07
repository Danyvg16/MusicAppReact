import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imagen from "../../public/img/songnon.jpg"

function NotFoundSong() {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateSetTimeout = setTimeout(() => {
      navigate("/songs");
    }, 5000);

    return () => {
      clearTimeout(navigateSetTimeout);
    };
  }, []);

  return (
    <div>
      <img src={imagen} alt= "song404" />
    </div>
  );
}

export default NotFoundSong;

