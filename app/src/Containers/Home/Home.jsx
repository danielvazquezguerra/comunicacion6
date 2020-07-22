import React from 'react';
import Parallax from 'react-rellax';
import './Home.scss';
import SlideHome from '../SlideHome/SlideHome';


const Home = () => {


    return (
       
        <section className="HomeWrapper"> 

            <Parallax speed={16}>

                <img className="TrianguloBack" src="/images/lineas_triangulo_right.png" alt="" />

            </Parallax>

            <Parallax speed={20}>

                <img className="TrianguloTop" src="/images/lineas_triangulo_right.png" alt="" />npm 

            </Parallax>

            <Parallax speed={60}>

                <img className="TrianguloDown" src="/images/lineas_triangulo_right.png" alt="" />

            </Parallax>


            <div className="HomeMain justify-content-center align-items-center">

                {/* <h3>CONCEPTO, <span className="Diseno">DISEÑO</span> & <span className="Produccion">PRODUCCIÓN</span></h3> */}

                <img className="HomeTitle" src="/images/comunicacion-6-spray-5.png" alt=""/>
                

                <SlideHome />
 
                 
            </div>


        </section>
    )
}

export default Home;
