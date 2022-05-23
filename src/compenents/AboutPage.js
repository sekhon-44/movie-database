import React from 'react';
import logo from "../images/logo.png";

function Aboutpage() {
  return (
    <div className="about-page-container">
        <section className="about-page">
            <h2>About MovieCentral</h2>
            <p>
                MovieCentral is an online movie database that let users browse movies based on popularity, rating, and release date. The platform also allows registered users to keep track of movies they love by adding films to their favorites list.
            </p>
        </section>
        <section className="page-logo">
            <img className="logo" src={logo} alt="logo"></img>

        </section>

    </div>
  )
}

export default Aboutpage