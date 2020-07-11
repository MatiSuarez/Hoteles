import React from 'react'
import { filter } from 'o'

export default function DateFilter ( { icon, date, name } ) {

   const handleDateChange = (event) => { 
       alert('PRUEBA 2')
    }

    return (
        <div className='field'> 
            <div className='control has-icons-left'>
                <input className='input' 
                       type='date' 
                       onChange= { handleDateChange} 
                       value= { date }
                        name= { name }
                        />
                <span className='icon is-small is-left'>
                    <i className='fas fa-sign-in-alt'></i>
                </span>
            </div>
        </div>
    )
}