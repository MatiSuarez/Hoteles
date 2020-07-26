import React from 'react'


export default function OptionsFilter ({ options, selected, icon, name, onChange }) { 

    return (
        <div className='field'>
            <div className='control has-icons-right'>
                <div className='select' style= { { width: '100%' } }>
                    <select style= { { width: '100%' } } defaultValue={ selected } onChange={ onChange } name={ name }>
                        {
                            options.map( ( option )=>
                            <option key= { option.name } 
                                    value= { option.name }
                                    >
                                  { option.name }
                             </option>      
                            )
                        }
                    </select>
                </div>
            <div className='icon is-small is-right'>
                <i className= { 'fas ' + icon} ></i>           
            </div>    
        </div>
    </div>
    )
}