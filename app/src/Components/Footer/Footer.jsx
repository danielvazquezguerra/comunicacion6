import React from 'react';
import './Footer.scss';

const Footer = (props) => {

    return (

        <section className="FooterWrapper justify-content-end">

            <div className="FooterInfo">

                <p>TENERIFE - ESPAÑA</p>

            </div>

            <div className="SocialBox justify-content-end align-items-center">


                <div className="IconBox">

                    <ul className="FooterButtons">
                        <li className="FooterItem">
                            <a href="https://www.instagram.com/comunicacion6tenerife/?hl=es"><i class="SocialIcon fab fa-instagram"></i></a>
                        </li>

                        <li className="FooterItem">
                            <a href="https://www.facebook.com/comunicacion6/"><i class="SocialIcon fab fa-facebook-f"></i></a>
                        </li>

                        <li className="FooterItem">
                            <a href="https://www.behance.net/comunicacion6estudio"><i class="SocialIcon fab fa-behance"></i></a>
                        </li>
                    </ul>
                    

                </div>

            </div>
            
        </section>
    )
}

export default Footer;
