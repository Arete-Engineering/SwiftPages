import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from 'react';

//Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyCjlP_icdXnh6DbIemKIp4M7xWMkvatgKA",
  authDomain: "omilia-f0b42.firebaseapp.com",
  projectId: "omilia-f0b42",
  storageBucket: "omilia-f0b42.appspot.com",
  messagingSenderId: "11465010307",
  appId: "1:11465010307:web:78a4221e498bfea2af7fb6",
  measurementId: "G-8FWM5P1VDC",
});

const auth = firebase.auth();

let project_name = "SwiftPages";

export default function Header() {
  const [user] = useAuthState(auth);
  const profile_picture = user ? user.photoURL : "Profile Picture Null";
  const userID = user ? user.uid : null;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


  return (

    <header className="App_header" style={{ backgroundColor: "white" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <img src="https://cdn.discordapp.com/attachments/781642426997014538/1216500360005550390/Eunoia14.png?ex=66009d3f&is=65ee283f&hm=8cdc27e085c9289692477d4783b6ed99898871fe2b3e7f9f551da6388d638dde&" width="30" height="30" className="d-inline-block align-top" alt="SwiftPages Logo" />
        <a className="navbar-brand" href="/home">{project_name}</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleNavCollapse} 
          aria-expanded={!isNavCollapsed ? true : false}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/community">Explore</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/profile/${userID}`}>Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/editor">Create</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
