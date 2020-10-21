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

                    <h4>IMPRESIÓN</h4>
                    <p>Las máquinas que poseemos nos permitirán dar un servicio de calidad y a un precio muy competitivo, que combinado con un excelente servicio y el valor agregado del diseño, será, la formula perfecta para marcar la diferencia y tener clientes satisfechos.</p>

                </div>
                    

            </div>
            <div className="ProductosMain">

                <div className="ProductosMainLeft">

                    <img src="/images/packing-mockup.jpg" alt="" />

                </div>

                <div className="ProductosRight">

                    <h4>PACKAGING</h4>
                    <p>Creamos el concepto y diseño del empaque o envase de tu producto, convirtiendo el consumo en una experiencia única y enfocada para tus clientes, acompañando a la marca que representas y dándole el valor que necesita para difundir tu producto.</p>

                </div>
    

            </div>

            <div className="ProductosMain">

                <div className="ProductosMainLeft">

                    <img src="/images/branding-mockup.jpg" alt="" />

                </div>

                <div className="ProductosRight">

                    <h4>ADVERTISING</h4>
                    <p>Definimos un conjunto de estrategias orientadas a dar a conocer productos y servicios a la sociedad, sin embargo, no sólo se trata de que las personas sepan que existes, sino también de otorgar cierta reputación a lo que se ofrece. Sin utilizar esta comunicación patrocinada, sería complejo posicionarse en la mente de los consumidores como algo de buena calidad.</p>

                </div>


            </div>


            <div className="ProductosMain">

                <div className="ProductosMainLeft">

                    <img src="/images/signs-mockup.jpg" alt="" />

                </div>

                <div className="ProductosRight">

                    <h4>SIGNS</h4>
                    <p>Diseñamos sistemas de comunicación visual sintetizado en un conjunto de señales o símbolos que cumplen la función de guiar, orientar u organizar a una persona o grupos en aquellos puntos del espacio que planteen dilemas de comportamiento, como por ejemplo dentro de una gran superficie.</p>

                </div>


            </div>

            <div className="ProductosMain">

                <div className="ProductosMainLeft">

                    <img src="/images/design-mockup.jpg" alt="" />

                </div>

                <div className="ProductosRight">

                    <h4>DISEÑO GRÁFICO</h4>
                    <p>Tenemos el equipo necesario para imprimir a grandes formatos y en el material que necesite tu proyecto. Estar presente en superficies de gran tamaño puede llamar la atención de transeuntes y conductores completando tu plan publicitario.</p>

                </div>


            </div>

        
                    
        </section>
    )
}

export default Productos;
