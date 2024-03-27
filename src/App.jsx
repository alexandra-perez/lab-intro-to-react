import React from 'react';
import './index.css';
import NavBar from './Components/NavBar.jsx';
import UserProfile from './Components/UserProfile.jsx';
import Posts from './Components/Post.jsx';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
      <Posts />
    </div>
  );
}
