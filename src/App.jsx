import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar';
import Intro from './components/intro';
import About from './components/about';
import Proyects from "./components/proyects";
import Contact from "./components/contact";
import './App.scss';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/proyects" element={<Proyects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
