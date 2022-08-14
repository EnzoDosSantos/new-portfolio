import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar';
import Intro from './components/intro';
import './App.scss';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Intro />} />
      </Routes>
    </div>
  )
}

export default App
