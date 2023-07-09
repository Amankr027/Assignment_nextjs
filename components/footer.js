import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-f">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla tellus vitae lorem aliquam, a sollicitudin lacus feugiat. Mauris nec eros ut urna consectetur placerat.</p>
        </div>
        <div className="footer-section">
          <h3>Follow Me</h3>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Latest Articles</h3>
          <ul className="latest-articles">
            <li><a href="#">Article 1</a></li>
            <li><a href="#">Article 2</a></li>
            <li><a href="#">Article 3</a></li>
          </ul>
        </div>
       <div className='new'>
        <h1>MAKTUB</h1>
       </div>
      </div>
     
    </footer>
  );
};

export default Footer;
