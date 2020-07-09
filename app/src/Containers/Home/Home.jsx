import React from 'react';
import Rellax from 'rellax';
import './Home.scss';
import Productos from '../Productos/Productos';

const Home = (props) => {

    const rellax = new Rellax ('.Rellax');

   
    return (
       
        <section className="HomeWrapper"> 


             <img className="TrianguloRight Rellax" src="/images/lineas_triangulo_right.png" data-rellax-speed="2" alt=""/>

             <img className="TrianguloLeft Rellax" src="/images/lineas_triangulo_left.png" data-rellax-speed="-4" alt=""/>

            <div className="HomeMain justify-content-center align-items-center">

                <h3>CONCEPTO, <span className="Diseno">DISEÑO</span> & <span className="Produccion">PRODUCCIÓN</span></h3>


                <Productos />
 
                 
            </div>


        </section>
    )
}

export default Home;
