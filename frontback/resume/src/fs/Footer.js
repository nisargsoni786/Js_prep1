import React from 'react'
import whatsapppic from './../images/whatsapp.svg'
import facebookpic from './../images/facebook.svg'
import instapic from './../images/instagram.svg'
import linkedinpic from './../images/linkedin.svg'
import gitpic from './../images/github.svg'



function Footer() {
    return (
        <footer id="footer">
        <div class="container">
          <h3>Brandon Johnson</h3>
          <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          <div class="social-links">
            <a target="_blank" href="https://wa.me/+919664709002" class="twitter"> <img src={whatsapppic} /> </a>
            <a target="_blank" href="https://linkedin.com/in/nisarg-soni-855248188" class="facebook"> <img src={linkedinpic} /> </a>
            <a target="_blank" href="https://github.com/nisargsoni786" class="instagram"><img src={gitpic} />  </a>
            <a target="_blank" href="https://www.instagram.com/invites/contact/?i=9m33hfebgsq0&utm_content=2izdv0h" class="google-plus"> <img src={instapic} />  </a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100008213885133" class="linkedin"> <img src={facebookpic} />  </a>
          </div>
          <div class="copyright">
            &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <span>nisarg</span>
          </div>
        </div>
      </footer>
    )
}

export default Footer
