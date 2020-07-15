import React from 'react'
import moment from 'moment';

export default function DateFilter ( { icon, date, name, onChange } ) {

    return (
        <div className='field'> 
            <div className='control has-icons-left'>
                <input className='input' 
                       type='date' 
                       onChange= { onChange } 
                       value= { moment(date).format('YYYY-MM-DD') }
                        name= { name }
                        />
                <span className='icon is-small is-left'>
                    <i className='fas fa-sign-in-alt'></i>
                </span>
            </div>
        </div>
    )
}