import React, { useState } from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Navbar from '../../components/layout/Navbar/Navbar'

import PerfilStyle from '../../styles/pages/Profile/ProfileStyle'
import Register from './Register'

import UserProfile from './UserProfile'




function Perfil () {
    const [Seccion, setSeccion] = useState('1')
    const user = sessionStorage.getItem('userName')
    return (
        <>
        <Navbar></Navbar>
        <div className={PerfilStyle}>
          {/* <UserProfile/> */}
          <Register/>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Perfil