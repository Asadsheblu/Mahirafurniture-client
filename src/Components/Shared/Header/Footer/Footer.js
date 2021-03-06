import React from 'react';

const Footer = () => {
    return (
        <div>
       
<section id="footer" class="container-fluid bg-dark text-white fw-bold">

  <div class="row">
      <div class="col-md-4 p-5">
         
          <h1  class="headline text">Mahira Furniture</h1>
          
          
            <div class="input-group">
                <input type="text" class="form-control email" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Enter Your Email"/>
                <span class="input-group-text text"><a href=""><i class="bi bi-cursor fs-5"></i></a></span>
               
              </div>
          
      </div>
      <div class="col-md-4 p-5 text-white">
          <h4 class="headline">Contact Us</h4>
         <div class="d-flex">
          <i class="bi bi-telephone"></i>
          <p class="ps-3">(111) 222 3562</p>
          </div>
        
          <div class="d-flex">
              <i class="bi bi-envelope"></i>
              <p class="ps-3">Yourmail@gmail.com</p>
              </div>
             
          <div class="d-flex ">
              <i class="bi bi-geo-alt"></i>
              <p class="ps-3">3225 N Harbar </p>
              </div>
              
         
      </div>
      <div class="col-md-4 p-5 text-white">
          <h4 class="headline">Menu</h4>
          <ul class="text-white">
              <li><a href="#about" class="text-decoration-none text-white">About Us</a></li>
              <li><a href="#service"class="text-decoration-none text-white">Services</a> </li>
              <li><a href="#gallery" class="text-decoration-none text-white">Blog</a> </li>
              <li><a href="#contact" class="text-decoration-none text-white">Contact</a></li>
          </ul>
      </div>
    
      
      
  </div>

</section>
        </div>
    );
};

export default Footer;