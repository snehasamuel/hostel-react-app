import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/register" exact element={<Register/>}/> 
      <Route path="/search" exact element={<Search/>}/>
      <Route path="/view" exact element={<View/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
