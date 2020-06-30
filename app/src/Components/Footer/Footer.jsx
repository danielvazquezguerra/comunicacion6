import React from 'react';
import './Footer.scss';

const Footer = (props) => {

    return (

        <section className="FooterWrapper justify-content-end">

            <div className="FooterInfo d-flex justify-content-start align-items-center">

                <p>TENERIFE - ESPAÑA</p>

            </div>

            <div className="SocialBox justify-content-end align-items-center">


                <div className="IconBox d-flex w-auto h-auto mr-5">
                    
                    <i class="SocialIcon fab fa-instagram"></i>
                    <i class="SocialIcon fab fa-facebook-f"></i>
                    <i class="SocialIcon fab fa-behance"></i>

                </div>

            </div>
            
        </section>
    )
}

export default Footer;
