import "./placeToStay.css";
import Nav from "../../component/nav/Nav";
import img1 from "./asserts/img1.png";
import img2 from "./asserts/img2.png";
import img3 from "./asserts/img3.png";
import img4 from "./asserts/img4.png";
import img5 from "./asserts/img5.png";
import img6 from "./asserts/img6.png";
import img7 from "./asserts/img7.png";
import img8 from "./asserts/img8.png";
import img9 from "./asserts/img9.png";
import img10 from "./asserts/img10.png";
import img11 from "./asserts/img11.png";
import img12 from "./asserts/img12.png";
import img13 from "./asserts/img13.png";
import img14 from "./asserts/img14.png";
import img15 from "./asserts/img15.png";
import img16 from "./asserts/img16.png";
import Frame13 from "./asserts/Frame13.png";
import Footer from "../../component/footer/Footer";

const PlaceToStay = () => {
  return (
    <div className="p-wrapper">
      <Nav />
      <div className="p-items">
        <div className="p-left">
          <ul>
            <li>Resturant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>fantast city</li>
            <li>beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
          </ul>
          <select>
            <option value="">Resturant</option>
            <option value="">Cottage</option>
            <option value="">Castle</option>
            <option value="">fantast city</option>
            <option value="">beach</option>
            <option value="">Carbins</option>
            <option value="">Off-grid</option>
            <option value="">Farm</option>
          </select>
        </div>
        <div className="p-right">
          <div className="location">
            <img src={Frame13} alt="" />
          </div>
        </div>
      </div>
      <div className="cards p-cards">
        <div className="card">
          <img src={img1} alt="" />
        </div>
        <div className="card">
          <img src={img2} alt="" />
        </div>
        <div className="card">
          <img src={img3} alt="" />
        </div>
        <div className="card">
          <img src={img4} alt="" />
        </div>
        <div className="card">
          <img src={img5} alt="" />
        </div>
        <div className="card">
          <img src={img6} alt="" />
        </div>
        <div className="card">
          <img src={img7} alt="" />
        </div>
        <div className="card">
          <img src={img8} alt="" />
        </div>
        <div className="card">
          <img src={img9} alt="" />
        </div>
        <div className="card">
          <img src={img10} alt="" />
        </div>
        <div className="card">
          <img src={img11} alt="" />
        </div>
        <div className="card">
          <img src={img12} alt="" />
        </div>
        <div className="card">
          <img src={img13} alt="" />
        </div>
        <div className="card">
          <img src={img14} alt="" />
        </div>
        <div className="card">
          <img src={img15} alt="" />
        </div>
        <div className="card">
          <img src={img16} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceToStay;
