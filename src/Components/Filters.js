import React from 'react'

import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';

export default function Filters(props) {

    const { filters } = props

    return(
        <nav className='navbar is-info' style= { { justifyContent:'center' } }>
            <div className='navbar-item'>
                <DateFilter 
                 date= { filters.dateFrom }
                 icon='sign-in-alt'
                />
            </div>
            <div className='navbar-item'>
                <DateFilter 
                 date= { filters.dateTo }
                 icon='sign-in-alt'
                />
            </div>
            <div className='navbar-item'>
                <OptionsFilter 
                 options= { [ { value: undefined, name: 'Todos los Países' },
                              { value: 'Argentina', name: 'Argentina' },
                              { value: 'Brasil', name: 'Brasil' },
                              { value: 'Chile', name: 'Chile' },
                              { value: 'Uruguay', name: 'Uruguay' }] }
                 selected= { filters.country }
                 icon='globe'
                />
            </div>
            <div className='navbar-item'>
                <OptionsFilter 
                 options= { [ { value: undefined, name: 'Cualquier Precio' },
                              { value: 1, name: '$' },
                              { value: 2, name: '$$' },
                              { value: 3, name: '$$$' },
                              { value: 4, name: '$$$$' } ] }
                 selected= { filters.price }
                 icon='dolar-sign'
                />
            </div>
            <div className='navbar-item'>
                <OptionsFilter 
                 options= { [ { value: undefined, name: 'Cualquier Tamaño' },
                              { value: 10, name: 'Hotel Pequeño' },
                              { value: 20, name: 'Hotel Mediano' },
                              { value: 30, name: 'Hotel Grande' } ] }
                 selected= { filters.rooms }
                 icon='bed'
                />
            </div>
        </nav>
    )
}