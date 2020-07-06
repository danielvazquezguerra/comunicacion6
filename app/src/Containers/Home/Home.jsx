import React from 'react';
import './Home.scss';
import Productos from '../Productos/Productos';

const Home = (props) => {
    return (
        
        <section className="HomeWrapper"> 

             {/* <img className="CirculoRojo" src="/images/circulo_rojo.png" alt=""/> */}

             <img className="TrianguloRight" src="/images/lineas_triangulo.png" alt=""/>

             <img className="TrianguloLeft" src="/images/lineas_triangulo_2.png" alt=""/>

            <div className="HomeMain justify-content-center align-items-center">

                <h3>CONCEPTO, <span className="Diseno">DISEÑO</span> & <span className="Produccion">PRODUCCIÓN</span></h3>


                <Productos />
 
                 
            </div>


        </section>
    )
}

export default Home;
