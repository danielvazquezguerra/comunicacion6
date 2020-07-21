import React from 'react';
import './Contact.scss';


const Contact = () => {

    return (

        <section className="ContactWrapper">

            <div className="ContactMain">

                <div className="ContactLeft">

                    <img className="ContactImg" src="/images/comunicacion-6-lineas.png" alt=""/>
                    {/* <iframe width="100%" height="50%" frameborder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Av.%20Lucio%20D%C3%ADaz%20Flores%20Feo,%2083%20%20San%20Miguel%20de%20Abona%20%2038639+(Comunicacion%206)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}


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
