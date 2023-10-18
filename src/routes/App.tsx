import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import "../styles/tailwind.css";

const App = () =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/teorica/intro" />} />
        <Route path="/teorica/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;