import React from 'react';
import Parallax from 'react-rellax';


const Rellax = () => {

    return (

        <div className="RellaxWrapper">

            <Parallax speed ={10}>

                <div className="MainLeft">

                    <h1>React rellax app</h1>
                    <p>Esta oracion se mueve muy rapido</p>
                    <p>Esta oracion se mueve un poco menos rapido</p>
                    <p>Esta oracion se mueve mas lento</p>

                </div>
            
            </Parallax>


            <div className="MainRight"> 

                <Parallax speed ={20}>

                    <img src="/images/lineas_triangulo_left.png" alt="" />

                </Parallax>

            </div>
            
        </div>
    )
}
export default Rellax;