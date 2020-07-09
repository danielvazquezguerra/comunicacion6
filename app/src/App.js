import React from 'react';
import './App.scss';
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer/Footer';
import Margins from './Components/Margins/Margins';




function App() {

  return (

    <div className="App">

      <Margins />

      <BrowserRouter>

      <section className="HeaderMain">

        <Header />

      </section>

      <section className="Switch">

        <Switch>

            <Home />
            {/* <Rellax /> */}

        </Switch>

      </section>

      <section className="Footer">

       <Footer /> 

      </section>
    
      </BrowserRouter>
      
        <div className="ImgFondo" />

    </div>
  );
}

export default App;
