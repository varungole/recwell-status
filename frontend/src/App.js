import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About';
import ReportABug from './components/ReportABug';
import OpenSource from './components/OpenSource';
import Home from './components/Home';
import Badminton from './components/Badminton';
import Squash from './components/Squash';
import Tennis from './components/Tennis';
import Golf from './components/Golf';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/report' element={<ReportABug/>}></Route>
      <Route path='/open-source' element={<OpenSource/>}></Route>
      <Route path='/badminton' element={<Badminton/>}></Route>
      <Route path='/squash' element={<Squash/>}></Route>
      <Route path='/tennis' element={<Tennis/>}></Route>
      <Route path='/golf' element={<Golf/>}></Route>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
