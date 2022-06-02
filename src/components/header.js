import React, { useState, useEffect } from "react";
import logo from '../images/logo2.jpg';
import { useDispatch, useSelector } from "react-redux";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, NavLink , useHistory ,useLocation } from 'react-router-dom';
import './Navbar/navbar.scss';
import { IconContext } from 'react-icons';
import { Button, Navbar ,Container,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap'


import { fetchAllSubject } from "../actions/auth";

const Header = (props) => {

  const location = useLocation()
  //console.log(location.pathname)


  const dispatch = useDispatch();

 useEffect(()=> {

    /* dispatch(fetchAllSubject())
    .then(() => {
      
    })
    .catch(() => {
      
    }); */
    
    } ,[]) 



  const test = () => {
     /* dispatch(fetchAllSubject())
    .then(() => {
      
    })
    .catch(() => {
      
    });  */
  }; 

    return (
<>
<Navbar bg="light" expand="lg">
  <Container fluid>
          
    <Link className="nav-brand" to="/home"><img height="45" src={logo} /></Link>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
      /*   style={{ maxHeight: '200px' }} */
        navbarScroll
      >

                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/aboutus">About Us</Link>
       
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item><Link className="nav-link" to="/signup">Action</Link></NavDropdown.Item>
          <NavDropdown.Item>Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={test}> 
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
       
        <Link className="nav-link" to="/contactus">Contact Us</Link>
      </Nav>
      <Form className="d-flex search-form">
        <FormControl
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        
<Button className="search-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></Button>
                        </Form>
    

              {props.currentUser ? (
                <FaIcons.FaSignOutAlt title="Logout" style={{ cursor: 'pointer',color:'#fff' }}  onClick={() => props.openLogoutModal()} /> 
                      
              ) : (
                location.pathname !="/login" ? 
                  <Link className="nav-link login-cls" to="/login">Sign in</Link>
                : ''
                        )}


    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
export default Header;