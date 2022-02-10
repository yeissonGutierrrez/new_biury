import axios from 'axios';
import config from '../const';
/* 
Esta es una funcionalidad para validar si el usuario esta Autenticado

@setToken Inserta el token del usuario al LoacalStrorage
@LogOut Remueve el token del usuario en el local storage
@isAuntenticated retorna si el usuario esta autenticado BOOL 

*/

const Auth = {};

Auth.SetToken = (token) => {
  localStorage.setItem('biury-token', token);
};

Auth.SetNameUser = (name) => {
  localStorage.setItem('biury-user-name', name);
};

Auth.LogOut = () => {
  localStorage.removeItem('biury-token');
  localStorage.removeItem('biury-user-name');
};

Auth.isAuthenticated = () => {
  return localStorage.getItem('biury-token');
};

Auth.Login = async (data) => {
  try {
    let response = await axios.post(`${config.api_url}auth/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status == 200 || response.status == 201) {
      Auth.SetToken(response.headers.authorization);
      Auth.isAuthenticated();
      Auth.SetNameUser(response.data.usuario.name);
    }

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default Auth;
