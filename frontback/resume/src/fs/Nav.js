import React from 'react'
import { NavLink } from 'react-router-dom'
import homepic from './../images/home.png';
import aboutpic from './../images/about.svg';
import skillpic from './../images/skill.png';
import experiencepic from './../images/experience.png';
import projectpic from './../images/project.png';
import contactpic from './../images/contact.svg';

function Nav() {
    return (
        <div>
             <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <header id="header" className="d-flex flex-column justify-content-center">

                <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><NavLink exact to="/" activeClassName="active" className="nav-link scrollto"><img height='21' width='21' src={homepic}/> <span>Home</span></NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="active" className="nav-link scrollto"> <img height='21' width='21' src={aboutpic}/> <span>About</span></NavLink></li>
                    <li><NavLink exact to="/skill" activeClassName="active" className="nav-link scrollto"> <img height='21' width='21' src={skillpic}/><span>Skills</span></NavLink></li>
                    <li><NavLink exact to="/exp" activeClassName="active" className="nav-link scrollto"> <img height='21' width='21' src={experiencepic}/><span>Experience</span></NavLink></li>
                    <li><NavLink exact to="/projects" activeClassName="active" className="nav-link scrollto"><img height='21' width='21' src={projectpic}/><span>Projects</span></NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="active" className="nav-link scrollto"><img height='21' width='21' src={contactpic}/><span>Contact</span></NavLink></li>
                </ul>
                </nav>

            </header>
        </div>
    )
}

export default Nav
