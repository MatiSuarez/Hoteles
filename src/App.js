import React, { useEffect, useState } from 'react' ;
import './App.css' ;
import '../node_modules/bulma/css/bulma-rtl.min.css' ;
import moment from 'moment' ;
import  './config/momentConfig' ;

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

    const [hotels, setHotels] = useState( hotelsData );

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


    useEffect( () => {
        
        let filteredHotels = hotelsData ;

        filteredHotels = filteredHotels.filter( hotel => {
            return (
                moment( hotel.availabilityFrom ).isSameOrBefore( filters.dateFrom, 'D' ) &&
                moment( hotel.availabilityTo ).isSameOrAfter( filters.dateTo, 'D' )
            ) ; 
        } ) ;



        if ( filters.price && !( filters.price === 'Cualquier precio' ) ) {
            filteredHotels = filteredHotels.filter( hotel => hotel.price === parseInt( filters.price ) ) ;
        }

        if ( filters.country && !( filters.country === 'Todos los países' ) ) {
            filteredHotels = hotelsData.filter( hotel => hotel.country === filters.country ) ;
        }

        if ( filters.rooms && !( filters.rooms === 'Cualquier tamaño' ) ) {

            switch ( filters.rooms ) {
                case '10':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms <= 10 ) ;
                    break ;
            
                case '20':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms > 10 && hotel.rooms <= 20 ) ;
                    break ;
            
                case '30':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms > 20 ) ;
                    break ;
                default:
                    break ;
            }
        }

        setHotels( filteredHotels ) ;

    }, [ filters ] ) ;


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
