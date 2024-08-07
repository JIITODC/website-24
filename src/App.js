import "./App.css";
import Home from "./components/Home/Home";
import Event from "./components/Events/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resource from "./components/Resources/Resource";
import Join from "./components/Join/join";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
