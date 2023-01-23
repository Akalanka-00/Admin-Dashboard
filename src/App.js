import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import About from './Pages/About/About'
import  Settings from './Pages/Settings/Settings';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element = {<Home/>}></Route>
      <Route path='/about' exact element = {<About/>}></Route>
      <Route path='/settings' exact element = {<Settings/>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
