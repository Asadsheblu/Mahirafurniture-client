import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar fixed navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="/">Mahira Furniture</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
     <button className='btn btn-info me-2'><Link className='text-decoration-none text-white'to="/signin">SingIn</Link></button>
     <button className='btn btn-primary'><Link className='text-decoration-none text-white'to="/signup">SingUp</Link></button>
     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;