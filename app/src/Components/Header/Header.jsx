import React from 'react'
import './Header.scss';

const Header = () => {

    return (


        <section className="HeaderWrapper justify-content-between align-items-center">


            <img className="HeaderLogo" src="/images/comunicacion-6-logo.png" alt=""/>

                <div className="ButtonsContainer d-flex w-50 align-items-center justify-content-around mr-5">

                    <a href="/">HOME</a>
                    <a href="/nosotros">NOSOTROS</a>
                    <a href="/productos">PRODUCTOS</a>
                    <a href="/contact">CONTACTO</a>

                </div>


        </section>

    )
}

export default Header;
