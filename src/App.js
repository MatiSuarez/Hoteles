import React, { Component } from 'react';
import './App.css';
import '/Users/usuario/hoteles/node_modules/bulma/css/bulma-rtl.min.css';

import {today} from '/Users/usuario/hoteles/src/scripts/data.js';
import Hero from './Components/Hero';
import DateFilter from './Components/DateFilter';
import OptionsFilter from './Components/OptionsFilter';
import Filters from './Components/Filters';
import Hotel from './Components/Hotel';


class App extends Component {

  constructor () {
    super();

  this.state= { 
    filters: {
    dateFrom: today, // Proviene del archivo data.js
    //dateTo: new Date(today.valueOf() + 86400000),
    country: undefined,
    price: undefined,
    rooms: undefined
   } 
 }
}

render() {
  return (
    <div>
    
      <Hero filters={ this.state.filters }/>
      <Filters filters={ this.state.filters }/>
      <Hotel  />
  
      
    </div>
  )

 }
}

export default App;
