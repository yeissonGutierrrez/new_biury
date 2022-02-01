import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/LogoBiuryWhite.svg'
import NavbarStyle from '../../../styles/components/Layout/NavbarStyle/NavbarStyles'

function Navbar () {
    const [user, setuser] = useState(null)
    const login = sessionStorage.getItem('login')


    return (
        <div className={NavbarStyle}>
            <div className='list_menu'>
                <Link to='/HowItWork'>Cómo funciona</Link>
                <hr/>
                <Link to='/Quiz'>CREA TU PERFIL GRATIS</Link>
            </div>

            <div className='center'>
                <img src={Logo}/>
            </div>

            <div className='list_menu'>
                {
                    login === 'true'
                    ?
                    <Link to='/perfil'><i className='userIcon'></i> {sessionStorage.getItem('userName')}</Link>
                    :
                    <Link to='/login'><i className='userIcon'></i> INGRESAR</Link>
                }
                <Link to='/'><i className='shopIcon'></i></Link>
                <Link to='/'><i className='instagramIcon'></i></Link>
                <Link to='/'><i className='wspIcon'></i></Link>
            </div>
        </div>
    )
}

export default Navbar