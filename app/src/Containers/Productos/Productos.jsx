import React from 'react';
import './Productos.scss';




const Productos = () => {


    return (

        <section className="ProductosWrapper">
            
            <div className="ProductosMain">

               <div className="ProductosMainLeft">

                   <img src="/images/360-mockup.jpg" alt="" />

               </div>

               <div className="ProductosRight">

                    <h4>BRANDING</h4>
                    <p><span>Construimos tu marca</span> mediante la administración estratégica del conjunto total de activos vinculados en forma directa o indirecta al nombre y/o símbolo (logotipo), influyendo en el valor de la marca, tanto para el cliente como para su empresa</p>

               </div>
                   

            </div>

            <div className="ProductosMain">

                <div className="ProductosMainLeft">

                    <img src="/images/poster-mockup.jpg" alt="" />

                </div>

                <div className="ProductosRight">

                    <h4>BRANDING</h4>
                    <p><span>Construimos tu marca</span> mediante la administración estratégica del conjunto total de activos vinculados en forma directa o indirecta al nombre y/o símbolo (logotipo), influyendo en el valor de la marca, tanto para el cliente como para su empresa</p>

                </div>
                    

            </div>

        
                    
        </section>
    )
}

export default Productos;
