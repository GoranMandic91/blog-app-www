import React from 'react';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import Home from '../../pages/Home';
import Post from '../../pages/Post';
import CommentDialog from '../CommentDialog';
import './App.css';

function App() {
  return (
    <>
      <CommentDialog />
      <Router>
        <div className="App">
          <h1>Simple Blog Application</h1>
          <Route path={["/", "/home", "/posts"]} exact component={Home} />
          <Route path="/posts/:id" component={Post} />
        </div>
      </Router>
    </>
  );

}

export default App;
