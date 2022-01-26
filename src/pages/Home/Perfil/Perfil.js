import React, { useState } from 'react'
import BillingInformation from '../../../components/BillingInformation/BillingInformation'
import EditPerfil from '../../../components/EditPerfil/EditPerfil'
import Footer from '../../../components/layout/Footer/Footer'
import Navbar from '../../../components/layout/Navbar/Navbar'
import PerfilActiveSus from '../../../components/PerfilActiveSus/PerfilActiveSus'
import PerfilStyle from '../../../styles/pages/Perfil/PerfilStyle'

function Perfil () {
    const [Seccion, setSeccion] = useState('1')
    const user = sessionStorage.getItem('userName')
    return (
        <>
        <Navbar></Navbar>
        <div className={PerfilStyle}>
            <h1 className='title'>Hola, {user}</h1>
            <ul className='menu_list'>

                {
                    Seccion === '1'
                    ?
                    <li className='menu_button'>
                        Editar Perfil
                        <hr />
                    </li>
                    : 
                    <li onClick={() => setSeccion('1')} className='menu_button'>
                        Editar Perfil
                    </li>
                }

                {
                    Seccion === '2'
                    ? 
                    <li className='menu_button'>
                        Suscripciones
                        <hr />
                    </li>
                    : 
                    <li onClick={() => setSeccion('2')} className='menu_button'>
                        Suscripciones
                    </li>
                }

                {
                    Seccion === '3'
                    ? 
                    <li className='menu_button'>
                        Información facturación
                        <hr />
                    </li>
                    : 
                    <li onClick={() => setSeccion('3')} className='menu_button'>
                        Información facturación
                    </li>
                }
            </ul>

            {
                Seccion === '1'
                ?
                <EditPerfil></EditPerfil>
                :
                null
            }

            {
                Seccion === '2'
                ?
                <PerfilActiveSus></PerfilActiveSus>
                :
                null
            }

            {
                Seccion === '3'
                ?
                <BillingInformation></BillingInformation>
                :
                null
            }
            
        </div>
        <Footer></Footer>
        </>
    )
}

export default Perfil