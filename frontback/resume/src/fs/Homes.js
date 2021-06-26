import React, { Component } from 'react'
import './../cssjs/aos.css';

export class Homes extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;    
        script.src = "../cssjs/main.js";    
        this.div.appendChild(script);  
        const s = document.createElement("script");
        s.async = true;    
        s.src = "../cssjs/aos.js";
        this.div.appendChild(s);          
    }

    render() {
        return (
            <div ref={el => (this.div = el)}>
                <div id="hero" data-aos="zoom-in" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos-delay="100">
                    <h1>Nisarg Soni</h1>
                    <p>ML and AI enthusiast | Data scientist | Developer</p>
                    <div class="social-links">
                        <a href="#" className="nav-link scrollto">LinkedIN</a>
                        <a href="#" className="nav-link scrollto" target='_blank' >GCP</a>
                        <a href="#" className="nav-link scrollto" target='_blank' >GitHub</a>
                    </div>
                </div>  
                </div>
            </div>
        )
    }
}

export default Homes
