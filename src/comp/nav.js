import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineLogin } from "react-icons/md";
import './nav.css'
const Nav = () => {
    return (

        //Header du site
        <div className='header'>
            <div className='top_header'>
                <div className='icon'>
                    <MdLocalShipping/>
                </div>
                <div className='info'>
                    <p>Livraison gratuite pour toute première commande</p>
                </div>
            </div>

            <div className='mid_header'>
                <div className='logo'>
                    <img src='images/logo_fashionaura.png' alt='logo' />
                </div>
                <div className='search_box'>
                    <input type='text' value='' placeholder='Rechercher'/>
                    <button><AiOutlineSearch /></button>
                </div>
                <div className='user'>
                    <div className='icon'>
                        <MdOutlineLogin />
                    </div>
                    <div className='btn'>
                        <button>Login</button>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Nav
