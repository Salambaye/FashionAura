import React from 'react'
import './nav.css'
import { MdLocalShipping } from 'react-icons/md'
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineLogin } from "react-icons/md";
import { CiLogout, CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
    <>
    {/*Header du site*/}
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
                {
                    isAuthenticated ?
                        //Le logout bouton s'affiche si l'utilisateur s'est connecté
                        <div className='user'>
                            <div className='icon'>
                                <CiLogout/>
                            </div>
                            <div className='btn'>
                                <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>Se
                                    déconnecter
                                </button>
                            </div>
                        </div>
                        :
                        //Le login bouton s'affiche si l'utilisateur n'est pas connecté
                        <div className='user'>
                            <div className='icon'>
                                <MdOutlineLogin/>
                            </div>
                            <div className='btn'>
                                <button onClick={() => loginWithRedirect()}>Se connecter</button>
                            </div>
                        </div>

                }
            </div>

            <div className='last_header'>
                <div className='user_profile'>
                    {
                        //Pour voir le profil de l'utilisateur après authentification
                        isAuthenticated ?
                            <>
                                <div className='icon'>
                                    <CiUser/>
                                </div>
                                <div className='info'>
                                    <h2>{user.name}</h2>
                                    <p>{user.email}</p>
                                </div>
                            </>
                            :
                            <>
                                <div className='icon'>
                                    <CiUser/>
                                </div>
                                <div className='info'>
                                    <p>Connectes-toi stp</p>
                                </div>
                            </>


                    }
                </div>

            </div>

        </div>
    </>


    )
}
export default Nav
