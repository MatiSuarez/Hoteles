import React from 'react'

export default function DateFilter () {

    return (
        <div className='field'>
            <div className='control has-icons-left'>
                <input className='input' type='date' />
                <span className='icon is-small is-left'>
                    <i className='fas fa-sign-in-alt'></i>
                </span>
            </div>
        </div>
    )
}