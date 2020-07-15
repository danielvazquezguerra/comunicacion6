import React from 'react';
import './About.scss';



const About = () => {

    return (

        <section className="AboutWrapper">


            <div className="AboutMain">

                <div className="AboutLeft">

                    <img src="/images/comunicacion-6-logo.png" alt=""/>



                </div>

                <div className="AboutRight">


                    <p> Nuestra intención es ser uno de los mejores estudios de diseño de la región, donde
                        nuestros clientes podrán contar con un equipo de profesionales capacitados para
                        llevar a cabo con éxito cualquier proyecto publicitario, desde la creación del mismo
                        hasta su producción; es decir, seremos <span>creadores y fabricantes</span> de todos nuestros
                        proyectos. Aunado a esto tambien daremos servicio a los clientes que sólo requieren
                        servicios de impresión o corte, como los diseñadores freelance y comerciales dedicados
                        a la venta de la publicidad. </p>
                    
                </div>



            </div>
            
        </section>

    )
}

export default About;
