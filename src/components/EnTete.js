import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

export const EnTete = () => {
    return (
        <div className='logoDisney'>
            <Link to={`/`}>
                <img src={logo} alt="Logo de Disney+" />
            </Link>
        </div>
    )
}