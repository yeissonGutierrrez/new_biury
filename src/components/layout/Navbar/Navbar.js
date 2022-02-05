import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import NavbarStyle from '../../../styles/components/Layout/NavbarStyle/NavbarStyles'

import Logo from '../../../assets/images/LogoBiuryWhite.svg'

import menuIcon from '../../../assets/images/components/layout/Navbar/mobileAmburguerIcon.svg'


function Navbar ({bgColor}) {
    const [isOpen, setIsOpen] = useState('');
    
    const [user, setuser] = useState(null)
    const login = sessionStorage.getItem('login')


    return (
        <div style={{backgroundColor: bgColor}} className={NavbarStyle}>
            <div className='list_menu'>
                <div className='list'>
                    <Link to='/HowItWork'>Cómo funciona</Link>
                    <hr/>
                    <Link to='/Quiz'>CREA TU PERFIL GRATIS</Link>
                </div>
  

                <Link className='logo' to={'/'}>
                    <img src={Logo}/>
                </Link>

                <div className='list'>
                    {
                        login === 'true'
                        ?
                        <Link to='/perfil'><i className='userIcon'></i> {sessionStorage.getItem('userName')}</Link>
                        :
                        <Link to='/perfil'><i className='userIcon'></i> INGRESAR</Link>
                    }
                    <Link to='/'><i className='shopIcon'></i></Link>
                    <Link to='/'><i className='instagramIcon'></i></Link>
                    <Link to='/'><i className='wspIcon'></i></Link>
                </div>
            </div>

            <div className='list_menu_mobile'>

                <Link className='logo_mobile' to={'/'}>
                    <img src={Logo}/>
                </Link>

            
                 <Link className='suscription' to='/Quiz'>Activar suscripcion</Link>


                <img onClick={() => setIsOpen('show')} src={menuIcon}/>  

                <div style={{background: 'linear-gradient(231.97deg, #FE6706 -38.3%, #EF0C75 73.92%)', display: 'none'}} className={`${isOpen === 'show' ? "backdrop" : "" || isOpen === 'hidden' ? "hidden" : ""}`}>
                        <Link className='logo_mobile' to={'/'}>
                            <img src={Logo}/>
                        </Link>
                        <h1>Hola mundo</h1>
                </div>       
            </div>
        </div>
    )
}

export default Navbar