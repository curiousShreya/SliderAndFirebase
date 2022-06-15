import Navigation from './Components/Navigation';
import About from './Components/About';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
             <Route path='/' exact element={<Navigation />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/faq" element={<Faq />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
