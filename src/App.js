import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './containers/NavBar';
import Home from './pages/Home';
import Search from './pages/Search';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      
    </>
  );
}

export default App;
