import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import BookingSuccess from './components/BookingSuccess';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book/:id" element={<BookingForm />} />
      <Route path="/success" element={<BookingSuccess />} />
    </Routes>
  );
}

export default App
