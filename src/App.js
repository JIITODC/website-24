import './App.css';
import Home from './components/Home/Home'
import Event from './components/Events/Event'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Event/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
