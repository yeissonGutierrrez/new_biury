import React from 'react';
import HowItWorkStyle from '../../styles/pages/HowItWork/HowItWorkStyle';

import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';

import { Link } from 'react-router-dom';

import SuscribeButton from '../../components/SuscribeButton';

import wave from '../../assets/images/HowItWork/wave2.svg';
import wave2 from '../../assets/images/HowItWork/wave3.svg';

import oneBorder from '../../assets/images/HowItWork/1border.svg';
import oneColor from '../../assets/images/HowItWork/1Color.svg';

import twoBorder from '../../assets/images/HowItWork/2border.svg';
import twoColor from '../../assets/images/HowItWork/2Color.svg';

import threeBorder from '../../assets/images/HowItWork/3border.svg';
import threeColor from '../../assets/images/HowItWork/3color.svg';

import fourBorder from '../../assets/images/HowItWork/4border.svg';
import fourColor from '../../assets/images/HowItWork/4color.svg';

import fiveBorder from '../../assets/images/HowItWork/5border.svg';
import fiveColor from '../../assets/images/HowItWork/5color.svg';

import sixBorder from '../../assets/images/HowItWork/6border.svg';
import sixColor from '../../assets/images/HowItWork/6color.svg';

import sevenBorder from '../../assets/images/HowItWork/7border.svg';
import sevenColor from '../../assets/images/HowItWork/7color.svg';
import Question from './Question';

import photo1 from '../../assets/images/HowItWork/Biury_Fotos-06.png';
import photo2 from '../../assets/images/HowItWork/Biury_Fotos-08.png';
import photo3 from '../../assets/images/HowItWork/Biury_Fotos-07.png';

const questions = [
  {
    image: photo1,
    question: '¿QUIÉNES SOMOS?',
    answer:
      'Una comunidad que está revolucionando la industria de la belleza al entregar “PRODUCTOS ESPECTACULARES” a un precio increíble, directamente en tu puerta y el envío es GRATIS.',
    margin: '0 50% 0 0',
  },
  {
    image: photo2,
    question: '¿CUÁNDO ME LLEGA MI BIURYBOX?',
    answer:
      '¡Antes que nada, recuerda que el envío es gratis! · Si realizas tu compra desde el 1ero hasta 15vo día del mes recibirás tu BIURYBOX en los primeros 15 días del mes siguiente. · Si realizas tu compra desde el día 15 hasta el 30 del mes, podrás recibir tu BIURYBOX hasta 30 dias después de tu compra.',
    margin: '-150px 0 0 50%',
  },
  {
    image: photo3,
    question: '¿CÓMO REALIZO EL PAGO?',
    answer:
      'Es superfácil. Solo debes inscribir tu tarjeta en la primera compra, luego los pagos se debitarán automáticamente los primeros días de cada mes.',
    margin: '-150px 50% 0 0',
  },
  {
    image: photo2,
    question: '¿QUÉ RECIBIRÉ EN MI BIURYBOX?',
    answer:
      'No te preocupes. Déjalo en manos de nuestros expertos, simplemente realiza el BIURYQUIZ y sorpréndete con los productos que recibirás.',
    margin: '-150px 0 0 50%',
  },
  {
    image: photo1,
    question: '¿CÓMO PERSONALIZO BIURYBOX?',
    answer:
      'La suscripción mensual tiene un costo de $69.000. Incluye:  · Un BIURYBOX  · Descuentos  · Bonos.  · Acceso a contenido exclusivo · Muchas sorpresas.',
    margin: '-60px 50% 0 0',
  },
  {
    image: photo3,
    question: '¿CUÁNTO VALE LA SUSCRIPCIÓN MENSUAL?',
    answer:
      'La suscripción mensual tiene un costo de $69.000. Incluye:   · Un BIURYBOX · Descuentos · Bonos. · Acceso a contenido exclusivo · Muchas sorpresas.',
    margin: '-150px 0 0 50%',
  },
  {
    image: photo3,
    question: '¿CUÁNDO PUEDO CANCELAR LA SUSCRIPCIÓN?',
    answer:
      'Activa o desactiva tu suscripción en cualquier momento. No hay cláusulas de permanencia, compromisos, ni multas por cancelación.',
    margin: '-150px 50% 0 0',
  },
];

function HowItWork() {
  return (
    <>
      <Navbar></Navbar>
      <div className={HowItWorkStyle}>
        <img className='top-wave' src={wave} />

        <h1 className='top-title'>
          ¿CÓMO FUNCIONA <br /> BIURYBOX?
        </h1>
        <div className='steps-container'>
          <div className='step1'>
            <div className='step '>
              <div className='number'>
                <img className='border' src={oneBorder} />
                <img className='color' src={oneColor} />
              </div>
              <div className='info'>
                <h1>
                  REALIZA EL BIURY<span>QUIZ</span> GRATIS
                </h1>
                <p>
                  Con este quiz fácil y divertido, nuestros expertos definirán
                  cuáles son los mejores productos para ti.
                </p>
              </div>
            </div>
          </div>

          <div className='step2'>
            <div className='step'>
              <div className='number'>
                <img className='border' src={twoBorder} />
                <img className='color' src={twoColor} />
              </div>
              <div className='info'>
                <h1>ACTIVA TU SUSCRIPCIÓN</h1>
                <p>
                  Utiliza cualquier método de pago <br />
                  de manera segura: <br /> <br />
                  · Sin cargos ocultos. <br />· Sin cláusulas de permanencia.
                </p>
              </div>
            </div>
          </div>

          <div className='step3'>
            <div className='step'>
              <div className='info'>
                <h1>
                  ENVÍO GRATIS A <br /> DONDE QUIERAS.
                </h1>
                <p>
                  Recibe tu BIURYBOX en el lugar más <br />
                  cómodo para ti, puede ser tu casa, <br />
                  oficina o dónde nos indiques.
                </p>
              </div>
              <div className='number'>
                <img className='border' src={threeBorder} />
                <img className='color' src={threeColor} />
              </div>
            </div>
          </div>

          <div className='step4'>
            <div className='step'>
              <div className='number'>
                <img className='border' src={fourBorder} />
                <img className='color' src={fourColor} />
              </div>
              <div className='info'>
                <h1>DISFRUTA TUS PRODUCTOS.</h1>
                <p>
                  Cuidar de ti nunca habia sido tan divertido, vive una
                  experiencía única mes a mes con los productos de nuestras{' '}
                  <span>BIURY</span>BOX.
                </p>
              </div>
            </div>
          </div>

          <div className='step5'>
            <div className='step'>
              <div className='number'>
                <img className='border' src={fiveBorder} />
                <img className='color' src={fiveColor} />
              </div>
              <div className='info'>
                <h1>ACCEDE A NUESTRO CONTENIDO</h1>
                <p>
                  Con nuestras asesorías y cursos exclusivos para{' '}
                  <span>BIURY</span>MEMBERS podrás convertirte en un experto.
                </p>
              </div>
            </div>
          </div>

          <div className='step6'>
            <div className='step'>
              <div className='number'>
                <img className='border' src={sixBorder} />
                <img className='color' src={sixColor} />
              </div>
              <div className='info'>
                <h1>
                  RECIBE <br /> DESCUENTOS <br /> Y MÁS
                </h1>
                <p>
                  · Regalos. <br />
                  · Información exclusiva <br />
                  · Invitaciones a eventos. <br />· Guía para ser un experto
                  cosmético
                </p>
              </div>
            </div>
          </div>

          <div className='step7'>
            <div className='step'>
              <div className='info'>
                <h1>VIVE TU EXPERIENCIA</h1>
                <p>
                  Cuéntanos cómo fue tu experiencia de compra y cómo te sientes
                  usando nuestros productos.
                </p>
              </div>
              <div className='number'>
                <img className='border' src={sevenBorder} />
                <img className='color' src={sevenColor} />
              </div>
            </div>
          </div>

          <img className='question-wave' src={wave2} />
          <div className='questions-container'>
            <h1 className='questions-title'>PREGUNTAS FRECUENTES</h1>

            <div className='photo-mobile'>
              <div className='border'></div>
            </div>

            {questions.map((data, index) => {
              return (
                <>
                  <Question
                    key={index}
                    image={data.image}
                    margin={data.margin}
                    Question={data.question}
                    answer={data.answer}
                  />
                </>
              );
            })}

            <div className='button-sus'>
              <SuscribeButton bgColor={'#FF6B63'} textColor={'white'} />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HowItWork;
