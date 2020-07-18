import React from 'react'
import Hotel from './Hotel';

export default function Hotels( { hotel } ) {
     
     return (

        <section className="section" style={ {marginTop: '3em'} }>
         <div className="container">
          <div className="columns is-multiline">
               <Hotel data={ hotel } />
          </div>

        <article className="message is-warning">
          <div className="message-body">
              No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
          </div>
        </article>
        
         </div>
       </section>
     )
}