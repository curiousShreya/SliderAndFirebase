import React from "react";
import Slider from './Slider';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/SliderAndFirebase">
            Test Assignment
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/SliderAndFirebase/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/SliderAndFirebase/faq">
                  FAQ
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/SliderAndFirebase/contact">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <h2 style={{marginTop: '30px', marginLeft: '10px'}}>Slider</h2>
      <div style={{marginTop: '10px'}}>
        <Slider />
      </div>
      <div style={{marginTop: '30px'}}>
        <p style={{marginLeft: '10px', width: '50%', color: "brown"}}>Clicking on the "Contact" button in the above navbar will lead you to a contact form in which fill your details and that details will go to the firebase database and the details will be logged into your console.</p>
      </div>
    </div>
  );
}

export default Navigation;
