import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import ScrollToTop from './ScrollToTop';
import Footer from './Components/Footer'
import Home from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import PageNotFound from './PageNotFound';
import DogPlace from './Pages/DogPlace';
import GermanShepard from './Components/DogPlace/Categories/GermanShepard';
import AllDogs from './Components/DogPlace/AllDogs';
import Dog1 from './Components/DogPlace/AllDogs/Dog1';




function App() {
  return (

    <>
<BrowserRouter>

<ScrollToTop/>
    <Navbar/>


      <Switch>
      <Route exact path="/" component={withRouter(Home)}/>

      <Route exact path="/home" component={Home}/>

      <Route exact path="/contact" component={ContactPage}/>

      <Route exact path="/about" component={AboutPage}/>

      <Route exact path="/store" component={DogPlace}/>

      <Route exact path="/store/alldogs" component={AllDogs}/>


      {/* Dog Place  */}
      {/* AllCategories */}
      <Route exact path="/store/categories/german-shepards" component={GermanShepard}/>

      {/* AllCategories */}

      {/* All Dogs Available  */}
      <Route exact path="/store/alldogs/1" component={Dog1}/>


      {/* All Dogs Available  */}
      {/* Dog Place  */}
      
      

      <Route exact path="*" component={PageNotFound}/>


      </Switch>

    <Footer/>



</BrowserRouter>

    </>

  );
}

export default App;
