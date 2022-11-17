import Adventure from "../../component/adventure/Adventure";
import Footer from "../../component/footer/Footer";
import Intro from "../../component/intro/Intro";
import Nav from "../../component/nav/Nav";
import NFTs from "../../component/NFTs/NFTs";
import Sponsors from "../../component/sponsors/Sponsors";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Intro />
      <Sponsors />
      <Adventure />
      <NFTs />
      <Footer />
    </div>
  );
};

export default Home;
