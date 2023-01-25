import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import About from './Pages/About/About'
import  Settings from './Pages/Settings/Settings';
import HomePage from './Pages/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" exact element = {<HomePage/>}></Route>
        <Route path = "/about" exact element = {<About/>}></Route>
        <Route path = "/settings" exact element = {<Settings/>}></Route>
        
      </Routes>
      </BrowserRouter>
      <HomePage/>
    </div>
  );
}

export default App;
