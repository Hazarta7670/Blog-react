import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import NewPost from './pages/newPost';
import Home from './pages/home';
import Missing from './pages/missing';
import PostDetails from './pages/postDetails';
import EditPost from './pages/editPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='' element={<Home />} />
          <Route path='/newPost' element={<NewPost />} />
          <Route path='/post/:id' element={<PostDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/editPost/:id' element={<EditPost />} />
          <Route path='/*' element={<Missing />} />
        </Route>
        <Route path='/login' />
        <Route path='/register'/>
      </Routes> 
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
