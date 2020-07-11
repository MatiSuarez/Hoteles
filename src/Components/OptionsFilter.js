import React from 'react'


export default function OptionsFilter ({ options, selected, icon, name }) { 

    const handleOptionChange = (event) => { 
        let payload = this.props.filters
        payload [ event.target.name ] = event.target.value
        this.props.onFilterChange(payload);
     }


    return (
        <div className='field'>
            <div className='control has-icons-right'>
                <div className='select' style= { { width: '100%' } }>
                    <select style= { { width: '100%' } } defaultValue={ selected }>
                        {
                            options.map( (option)=>
                            <option key= { option.name } 
                                    value= { option.value }
                                    onClick= { handleOptionChange }
                                    name= { name }>
                                  {option.name}
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