import React from 'react'
import './Header.scss';

const Header = () => {

    return (

        <nav className="HeaderWrapper navbar navbar-expand-lg navbar-dark">

        <a className="LogoBox navbar-brand" href="/#">
            <img className="Logo" src="/images/comunicacion-6-logo-2.png" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="ButtonsBox collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="Buttons navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/productos">PRODUCTOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nosotros">NOSOTROS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">CONTACTO</a>
            </li>
           

          </ul>
        </div>
      </nav>

    )
}

export default Header;
