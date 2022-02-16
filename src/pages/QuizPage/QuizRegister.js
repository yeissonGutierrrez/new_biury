import wave from '../../assets/images/Quiz/waveQuizGreen.svg';
import waveMobile from '../../assets/images/Quiz/waveGreenMobile.svg';
import { useState } from 'react';
import validationService from '../../helpers/validationFields';

function QuizRegister({ setStep }) {
  const [dataForm, setDataForm] = useState({
    email: '',
    nickName: '',
  });

  const [fieldsRequired, setFieldsRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const nextStep = () => {
    setFieldsRequired(false);
    setEmailRequired(false);
    if (dataForm.email == '' || dataForm.nickName == '') {
      setFieldsRequired(true);
      return;
    }
    if (!validationService.validationEmail(dataForm.email)) {
      setEmailRequired(true);
      return;
    }
    localStorage.setItem('nickName', dataForm.nickName);
    localStorage.setItem('emailQuiz', dataForm.email);
    localStorage.setItem('step-quiz', 'step1');
    setStep('step1');
  };

  const textDanger = {
    color: 'red',
    marginTop: '15px',
  };

  return (
    <>
      <div className='QuizRegister'>
        <div className='wave'>
          <img src={wave} />
        </div>
        <h3>
          ¡ESTÁS A POCOS PASOS <br /> DE SER USUARIO DE BUIRY <span>CLUB</span>!
        </h3>
        <div className='info'>
          <div className='circle'>
            <span className='num'>1</span>
            <div className='circle_color'></div>
            <div className='circle_border'></div>
          </div>

          <div className='text'>
            <h1>REALIZA TU QUIZ GRATIS</h1>
            <p>
              {' '}
              <span> CON SOLO 8 PREGUNTAS </span> NUESTROS EXPERTOS <br />{' '}
              PERSONALIZARÁN TUS PRODUCTOS.
            </p>
          </div>
        </div>
        <div className='inputs_wrapper'>
          <div className='input'>
            <label>
              ¿DÓNDE QUIERES RECIBIR <br /> TUS RESULTADOS?
            </label>
            <input
              placeholder='Correo Electrónico'
              type='email'
              name='email'
              className='footer_input'
              value={dataForm.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className='input'>
            <label>¿CÓMO TE DICEN TUS AMIGOS?</label>
            <input
              placeholder='Nickname'
              type='email'
              name='nickName'
              className='footer_input'
              value={dataForm.nickName}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        {fieldsRequired == true ? (
          <p style={textDanger}>Todos los campos son requeridos</p>
        ) : null}
        {emailRequired == true ? (
          <p style={textDanger}>Verifique su correo electronico</p>
        ) : null}

        <button onClick={() => nextStep()}>SIGUIENTE</button>
      </div>
    </>
  );
}

export default QuizRegister;
