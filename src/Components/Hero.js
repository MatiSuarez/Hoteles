import React from 'react';

export default function Hero ({ filters }) {
 
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }; 

    return (

       <section className="hero is-primary">
          <div className="hero-body">
              <div className="container">
                   <h1 className="title">Hoteles</h1>
                   <h2 className="subtitle">
                   Desde el <strong> { filters.dateFrom.toLocaleDateString('es-AR', options) } </strong> hasta el <strong> { filters.dateTo.toLocaleDateString('es-AR', options) }</strong>
                   </h2>
              </div>
          </div>
        </section>
    )
}
