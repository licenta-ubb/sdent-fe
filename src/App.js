import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
