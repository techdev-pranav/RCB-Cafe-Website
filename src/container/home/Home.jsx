import { useState } from "react";
import { images } from "../../constants";
import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState(true);

  const handleTitleClick = () => {
    setTitle(!title);
  };
  return (
    <div id="home" className="app__home">
      <div className="app__home-title">
        <div className="app__home-line"></div>
        <p onClick={handleTitleClick}>
          {title
            ? "- Welcome to RCB Bar & Cafe -"
            : "- RCB ಬಾರ್ & ಕೆಫೆಗೆ ಸ್ವಾಗತ -"}
        </p>
        <div className="app__home-line"></div>
      </div>
      <div className="app__home-gallery">
        <img src={images.titleImg1} alt="img1" />
        <img src={images.titleImg2} alt="img2" />
        <img src={images.titleImg3} alt="img3" />
      </div>
    </div>
  );
};

export default Home;
