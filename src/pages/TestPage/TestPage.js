import React, { useState } from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Navbar from '../../components/layout/Navbar/Navbar'
import TestPageStyle from '../../styles/pages/TestPage/TestPageStyle'

import welcomeImage from '../../assets/images/portrait-of-two-mixed-race-women-stand-with-closed-eyes-apply-cucumber-slices-on-face-to-moisturize-enjoy-softness-of-skin 1.png'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import SwiperCore, {
    Pagination,
    Navigation
  } from 'swiper';
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton'
import CustomInput from '../../components/Input/CustomInput'

SwiperCore.use([Pagination,Navigation]);



const preguntas = [
    {
        type: 'input',
        pregunta: "Cuentanos Pepita, eres hombre, mujer o prefieres no contarlo.",
        respuestas: {
            a: "Hombre",
            b: "Mujer",
            c: "Prefiero no decirlo"
        },
    },
    {
        type: 'select',
        pregunta: "Cuentanos Pepita, eres hombre, mujer o prefieres no contarlo.",
        respuestas: {
            a: "Hombre",
            b: "Mujer",
            c: "Prefiero no decirlo"
        },
    },

];


function mostrarResultado() {
    const respuestas = document.querySelectorAll(".question_input");
    
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
      const todasLasRespuestas = respuestas[numeroDePregunta];
      const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
      const select = document.getElementById(`select${numeroDePregunta}`)
      
      
      if (preguntaActual.type === 'input') {
          const respuestaElegida = (
              todasLasRespuestas.querySelector(checkboxRespuestas) || {}
              ).value;
            console.log(respuestaElegida)
        } else {
            const respuestaElegida = select.value 
              console.log(respuestaElegida)
        }
      });
      
    }


function TestPage () {
    const [state, setState] = useState('begin')
    return (
        <>
        <Navbar></Navbar>
        <div className={TestPageStyle}> 
            <div className='form_container'>
                <img className='logo'/>
                {
                    state === 'begin'
                    ?
                    <div className='welcome_seccion'>
                        <div className='welcome_seccion_text'>
                            <h1>Queremos conocerte, cuéntanos cómo es tu tipo de piel y cabello </h1>
                            <p>¡Esto nos ayudará a personalizar una caja de productos solo para ti!</p>
                            <ConfirmButton toDo={() => setState('setNickName')} type='button' text='Empezar'></ConfirmButton>
                        </div>
                        <div className='welcome_seccion_image'>
                            <img src={welcomeImage}/>
                        </div>
                    </div>
                    :
                    null
                }

                {
                    state === 'setNickName'
                    ? 
                    <div className='nickname_seccion'>
                        <h1>¡Bienvenida!</h1>
                        <p>Queremos conocerte y ser mas cercanos. Como te dicen tus amigos de forma cariñosa?</p>
                        <CustomInput inputId='NickNameInput' borderColor='black' textColor='black' inputType='text' labelText='Nickname' placeHolderText='Tu nickname aquí'></CustomInput>
                        <ConfirmButton toDo={() => setState('test')} text='Siguiente' type='button'></ConfirmButton>
                    </div>
                    : null
                }

                {
                    state === 'test'
                    ?
                    <div className='test_seccion'>
                        <Swiper pagination={{"type": "progressbar"}} navigation={true} className="mySwiper test_swiper">
                            
                        {
                          preguntas.map((q , index) => {
                            return (
                              <>
                                {
                                    q.type === 'input'
                                    ?
                                        <SwiperSlide className='question_container'>
                                                <h2 className='question'>{q.pregunta}</h2>
                                                
                                                <div className='question_input'>
                                                    <input type="radio" name={index} value={q.respuestas.a} id={`questionInput${index}a`} />
                                                    <label for={`questionInput${index}a`}>{q.respuestas.a}</label>
                                            
                                                    <input type="radio" name={index} value={q.respuestas.b} id={`questionInput${index}b`}/>
                                                    <label for={`questionInput${index}b`}>{q.respuestas.b}</label>
                                            
                                                    <input type="radio" name={index} value={q.respuestas.c} id={`questionInput${index}c`}/>
                                                    <label for={`questionInput${index}c`}>{q.respuestas.c}</label>
                                                </div>
                                            </SwiperSlide>
                                    : null
                                }

                                {
                                    q.type === 'select'
                                    ?
                                        <SwiperSlide className='question_container'>
                                            <h2 className='question'>{q.pregunta}</h2>
                                                
                                            <div className='question_input'>
                                                <select id={`select${index}`}>
                                                    <option value={q.respuestas.a}>{q.respuestas.a}</option>
                                                    <option value={q.respuestas.b}>{q.respuestas.b}</option>
                                                    <option value={q.respuestas.c}>{q.respuestas.c}</option>
                                                </select>
                                            </div>
                                            </SwiperSlide>
                                    : null
                                }
                                  </>
                                )
                              })
                            }
                                    
                            <SwiperSlide className='get_email_seccion' >
                                <h1>¡Gracias Pepita! </h1>
                                <p>por terminar con éxito esta encuesta. Regalanos un correo donde podamos enviarte tu resultados. </p>
                                <CustomInput inputId='NickNameInput' borderColor='black' textColor='black' inputType='text' labelText='Correo' placeHolderText='Tu correo electronico aquí'></CustomInput>
                                <div>
                                    <input type="checkbox"/>
                                    <label>Acepto tratamientos de datos personales</label>
                                </div>
                                <ConfirmButton toDo={() => mostrarResultado()} text='Enviar' type='button'></ConfirmButton>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    : null

                }


            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default TestPage