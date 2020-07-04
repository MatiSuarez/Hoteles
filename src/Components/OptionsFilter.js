import React from 'react'

export default function OptionsFilter (props) {

    const { options, selected } = props
    

    return (
        <div className='field'>
            <div className='control has-icons-left'>
                <div className='select' style= { { width: '100%' } }>
                    <select style= { { width: '100%' } } defaultValue={ selected }>
                        {
                            options.map( (option)=>
                            <option key={option.name} value={option.value}>
                                  {option.name}
                             </option>      
                            )
                        }
                    </select>
                </div>
            <div className='icon is-small is-left'>
                <i className='fas' ></i>           
            </div>    
        </div>
    </div>
    )
}