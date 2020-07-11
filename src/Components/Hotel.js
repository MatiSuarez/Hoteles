import React from 'react'
import { hotelsData } from '../scripts/data'
import Foto from '../images/sainte-jeanne.jpg'

export default function Hotel () {


    return (
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={ Foto } alt="Sainte Jeanne Boutique & Spa" />
    </figure>
  </div>
  <div className="card-content">
    <p className="title is-4">Sainte Jeanne Boutique & Spa</p>
    <p>Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.</p>
    <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
          <span className="tag is-medium">Mar del Plata, Argentina</span>
        </div>
      </div>
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
          <span className="tag is-medium">23 Habitaciones</span>
        </div>
      </div>
      <div className="control">
        <div className="tags">
          <span className="tag is-medium is-info">
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>
            <i className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="card-footer">
    <a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
  </div>
</div>

    )
}