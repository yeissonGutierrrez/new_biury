import axios from 'axios';
import config from '../const';

/* 
Esto permitira llamar los metodos desde cualquier parte de la aplicacion
*/

const token = localStorage.getItem('biury-token');

const Api = {};

/* 
 Method Get retorna el response de la peticion
 @url recibe la ruta faltante ej: profile/user
*/
Api.get = async (url) => {
  try {
    response = axios.get(`${config.api_url}${url}`, {
      headers: {
        Authorization: token,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

/* 
 Method POST retorna el response de la peticion
 @url recibe la ruta faltante ej: profile/user
 @data recibe el objeto para enviar en el Body ej: {user: "user ejemplo", password: "password"}
*/
Api.post = (url, data) => {
  try {
    response = axios.get(`${config.api_url}${url}`, data, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

/* 
 Method PUT retorna el response de la peticion
 @url recibe la ruta faltante ej: profile/user
 @data recibe el objeto para enviar en el Body ej: {user: "user ejemplo", password: "password"}
*/
Api.patch = (url, data) => {
  try {
    response = axios.get(`${config.api_url}${url}`, data, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

/* 
 Method Get retorna el response de la peticion
 @url recibe la ruta faltante ej: profile/user
*/
Api.delete = (url) => {
  try {
    response = axios.get(`${config.api_url}${url}`, {
      headers: {
        Authorization: token,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default Api;
