// import logo from './logo.svg';
// import './App.css';
// import HobbySelector from './components/HobbySelector';
// import DataPass from './components/DataPassOne';
// import LifeCycle from './components/LifeCycle';
// import React from 'react';
// import DataPassOne from './components/DataPassOne';
// import DatsPassTwo from './components/DatsPassTwo';
import { Routes, Route,Switch } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Navbar from './components/Navbar';
// import PassWord from './PassWord';
// import Counter from './ReduxToolKit/Feature/Counter';


// class App extends React.Component
// {

 

// render()
//   {
//     return(
//       <>
      
//       {/* <PassWord/>

//       <Counter/>
//       */}
      
//       </>
//     )
//   }
// }

// export default App;


import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import { UserContext } from "./Contaxt/UserContext";
import A from "./components/A";

export default function App() {

  let[state,setUser]=useState("Hello Tanmay how are you")


  return (
    <>


    {/* <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/about" element={<About/>}>About</Route>
      <Route path="/contact" element={<Contact/>}>Contact</Route>
    </Routes> */}

    <UserContext.Provider value={state} >
      <A/>

    </UserContext.Provider>
    </>
  )
}
