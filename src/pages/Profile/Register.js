import React, { useState, useEffect } from 'react';
import facebookIcon from '../../assets/images/Profile/buttonFacebookIcon.svg';
import validationService from '../../helpers/validationFields';
import Auth from '../../common/auth';
import Api from '../../common/api';
import { options } from 'toastr';

function Register({ setState }) {
  const [option, setoption] = useState('register');

  //consts Register and Login
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const [faildField, setFaildFiels] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(null);
  const [errorregister, setErrorRegister] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [loadinFormRegister, setLoadingFormRegister] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);

  //const cities
  const [cities, setCities] = useState([]);

  //Evalua el cambio de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == 'setName') {
      let val = validationService.validName(value);
      if (val || value == '') {
        setName(value);
      }
    }

    if (name == 'setLastName') {
      let val = validationService.validName(value);
      if (val || value == '') {
        setLastName(value);
      }
    }

    if (name == 'setEmail') {
      //let val = validationService.validationEmail(value);
      setEmail(value);
    }

    if (name == 'setPassword') {
      //let val = validationService.validationEmail(value);
      setPassword(value);
    }

    if (name == 'setAcceptTerms') {
      setAcceptTerms(e.target.checked);
    }

    if (name == 'setConfirmPassword') {
      setConfirmPassword(value);
    }
  };

  //Function onClick to register or login
  const onClick = async () => {
    setWrongEmail(false);
    setFaildFiels(false);
    setErrorRegister(false);
    setPasswordMatch(false);

    if (option == 'register') {
      if (name == '' || lastName == '' || password == '' || email == '') {
        setFaildFiels(true);
        return;
      }

      if (!acceptTerms || acceptTerms == null) {
        setAcceptTerms(false);
        return;
      }

      if (confirmPassword != password) {
        setPasswordMatch(true);
      }

      setLoadingFormRegister(true);
      const resp = await Auth.Login({ email, password });

      if (resp && (resp.status == 200 || resp.status == 201)) {
        setState('logined');
        setLoadingFormRegister(false);
      } else {
        setErrorRegister(true);
        setLoadingFormRegister(false);
      }
    } else {
      if (password == '' || email == '') {
        setFaildFiels(true);
        return;
      }
      if (!validationService.validationEmail(email)) {
        setWrongEmail(true);
        return;
      }
      setLoadingFormRegister(true);
      const resp = await Auth.Login({ email, password });

      if (resp && (resp.status == 200 || resp.status == 201)) {
        setState('logined');
        setLoadingFormRegister(false);
      } else {
        setErrorLogin(true);
        setLoadingFormRegister(false);
      }
    }
  };

  //Get cities to input select
  const getCities = async () => {
    let resp = await Api.get('cities');
    if (resp.status == 200 || resp.status == 201) {
      setCities(resp.data.data);
    }
  };

  //Conts Form BiuryBox

  useEffect(() => {
    if (cities.length == 0) {
      getCities();
    }
  }, []);

  return (
    <>
      <h1 className='title'>
        PERFIL BIURY<span>CLUB</span>
      </h1>

      <h1 className='seccion-title2'>1. CREA UNA CUENTA O INICIA SESIÓN.</h1>

      <div className='options-login'>
        <h3
          onClick={() => setoption('register')}
          style={{
            borderBottom: option === `register` ? '#242535 solid 3px' : '',
          }}
        >
          INSCRIBIRSE
        </h3>
        <hr />
        <h3
          onClick={() => setoption('login')}
          style={{
            borderBottom: option === `login` ? '#242535 solid 3px' : '',
          }}
        >
          INICIA SESIÓN
        </h3>
      </div>

      {option === 'register' ? (
        <div className='form'>
          <div className='two-inputs'>
            <label>
              Nombre
              <input
                type='text'
                name='setName'
                onChange={handleChange}
                value={name}
              ></input>
            </label>
            <label>
              Apellido
              <input
                type='text'
                name='setLastName'
                onChange={handleChange}
                value={lastName}
              ></input>
            </label>
          </div>
          <div className='one-input'>
            <label>
              Correo electrónico
              <input
                type='text'
                name='setEmail'
                onChange={handleChange}
                value={email}
              ></input>
            </label>
          </div>
          {wrongEmail == true ? (
            <p className='danger-text'>
              Por favor verifique su correo electrónico
            </p>
          ) : null}
          <div className='one-input'>
            <label>
              Contraseña
              <input
                type='text'
                name='setPassword'
                onChange={handleChange}
                value={password}
              ></input>
            </label>
          </div>
          <div className='one-input'>
            <label>
              Confirmar Contraseña
              <input
                type='text'
                name='setConfirmPassword'
                onChange={handleChange}
                value={confirmPassword}
              ></input>
            </label>
          </div>
          {passwordMatch == true ? (
            <p className='danger-text'>Las contraseña no coinciden</p>
          ) : null}
          {faildField == true ? (
            <p className='danger-text'>Todo los campos son requeridos</p>
          ) : null}
          <div className='checkout'>
            <label>
              He leído y acepto términos y condiciones
              <input
                type='checkbox'
                name='setAcceptTerms'
                onChange={handleChange}
                value={acceptTerms}
              ></input>
            </label>
            {acceptTerms == false ? (
              <p className='danger-text'>
                Debe aceptar los terminos y condiciones
              </p>
            ) : null}
            <label>
              Quiero recibir información
              <input type='checkbox'></input>
            </label>
          </div>
          {errorregister == true ? (
            <p className='danger-text'>
              A ocurrido un problema intentelo de nuevo
            </p>
          ) : null}
          <div className='buttons-wrapper'>
            <button disabled={loadinFormRegister} onClick={onClick}>
              {loadinFormRegister ? 'ENVIANDO' : 'CONTINUAR'}
            </button>

            <button className='facebook'>
              INICIAR SESIÓN USANDO FACEBOOK
              <img src={facebookIcon} />
            </button>

            <button className='google'>INICIAR SESIÓN USANDO GOOGLE</button>
          </div>
        </div>
      ) : option === 'login' ? (
        <div className='form'>
          <div className='one-input'>
            <label>
              Correo electrónico
              <input
                type='text'
                name='setEmail'
                onChange={handleChange}
                value={email}
              ></input>
            </label>
          </div>
          {wrongEmail == true ? (
            <p className='danger-text'>
              Por favor verifique su correo electrónico
            </p>
          ) : null}
          <div className='one-input'>
            <label>
              Contraseña
              <input
                type='text'
                name='setPassword'
                onChange={handleChange}
                value={password}
              ></input>
            </label>
          </div>
          {faildField == true ? (
            <p className='danger-text'>
              El correo electrónico y la contraseña son requerido
            </p>
          ) : null}
          {errorLogin == true ? (
            <p className='danger-text'>
              Correo electrónico o contraseña incorrecta
            </p>
          ) : null}

          <div className='buttons-wrapper'>
            <button disabled={loadinFormRegister} onClick={onClick}>
              {loadinFormRegister ? 'ENVIANDO' : 'CONTINUAR'}
            </button>

            <button className='facebook'>
              INICIAR SESIÓN USANDO FACEBOOK
              <img src={facebookIcon} />
            </button>

            <button className='google'>INICIAR SESIÓN USANDO GOOGLE</button>
          </div>
        </div>
      ) : null}

      <h1 className='seccion-title2'>
        2. ¿A DÓNDE QUIERES QUE LLEGUE TU BIURYBOX?
      </h1>
      <div className='form'>
        <div className='one-input'>
          <label>
            Nombre Completo
            <input type='text'></input>
          </label>
        </div>

        <div className='one-input'>
          <label>
            Correo electrónico
            <input type='text'></input>
          </label>
        </div>

        <div className='one-input'>
          <label>
            Dirección 1<input type='text'></input>
          </label>
        </div>

        <div className='one-input'>
          <label>
            Dirección 2<input type='text'></input>
          </label>
        </div>

        <div className='two-inputs'>
          <label>
            Ciudad
            <select type='text'>
              {cities.map((data) => {
                return <option key={data.id}>{data.name}</option>;
              })}
            </select>
          </label>
          <label>
            Departamento
            <input type='text'></input>
          </label>
        </div>

        <div className='two-inputs'>
          <label>
            Teléfono/Célular
            <input type='text'></input>
          </label>
        </div>

        <div className='buttons-wrapper'>
          <button>CONTINUAR</button>
        </div>
      </div>

      <h1 className='seccion-title2'>3. INGRESA INFORMACIÓN DE FACTURACIÓN</h1>

      <div className='form'>
        <div className='one-input'>
          <label>
            ¿Tienes un código de descuento?
            <input type='text'></input>
          </label>
        </div>

        <div className='info'>
          <span>Sutotal (1 Elemento)</span>
          <span>$ 0.0</span>
        </div>

        <div className='info'>
          <span>Descuento atractivo (35% descuento)</span>
          <span>$ 0.0</span>
        </div>

        <div className='info'>
          <span>Envío y manejo</span>
          <span>$ 0.0</span>
        </div>

        <div className='info'>
          <span>Impuesto (Calculado al final de la compra)</span>
          <span>$ 0.0</span>
        </div>

        <hr />

        <div className='info'>
          <span className='bold'>Total</span>
          <span>$ 0.0</span>
        </div>

        <div className='buttons-wrapper'>
          <button>CONTINUAR</button>
        </div>
      </div>
    </>
  );
}

export default Register;
