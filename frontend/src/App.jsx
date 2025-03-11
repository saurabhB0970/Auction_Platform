import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CreateAuction from './components/CreateAuction';
import AuctionList from './components/AuctionList';
import Dashboard from './components/Dashboard';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Main container */}
        <div className="sidebar"> {/* Sidebar for navigation */}
          <ul>
            <li>
              <Link to="/">Landing Page</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li><Link to="/create-auction">Create Auction</Link></li>
            <li><Link to="/auctions">Auctions</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <div className="content"> {/* Content area */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/create-auction" element={<CreateAuction />} />
            <Route path="/auctions" element={<AuctionList />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
