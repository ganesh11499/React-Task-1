import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Slide from './Slide';
import Body from './Body';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
       <Home />
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route path="/body" element={<Body />} />
        <Route path="/slide" element={<Slide />} />
      </Routes>
    </BrowserRouter>

    // <Login/>
    // <Header />
    // <Home/>
    // <Slide/>
  );
}

export default App;
