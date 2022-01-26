import React from 'react'
import RegisterStyle from '../../styles/pages/Register/RegisterStyle'

import CustomInput from '../../components/Input/CustomInput'
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton'
import Footer from '../../components/layout/Footer/Footer'
import Navbar from '../../components/layout/Navbar/Navbar'
import { Link } from 'react-router-dom'

function Register () {
    return (
        <>
        <Navbar></Navbar>
        <div className={RegisterStyle}>
            <h1 className='wave'>¡Hola!</h1>
            <h3 className='info_text'>
                <span> ¿Nuevo aquí? ¡Hagamos una cuenta! ¿No nuevo? </span><br/>
                Verifique que su correo electrónico se haya ingresado correctamente.</h3>
            <CustomInput labelText='Nombre' placeHolderText='Nombre aqui' inputType='text'></CustomInput>
            <CustomInput labelText='Contraseña' placeHolderText='Crear contraseña' inputType='password'></CustomInput>
            <ConfirmButton type='button' text='Crear'></ConfirmButton>
            <Link to='/login'>Intentar con otro correo </Link>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Register