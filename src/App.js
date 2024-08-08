import "./App.css";
import Home from "./components/Home/Home";
import Event from "./components/Events/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./components/Join/join";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
