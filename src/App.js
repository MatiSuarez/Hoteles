import React, { Component, useState } from 'react' ;
import './App.css' ;
import '../node_modules/bulma/css/bulma-rtl.min.css' ;
import moment from 'moment' ;

import '@fortawesome/fontawesome' ;
import '@fortawesome/free-solid-svg-icons' ;
import '@fortawesome/fontawesome-svg-core' ;
import '@fortawesome/fontawesome-free-solid' ;

import { today, hotelsData } from './scripts/data.js' ;
import Hero from './Components/Hero' ;
import Filters from './Components/Filters' ;
import Hotels from './Components/Hotels' ;

export default function App() {
    const filtersInitialValues = {
        dateFrom: today, // Proviene del archivo data.js
        dateTo: new Date( today.valueOf() + 86400000 ),
        country: undefined,
        price: undefined,
        rooms: undefined,
    } ;


    const [ filters, setFilters ] = useState( filtersInitialValues ) ;

    const [hotels, setHotels] = useState(hotelsData);

    const handleChangeFilter = ( e ) => {
        const { name } = e.target ;
        const { type } = e.target ;
        const value = ( type === 'price' ) ? moment( e.target.value ) : e.target.value ;

        /* if ( type === 'date' ) {
       value = new Date( value )
      } */

        setFilters( {
            ...filters,
            [name]: value,
        } ) ;

        console.log( name, value, type ) ;
    } ;

    return (
        <div>

            <Hero
                 filters={ filters } />
            
            <Filters
                filters={ filters }
                onChange={ handleChangeFilter } />

                <Hotels 
                    hotels={ hotels } />

        </div>
    ) ;
}
