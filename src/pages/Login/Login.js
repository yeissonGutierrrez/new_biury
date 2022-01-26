import {useEffect, useState, ReactDOM} from 'react'
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton'
import CustomInput from '../../components/Input/CustomInput'
import LoginStyle from '../../styles/pages/Login/LoginStyle'

import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import Navbar from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'
import { Link } from 'react-router-dom'


const correos = [ 
    {
        email: 'yeisson@hotmail.com',
        name: 'yeisson',
        password: '123'
    },
    {
        email: 'yeisuan@hotmail.com',
    },
]

function findUser(newUser) {
    const correo = document.getElementById('input_login_email').value
    
    let micorreo = correos.find((e) => correo === e.email)
    if (micorreo) {
        sessionStorage.setItem('userEmail', micorreo.email)
        sessionStorage.setItem('userName', micorreo.name)
        newUser(micorreo.name)
    } else {
        window.open('/register', '_self')
    }
}

function passwordValidation(){
    const user = sessionStorage.getItem('userEmail')
    const password = document.getElementById('input_login_password').value
    
    let userData = correos.find((e) => user === e.email)
    if (userData) {
        if (password === userData.password) {
            sessionStorage.setItem('login', 'true')
            window.open('/perfil', '_self')
        } else {
            toastr.error("Contraseña incorrecta", "ERROR")
        }
        
    } else {
        
    }
}

function Login() {
    const [user, setuser] = useState(null)

    const userName = sessionStorage.getItem('userName')
    useEffect(
        () => {
            if (userName) {
                setuser(userName)
            }
        }
    )
    return (
        <>
        <Navbar></Navbar>
        {
            user
            ?
                <div className={LoginStyle}>
                    <h1 className='wave'>¡Bienvenida de nuevo,<br/> {userName}!</h1>
                    <h3 className='info_text'></h3>
                    <CustomInput inputType='password' inputId='input_login_password' labelText='Contraseña' placeHolderText='Tu correo electronico aquí'></CustomInput>
                    <ConfirmButton type='link'  toDo={passwordValidation} text='Iniciar sesión'></ConfirmButton>
                    <Link to='/login'>Olvide mi contraseña</Link>
                </div>
            :
                <div className={LoginStyle}>
                    <h1 className='wave'>¡Hola!</h1>
                    <h3 className='info_text'>Introduce tu dirección de correo electrónico</h3>
                    <CustomInput inputId='input_login_email' inputType='email' labelText='Correo' placeHolderText='Tu correo electronico aquí'></CustomInput>
                    <ConfirmButton type='button' toDo={() => findUser(setuser)} text='Enviar'></ConfirmButton>
                </div>
        }
        <Footer></Footer>
        </>
    )
}

export default Login