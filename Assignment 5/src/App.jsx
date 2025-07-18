// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
   import React from "react";
  import Calculator from "./components/Calculator";
import './App.css'

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App
