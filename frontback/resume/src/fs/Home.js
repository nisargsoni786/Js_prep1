import React from 'react'
import linkedinpic from './../images/linkedin.svg'
import githubpic from './../images/github.svg'
import googlepic from './../images/google.svg'

function Home() {
    return (
        <div>
            <div id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Nisarg Soni</h1>
                    <p>ML and AI enthusiast | Data scientist | Developer</p>
                    <div class="social-links">
                        <a href="https://linkedin.com/in/nisarg-soni-855248188" className="nav-link scrollto"  target='_blank'><img src={linkedinpic}/></a>
                        <a href="https://github.com/nisargsoni786" className="nav-link scrollto" target='_blank' ><img src={githubpic}/></a>
                        <a href="https://google.qwiklabs.com/public_profiles/7f2357a3-6069-4d21-bd07-40d0b67d80d5" className="nav-link scrollto" target='_blank' ><img src={googlepic}/></a>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Home
