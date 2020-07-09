import React from 'react';
import Parallax from 'react-rellax';
import './Home.scss';
import Productos from '../Productos/Productos';




const Home = () => {

    return (
       
        <section className="HomeWrapper"> 

            <Parallax speed={30}>

                <img className="TrianguloRight" src="/images/lineas_triangulo_right.png" alt="" />

            </Parallax>

            <Parallax speed ={5}>

                <img className="TrianguloLeft" src="/images/lineas_triangulo_left.png" alt="" />
            
            </Parallax>
             

            <div className="HomeMain justify-content-center align-items-center">

                <h3>CONCEPTO, <span className="Diseno">DISEÑO</span> & <span className="Produccion">PRODUCCIÓN</span></h3>

                <Productos />
 
                 
            </div>


        </section>
    )
}

export default Home;
