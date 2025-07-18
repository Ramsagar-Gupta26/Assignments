import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import IPLTable from "./components/IPLTable.jsx";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>IPL 2022 Points Table</h1>
      <IPLTable />
    </div>
  );
};


export default App
