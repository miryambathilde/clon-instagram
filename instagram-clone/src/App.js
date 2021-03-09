import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app_header"></div>
      <img 
        className="app_headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="logo">
      </img>

      <h1>I'm building an Instagram Clone with React</h1>

      {/* Posts */}
      <Post />
      
      {/* Posts */}

    </div>
  );
}

export default App;
