import { BrowserRouter, Route, Routes, Navigate, redirect } from 'react-router-dom';

import './App.css';
import Navigation from './component/Navbar';
import Home from './pages/Home';
import Leaderboard from './component/Leaderboard';
import Signup from './pages/Signup';
import Otp from './pages/Otp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/Nomination' element={<Home />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup/otp' element={<Otp />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
