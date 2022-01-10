import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/signup/Signup'
import PlaylistContainer from './components/playlistcontainer/PlaylistContainer';
import SongContainer from './components/songcontainer/SongContainer';
import Home from './pages/home/Home';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
