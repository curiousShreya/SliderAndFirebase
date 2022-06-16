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
             <Route path="/SliderAndFirebase" exact element={<Navigation />} />
             <Route path="/SliderAndFirebase/about" exact element={<About />} />
             <Route path="/SliderAndFirebase/contact" exact element={<Contact />} />
             <Route path="/SliderAndFirebase/faq" exact element={<Faq />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
