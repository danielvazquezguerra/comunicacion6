import React from 'react';
import './Contact.scss';


const Contact = () => {

    return (

        <section className="ContactWrapper">

            <div className="ContactMain">

                <div className="ContactLeft">

                    <img className="ContactImg" src="/images/contact-comunicacion-6.png" alt=""/>


                </div>

                <div className="ContactRight">

                    <h4> +34 620 775 845 </h4>
                    <p>milenacomunicacionesseis@gmail.com</p>
                    <p>milenajimenez1010@gmail.com</p>
                    <hr/>
                    <p className="Address">Av. Lucio Díaz Flores Feo, <span>83</span></p>
                    <p>San Miguel de Abona</p>
                    <span>38639</span>
                    

                </div>



            </div>


            
        </section>
    )
}

export default Contact;
