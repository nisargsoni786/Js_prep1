import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import './cssjs/bootstrap-icons.css';
import './cssjs/bootstrap.min.css';
import './cssjs/glightbox.min.css';
// import './cssjs/boxicon.min.css';
import './cssjs/swiper-bundle.min.css';
import './cssjs/aos.css';
import './cssjs/style.css';
import {Helmet} from 'helmet';


ReactDOM.render(
    <div>

    <BrowserRouter>
        <App/>
    </BrowserRouter>

    </div>
 , document.getElementById('root')
);

