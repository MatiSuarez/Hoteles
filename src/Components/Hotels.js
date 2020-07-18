import React from 'react'
import Hotel from './Hotel';

export default function Hotels( { hotels } ) {
     
     return (

        <section className="section" style={ {marginTop: '3em'} }>
         <div className="container">
          <div className="columns is-multiline">
               { hotelsData.map( hotel => (
                    <div key={ hotel.slug } className="column is-one-third">
                    <Hotel data={ hotel } />
                    </div>
               ) ) }   
          </div>
         </div>
       </section>
     )
}