import "./NFTs.css";
import image1 from "./asserts/image1.png";
import image2 from "./asserts/image2.png";
import image3 from "./asserts/image3.png";

const NFTs = () => {
  return (
    <div className="nfts">
      <div className="nfts-left">
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="nft-btn btn">Learn more</button>
      </div>
      <div className="nfts-right">
        <img className="img1" src={image1} alt="" />
        <img className="img2" src={image2} alt="" />
        <img className="img3" src={image3} alt="" />
      </div>
    </div>
  );
};

export default NFTs;
