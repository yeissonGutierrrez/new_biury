

import { useState } from 'react'

import facebookIcon from '../../assets/images/Profile/buttonFacebookIcon.svg'
import googleIcon from '../../assets/images/Profile/googleIcon.svg'


function Register({setState}) {
    const [option, setoption] = useState('register')

    return (
        <>
            <h1 className="title">PERFIL BIURY<span>CLUB</span></h1>

            <h1 className='seccion-title2'>1. CREA UNA CUENTA O INICIA SESIÓN.</h1>

            <div className='options-login'>
                <h3 onClick={() => setoption('register')} style={{borderBottom: ((option === `register`) ? '#242535 solid 3px' : '')}} >INSCRIBIRSE</h3>
                <hr/>
                <h3 onClick={() => setoption('login')} style={{borderBottom: ((option === `login`) ? '#242535 solid 3px' : '')}} >INICIA SESIÓN</h3>
            </div>

            {
                option === 'register'
                ?
                <div className="form">
                    <div className='two-inputs'>
                        <label>
                        Nombre
                        <input type='text'></input>
                        </label>
                        <label>
                        Apellido
                        <input type='text'></input>
                        </label>
                    </div>
                    <div className="one-input">
                        <label>
                        Correo electrónico
                        <input type='text'></input>
                        </label>
                    </div>
                    <div className="one-input">
                        <label>
                        Contraseña
                        <input type='text'></input>
                        </label>
                        
                        <label>
                        Confirmar Contraseña
                        <input type='text'></input>
                        </label>
                    </div>
                    <div className='checkout'>
                        <label>
                            He leído y acepto términos y condiciones
                            <input type='checkbox'></input>
                        </label>
                        <label>
                        Quiero recibir información
                            <input type='checkbox'></input>
                        </label>
                    </div>
                    <div className="buttons-wrapper">
                        <button onClick={()=> setState('logined')}>
                            CONTINUAR
                        </button>

                        <button className='facebook'>
                            INICIAR SESIÓN USANDO FACEBOOK
                            <img src={facebookIcon}/>
                        </button>

                        <button className='google'>
                            INICIAR SESIÓN USANDO GOOGLE
                            <img src={googleIcon}/>
                        </button>
                    </div>
                </div>
                : option === 'login'
                ?
                <div className="form">
                    <div className="one-input">
                        <label>
                        Correo electrónico
                        <input type='text'></input>
                        </label>
                    </div>
                    <div className="one-input">
                        <label>
                        Contraseña
                        <input type='text'></input>
                        </label>
                    </div>
                    <div className='checkout'>
                        <label>
                            He leído y acepto términos y condiciones
                            <input type='checkbox'></input>
                        </label>
                        <label>
                        Quiero recibir información
                            <input type='checkbox'></input>
                        </label>
                    </div>
                    <div className="buttons-wrapper">
                        <button onClick={()=> setState('logined')}>
                            CONTINUAR
                        </button>

                        <button className='facebook'>
                            INICIAR SESIÓN USANDO FACEBOOK
                            <img src={facebookIcon}/>
                        </button>

                        <button className='google'>
                            INICIAR SESIÓN USANDO GOOGLE
                        </button>
                    </div>
                </div>
                : null
            }

            <h1 className='seccion-title2'>2. ¿A DÓNDE QUIERES QUE LLEGUE TU BIURYBOX?</h1>
            <div className="form">
                
                <div className="one-input">
                    <label>
                    Nombre Completo
                    <input type='text'></input>
                    </label>
                </div>

                <div className="one-input">
                    <label>
                    Correo electrónico
                    <input type='text'></input>
                    </label>
                </div>

                <div className="one-input">
                    <label>
                    Dirección 1
                    <input type='text'></input>
                    </label>
                </div>

                <div className="one-input">
                    <label>
                    Dirección 2
                    <input type='text'></input>
                    </label>
                </div>

                <div className="two-inputs">
                    <label>
                    Ciudad
                    <input type='text'></input>
                    </label>
                    <label>
                    Departamento
                    <input type='text'></input>
                    </label>
                </div>

                <div className="two-inputs">
                    <label>
                    Teléfono/Célular
                    <input type='text'></input>
                    </label>
                </div>

                <div className="buttons-wrapper">
                    <button>
                        CONTINUAR
                    </button>
                </div>
            </div>

            <h1 className='seccion-title2'>3. INGRESA INFORMACIÓN DE FACTURACIÓN</h1>

            <div className='form'> 
                <div className="one-input">
                    <label>
                    ¿Tienes un código de descuento?
                    <input type='text'></input>
                    </label>
                </div>

                <div className='info'>
                    <span>
                        Sutotal (1 Elemento)
                    </span>
                    <span>
                    $ 0.0
                    </span>
                </div>

                <div className='info'>
                    <span>
                        Descuento atractivo (35% descuento)
                    </span>
                    <span>
                    $ 0.0
                    </span>
                </div>

                <div className='info'>
                    <span>
                        Envío y manejo
                    </span>
                    <span>
                    $ 0.0
                    </span>
                </div>

                <div className='info'>
                    <span>
                        Impuesto (Calculado al final de la compra)
                    </span>
                    <span>
                    $ 0.0
                    </span>
                </div>

                <hr/>

                <div className='info'>
                    <span className='bold'>
                        Total
                    </span>
                    <span>
                    $ 0.0
                    </span>
                </div>

                <div className="buttons-wrapper">
                    <button>
                        CONTINUAR
                    </button>
                </div>
            </div>
            
        </>
    )
}

export default Register