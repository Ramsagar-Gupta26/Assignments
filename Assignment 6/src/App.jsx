import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo List App</h1>
      <TodoList />
    </div>
  );
};

export default App
