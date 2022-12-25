
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Page/About/About";
import Appointment from "./Pages/Page/Appointment";
import Contacts from "./Pages/Page/Contacts";
import Home from "./Pages/Page/HomePage/Home";
import Reviews from "./Pages/Page/Reviews";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/Contacts" element={<Contacts/>} ></Route>
        <Route path="/Appointment" element={<Appointment/>} ></Route>
        <Route path="/Reviews" element={<Reviews/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
