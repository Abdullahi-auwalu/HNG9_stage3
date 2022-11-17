import "./intro.css";
import Image3 from "./asserts/image3.png";
import Image4 from "./asserts/image4.png";
import Image5 from "./asserts/image5.png";
import Image6 from "./asserts/image6.png";
import Itext from "./asserts/i-text.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <img className="i-heading" src={Itext} alt="" />
        <p className="i-text">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn <br /> imagination to reality at your
          comfort zone
        </p>
        <div className="search">
          <input
            className="searchBar"
            type="text"
            placeholder="Search for location"
          />
          <button className=" btn i-btn">Search</button>
        </div>
      </div>
      <div className="i-right">
        <div className="i-img1">
          <img src={Image4} alt="" />
          <img src={Image6} alt="" />
        </div>
        <div className="i-img2">
          <img src={Image3} alt="" />
          <img src={Image5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
