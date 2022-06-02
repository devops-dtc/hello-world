import React from 'react';
import { Link } from 'react-router-dom';



const NotFound = () => (


  
  <div style={{'height': '150px','justify-content':'center','position':'absolute','top':'40%','left':'34%'}}>
    <h1>404 - Page Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;