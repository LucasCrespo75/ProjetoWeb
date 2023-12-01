import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe corrigido
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Home } from './components/Home';
import { Register } from './components/Register';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />

        
      </Routes>
    </Router>
  );
}

export default App;
