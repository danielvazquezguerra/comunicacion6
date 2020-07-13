import React, { useState } from 'react';
import './Productos.scss';
import Carousel from 'react-bootstrap/Carousel';

const Productos = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (

        <div className="ProductosWrapper">

            <div className="ProductosContainerUp">

                <h3 className="ProductosTitulo">PRODUCTOS</h3>

                <p> Contamos con un equipo de profesionales capacitados para
                    llevar a cabo con éxito cualquier proyecto publicitario, desde la creación del mismo
                    hasta su produccción. Seremos creadores y fabricantes de todos nuestros
                    proyectos. Aunado a esto tambien daremos servicio a los clientes que sólo requieren
                    servicio de impresión o corte, como los diseñadores freelance y comerciales dedicados 
                    a la venta de la publicidad. 
                    <br />
                    <br />
                    
                    Las máquinas que poseemos nos permitirán dar un servicio de calidad y a un precio
                    muy competitivo, que combinado con un excelente servicio y el valor agregado del
                    diseño, será, la formula perfecta para marcar la diferencia y tener clientes satisfechos.</p>  



            </div>

            <div className="ProductosContainerDown">

                <div className="ServiceItem White">

                    <h4>Branding</h4>

                    <p> Construimos tu marca mediante la administración 
                        estratégica del conjunto total de activos vinculados en forma directa o indirecta al nombre 
                        y/o símbolo (logotipo) influyendo en el valor de la marca, tanto 
                        para el cliente como para tu empresa</p>

                </div>

                
                <div className="ServiceItem White">

                    <h4>Advertising</h4>

                    <p> Definimos un conjunto de estrategias orientadas a dar a conocer productos y servicios a la sociedad. 
                        Sin embargo, no solo se trata de que las personas sepan que existes, sino también de otorgar cierta 
                        reputación a lo que se ofrece. Sin utilizar esta comunicación patrocinada, sería muy complejo posicionarse
                        en la mente de los consumidores como algo de buena calidad.</p>

                </div>

                <div className="ServiceItem White">

                    <h4>Packaging</h4>

                    <p> Creamos el concepto y diseño del empaque o envase de tu producto, convirtiendo el consumo en una experiencia
                        única ty enfocada para tus clientes, acompañando a la marca que representas y dandole el valor que necesita 
                        para difundir tu producto.
                    </p>

                </div>

                <div className="ServiceItem White">

                    <h4>Sings</h4>

                    <p> Diseñamos sistemas de comunicación visual sintetizado en un conjunto de señales o símbolos que cumplen la función de guiar, 
                        orientar u organizar a una persona o conjunto de personas en aquellos puntos del espacio que planteen dilemas de 
                        comportamiento, como por ejemplo dentro de una gran superficie.</p>

                </div>

                <div className="ServiceItem White">

                    <h4>Impresión</h4>

                    <p>Las máquinas que poseemos nos permitirán dar un servicio de calidad y a un precio
                    muy competitivo, que combinado con un excelente servicio y el valor agregado del
                    diseño, será, la formula perfecta para marcar la diferencia y tener clientes satisfechos.</p>

                </div>

                <div className="ServiceItem White">


                    <h4>Diseño Gráfico</h4>

                    <p> Tenemos el equipo necesario para imprimir a grandes formatos y en el material que necesite tu proyecto.
                        Estar presente en superficies de gran tamaño puede llamar la atención de transeuntes y conductores completando
                        tu plan publicitario. </p>

                </div>



            </div>

            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carrusel-01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p className="SlideTitle">First slide label</p>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carrusel-02.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p className="SlideTitle">Second slide label</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carrusel-03.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p className="SlideTitle">Third slide label</p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            <section className="FraseBottom">


                <h3> El verdadero <span>creativo</span> es aquel que es capaz de plasmar pacientemente 
                    una <span>idea</span> rodeado de los tumultos de la <span>historia</span>
                </h3>

                <p>Salvador Dalí</p>
                
                
            </section> 

        </div>
    )
}

export default Productos;