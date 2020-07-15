import React, { Component, useState } from 'react';
import './App.css';
import '/Users/usuario/hoteles/node_modules/bulma/css/bulma-rtl.min.css';
import moment from 'moment';


import '@fortawesome/fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free-solid';

import { today, hotelsData } from '/Users/usuario/hoteles/src/scripts/data.js';
import Hero from './Components/Hero';
import DateFilter from './Components/DateFilter';
import OptionsFilter from './Components/OptionsFilter';
import Filters from './Components/Filters';
import Hotel from './Components/Hotel';
import Hotels from './Components/Hotels';

export default function App() {

const filtersInitialValues= {
    dateFrom: today, // Proviene del archivo data.js
    dateTo: new Date (today.valueOf() + 86400000),
    country: undefined,
    price: undefined,
    rooms: undefined
   };

const options= {
   value: undefined, name: 'Cualquier Tamaño',
   value: 10, name: 'Hotel Pequeño',
   value: 20, name: 'Hotel Mediano',
   value: 30, name: 'Hotel Grande',
   };


   const [ filters, setFilters ] = useState(filtersInitialValues);
   

   const hotel= { hotelsData }

   const handleChangeFilter= (e) => {
     const name = e.target.name;
     const type = e.target.type
     const value =  (type === 'date') ? moment(e.target.value) :  e.target.value
     
     /*if ( type === 'date' ) { 
       value = new Date( value )
      } */





     setFilters( { 
       ...filters,
      [ name ]: value,
     } )

     console.log( name, value, type)  
   }


  return (
    <div>
    
      <Hero filters={ filters }
            
       />
      <Filters filters={ filters, options } 
               onChange = { handleChangeFilter }
      />

      <div className="column is-one-third">
       <Hotels data={ hotel } />
      </div>
  
      
    </div>
  )

 }
