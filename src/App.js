import './App.css';
import Home from './Home';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
