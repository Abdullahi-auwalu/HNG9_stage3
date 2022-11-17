import "./footer.css";
import home from "./asserts/footerImg1.png";
import logo from "./asserts/footerImg2.png";
import facebook from "./asserts/facebook.png";
import instagram from "./asserts/instagram.png";
import twitter from "./asserts/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="f-wrapper">
          <div className="logo">
            <img src={home} alt="" />
            <img src={logo} alt="" />
          </div>
          <div className="social">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
          <div className="copyright">&#169; 2022 Metabnb</div>
        </div>
      </div>
      <div className="f-right">
        <div className="f-wrpper1">
          <h3 className="f-title">Community</h3>
          <p className="f-text">NFT</p>
          <p className="f-text">Tokens</p>
          <p className="f-text">Landlords</p>
          <p className="f-text">Discord</p>
        </div>
        <div className="f-wrpper1">
          <h3 className="f-title">Places</h3>
          <p className="f-text">Castle</p>
          <p className="f-text">Farms </p>
          <p className="f-text">Beach</p>
          <p className="f-text">Learn more</p>
        </div>
        <div className="f-wrpper1">
          <h3 className="f-title">About us</h3>
          <p className="f-text">Road map</p>
          <p className="f-text">Creators </p>
          <p className="f-text">Career</p>
          <p className="f-text">Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
