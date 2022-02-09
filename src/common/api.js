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
  response = axios.get(`${config.api_url}${url}`, {
    headers: {
      Authorization: token,
    },
  });

  return response;
};

/* 
 Method POST retorna el response de la peticion
 @url recibe la ruta faltante ej: profile/user
 @data recibe el objeto para enviar en el Body ej: {user: "user ejemplo", password: "password"}
*/
Api.post = (url, data) => {
  response = axios.get(`${config.api_url}${url}`, data, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });

  return response;
};

/* 
 Method PUT retorna el response de la peticion
 @url recibe la ruta faltante ej: profile/user
 @data recibe el objeto para enviar en el Body ej: {user: "user ejemplo", password: "password"}
*/
Api.patch = (url, data) => {
  response = axios.get(`${config.api_url}${url}`, data, {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });

  return response;
};

/* 
 Method Get retorna el response de la peticion
 @url recibe la ruta faltante ej: profile/user
*/
Api.delete = (url) => {
  response = axios.get(`${config.api_url}${url}`, {
    headers: {
      Authorization: token,
    },
  });

  return response;
};

export default Api;
