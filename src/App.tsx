import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/details/Details';
import About from './components/about/About';
import NoPage from './components/noPage/NoPage';
import Login from './components/profile/Login';
import Profile from './components/profile/Profile';
import Register from './components/profile/Register';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path="*" element={<NoPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>

  );
}

export default App;
