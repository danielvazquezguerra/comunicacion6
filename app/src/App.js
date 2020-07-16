import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer/Footer';
import Margins from './Components/Margins/Margins';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';



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

          <Route path="/" component={ Home } exact/>
          <Route path="/nosotros" component={ About } exact/>
          <Route path="/contact" component={ Contact } exact />

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
