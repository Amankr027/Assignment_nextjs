import React from 'react'

const Contact = () => {
  return (
    <div class="container-c">
    <div class="card">
      <div class="left">
        <img src="https://images.unsplash.com/photo-1659706994835-fb804722b0f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      </div>
      <div class="right">
        <h2>Contact Us</h2>
        <div class="contact">
          <div class="form-container">
            <form class="form">
              <div class="username">
                <input type="text" placeholder="Enter your Name"/>
              </div>
              <div class="useremail">
                <input type="email" placeholder="Enter your email" required/>
              </div>
              <div class="usermessage">
                <textarea placeholder="Enter your message" required></textarea>
              </div>
              <div class="usersubmit">
                <input type="submit" value="Contact Us"/>
              </div>
            </form>
          </div>
          <div class="address">
            <div class="email">
              <h4>Contact</h4>
              <p>aman@gmail.com</p>
            </div>
            <div class="location">
              <h4>Based in</h4>
              <p>India</p>
            </div>
            <div class="social">
              <span><a href="#"><i class="fab fa-facebook"></i></a></span>
              <span><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></span>
              <span><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact;
