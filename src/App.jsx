import { useState } from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css'
import Header from './components/Header/Header'
import SideBar from './components/Sidebar/SideBar';
import Login from './components/Login/Login';
import Afiliatesign from './components/Login/Afiliatesign';
import Advertisersign from './components/Login/Advertisersign';
import Main from './components/Main';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <>
      {/* <Header />
   <SideBar /> */}
      {/* <Login /> */}
      {/* <Afiliatesign /> */}
      {/* <Advertisersign/> */}

      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/affiliatesignup" element={<Afiliatesign />} />
          <Route path="/advertisersignup" element={<Advertisersign />} />
          <Route path="/home/*" element={<Main />} />
          <Route path="/dashboard" exact component={<Dashboard />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
