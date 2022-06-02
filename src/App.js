import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Home from "./components/Home/home";
import Event from "./components/Event/event";
import Profile from "./components/Profile/Profile";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import Header from "./components/header";
import NotFound from './components/notFound';
import LogoutModal from "./components/logout-modal";
import Navbar from "./components/Navbar/navbar";
import { fetchAllSubject } from "./actions/auth";
const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [show, setShow] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });

    dispatch(fetchAllSubject())

  }, [dispatch]);

 

  const logOut = () => {
   dispatch(logout());
    setShow(false)
  };

  const openLogoutModalF = () => {
     setShow(true)
   };

  const [sidebar, setSidebar] = useState(false);

  const childToParent = (sidebar) => {
    setSidebar(!sidebar)
  }
  const menuToParent = (sidebar) => {
    setSidebar(false)
  }
  

  const closeModal = () => {
    setShow(false)
  }  
 
  
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);


  return (
  
    <Router>      
      <LogoutModal show={show} closeModal={closeModal} logOutee={logOut}/>
      <div className="maincontainer">
        <Header childToParent={childToParent} openLogoutModal={openLogoutModalF} sidebarstatus={sidebar} currentUser={currentUser} />
        <div className="datacontainer">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/event" component={Event} />
            <Route component={NotFound}/>
          </Switch>
        </div>
        </div>
  </Router>
  
  );
};

export default App;