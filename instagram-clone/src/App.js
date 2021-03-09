import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {

  const [posts, setPosts] = useState([
    {
      // eslint-disable-next-line no-native-reassign
      username:String="Cindy Bake", 
      // eslint-disable-next-line no-native-reassign
      caption:String="Today I'm feeling so mindfullness..." , 
      // eslint-disable-next-line no-native-reassign
      imageUrl:URL="https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      // eslint-disable-next-line no-native-reassign
      username:String="Travis Howard", 
      // eslint-disable-next-line no-native-reassign
      caption:String="Beginning the day with a cup of coffee." , 
      // eslint-disable-next-line no-native-reassign
      imageUrl:URL="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80",
    }
  ]);
 
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

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

      {/* Posts */}
      <Post username="Cindy Bake" caption="Today I'm feeling so mindfullness..." imageUrl="https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"  />
      <Post username="Travis Howard" caption="Beginning the day with a cup of coffee." imageUrl="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"  />
      <Post username="Remy Sharp" caption="Doing my yoga meditation" imageUrl="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80"  />
      
      {/* Posts */}

    </div>
  );
}

export default App;
