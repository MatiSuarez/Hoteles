import React from 'react'
import Hotel from './Hotel';

export default function Hotels( props ) {

     const { hotel } = props.data;
     
     return (

        <section className="section" style={ {marginTop: '3em'} }>
         <div className="container">
          <div className="columns is-multiline">
               <Hotel />
          </div>
         </div>
       </section>
     )
}