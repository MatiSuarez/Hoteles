import React from 'react'
import Tag from './Tag' ;

export default function Hotel ( { hotel }) {

    return (
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={ hotel.photo } alt={ hotel.name } />
    </figure>
  </div>
  <div className="card-content">
    <p className="title is-4"> { hotel.name } </p>
    <p> { hotel.description } </p>
    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>

       <Tag icons={ [ { name:'fa-map-marker' } ] } >
         { hotel.city }, { hotel.country }
       </Tag> 

       <Tag icons={ [ { name:'fa-bed' } ] } >
         { hotel.rooms } Habitaciones 
       </Tag>

       <Tag icons={
                    Array.from( { length: 4 } )
                    .fill( { name:'fa-dollar-sign' }, 0, hotel.price )
                    .fill( { name:'fa-dollar-sign', style:{ opacity: '.25' } }, hotel.price, 4 )  
                   }
         />
                <Tag icons={
                    Array.from( { length: 5 } )
                    .fill( { name:'fa-star' }, 0, hotel.price )
                    .fill( { name:'fa-star', style:{ opacity: '.25' } }, hotel.price, 5 )  
                   }
         />

    </div>
  </div>
  <div className="card-footer">
    <a href="javascript:alert('Aún no está implementado :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
  </div>
</div>

    )
}