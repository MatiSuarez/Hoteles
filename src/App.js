import React, { Component, useState } from 'react';
import './App.css';
import '/Users/usuario/hoteles/node_modules/bulma/css/bulma-rtl.min.css';


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

const filters= {
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

   
   const handleFilterChange= (payload)=> {
     filters= payload
   };

   const [ setFilters ] = useState();

   const handleChangeDateFrom = ( e ) => {

    let selectedDate = e.target.value;  
    const dateFormat = selectedDate.replace(/-/gi,',');
    const newDateFrom = new Date(dateFormat);
    
    setFilters({
      ...filters,
      dateFrom : newDateFrom
    });
   };
   
   const handleChangeDateTo = ( e ) => {
    
    let selectedDate = e.target.value;  
    const dateFormat = selectedDate.replace(/-/gi,',');
    const newDateTo = new Date(dateFormat);
    
    setFilters({
      ...filters,
      dateTo : newDateTo
    });
   };

   const hotel= { hotelsData }


  return (
    <div>
    
      <Hero filters={ filters }
            onFitersChange= { handleFilterChange }
       />
      <Filters filters={ filters, options } 
               handleChangeDateFrom={ handleChangeDateFrom }
               handleChangeDateTo={ handleChangeDateTo }
      />

      <div className="column is-one-third">
       <Hotels data={ hotel } />
      </div>
  
      
    </div>
  )

 }
