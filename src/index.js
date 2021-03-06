import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Signup from './Signup';
import EditProfile from './EditProfile';
import Swipe from './Swipe';
import Match from './Match'
import Profile from './Profile'
import EndOfMatches from './EndOfMatches';
import Matches from './Matches';
import Report from './Report';
import Messenger from './Messenger';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

window.matched_users = []
window.swiped_left_users = []
window.preferences = {"firstName": "", "lastName": "", "birthday": new Date(), picture: "", "classes": [], "study-method": [], "pair-group": [], "availability": [], "reply": ""}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/swipe" element={<Swipe />} />
      <Route path="/endOfMatches" element={<EndOfMatches />} />
      <Route path="/match" element={<Match />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/report" element={<Report />} />
      <Route path="/messenger" element={<Messenger />} />
    </Routes>
  </BrowserRouter>
);
