import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar';
import Intro from './components/intro';
import About from './components/about';
import './App.scss';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
