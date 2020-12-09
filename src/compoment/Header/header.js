import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../images/Indirapuram-Kitchen-Decor-logo.svg"
// import * as logo from '../../images/';
//import logo from "../images/Indirapuram-Kitchen-Decor-logo.png"
function Header() {
    return (
      <>
      <div className="container-fluid nav_bg">
          <div className='row'>
            
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-10 mx-auto">
  <div className="container-fluid">
   
    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 icon-34">
      <li className="nav-item">
          <NavLink className="nav-link" to="#"><i className="icon-mail"><MdMail/></i>info@ikd.com</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#"><i className="icon-mail"><FaPhoneAlt/></i>+91 8285950507</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li> */}
        
      </ul>
      
    </div>
  </div>
  </div>
</nav>

<div className="col-10 mx-auto">
<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={logo} alt="" width="180" height="90" class="d-inline-block align-top" />
       </NavLink>
       {/* <a className="navbar-brand" to="#"><img src={logo} alt="" width="180" height="90" class="d-inline-block align-top" />
       </a> */}
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="menu-active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/service">Serivce</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
</div>

</div>

</div>
      </>
    );
  }

  export default Header;