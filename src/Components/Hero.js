import React from 'react';
import moment from 'moment';

export default function Hero ({ filters }) {
 

    return (

       <section className="hero is-primary"> 
          <div className="hero-body">
              <div className="container">
                   <h1 className="title">Hoteles</h1>
                   <h2 className='subtitle'>
                   Desde el  <strong> { moment(filters.dateFrom).format('LL') } </strong> 
                   hasta el <strong> { moment(filters.dateTo).format('LL') } 
                   { filters.country ? ` en ${filters.country}` : '' } 
                   { filters.price ? ` por ${ '$'.repeat ( filters.price ) }` : '' } 
                   
                   { filters.rooms  ? ` de hasta ${filters.rooms} habitaciones` : '' } </strong> 
                   </h2>
              </div>
          </div>
        </section>
    ) ;
}
