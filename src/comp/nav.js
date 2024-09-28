import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import './nav.css'
const Nav = () => {
    return (
        <div className='header'>
            <div className='top_header'>
                <div className='icon'>
                    <MdLocalShipping />
                </div>
                <div className='info'>
                    <p>Livraison gratuite pour toute première commande</p>
                </div>
            </div>
        </div>
    )
}
export default Nav
