import React from 'react'
import Hotel from './Hotel';

export default function Hotels( { hotels } ) {

     if ( !hotels || ( hotels && hotels.length === 0 ) ) {
          return (
              <article className="message is-warning">
                  <div className="message-body">
                      No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                  </div>
              </article>
          ) ;
      }
     
     return (

        <section className="section" style={ {marginTop: '3em'} }>
         <div className="container">
          <div className="columns is-multiline">
               { hotels.map( hotel => (
                    <div key={ hotel.slug } className="column is-one-third">
                    <Hotel hotel={ hotel } />
                    </div>
               ) ) }   
          </div>
         </div>
       </section>
     )
}