import React from 'react'
import Hotel from './Hotel';

export default function Hotels( { hotels } ) {
     
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