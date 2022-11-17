import "./App.css";
// import PlaceToStay from "./pages/placeToStay/PlaceToStay";
import Home from "./pages/home/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   {/* <PlaceToStay /> */}
      <Home />
    // </div>

    
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/">
    //       <Route path="home" element={<Home />} />
    //       <Route index element={<Home />} />
    //     </Route>
    //     <Route path="/contact">
    //       <Route path="contact" element={<Contact />} />
    //       <Route index element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
