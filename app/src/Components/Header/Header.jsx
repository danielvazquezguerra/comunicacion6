import React from 'react'
import './Header.scss';

const Header = () => {

    return (


        <section className="HeaderWrapper justify-content-between align-items-center">


                <img className="HeaderLogo" src="/images/comunicacion-6-logo.png" alt=""/>

                <div className="ButtonsContainer d-flex w-50 align-items-center justify-content-around mr-5">

                    <a href="/#">HOME</a>
                    <a href="/#">PRODUCTOS</a>
                    <a href="/#">NOSOTROS</a>
                    <a href="/#">PROYECTOS</a>

                </div>


        </section>

    )
}

export default Header;
