import "./nav.css";
import houseLogo from "./asserts/houseLogo.png";
import metabnb from "./asserts/metabnb.png";
import { useState } from "react";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="nav">
      <div className="n-left">
        <img src={houseLogo} className="nav-hlogo" alt="" />
        <img src={metabnb} className="nav-logo" alt="" />
      </div>
      <div className="n-right">
        <ul className="n-items" id={showLinks ? "hidden" : ""}>
          <li className="n-item">Home</li>
          <li className="n-item">Place to stay</li>
          <li className="n-item">NFTs</li>
          <li className="n-item">Community</li>
        </ul>
        <div onClick={() => setShowLinks(!showLinks)} className="toggle-btn">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <button className="btn n-btn">connect wallet</button>
        </div>
        <button className="btn ns-btn">connect wallet</button>
      </div>
    </div>
  );
};

export default Nav;
