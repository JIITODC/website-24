import "./App.css";
import Home from "./components/Home/Home";
import Event from "./components/Events/Event";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Join from "./components/Join/join";
import Modal from './components/Modal/Modal';
import React,{useState,useEffect} from "react";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <Link to="/join" onClick={closeModal} style={{"textDecoration": "none"}} ><h2 className="popup">JOIN US NOW</h2> </Link>
            <p className="popup-text">Be The Part Of A Amazing Community</p>
          </Modal>
      </BrowserRouter>

    </div>
  );
}

export default App;
