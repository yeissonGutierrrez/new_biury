import axios from 'axios'
/* 
Esta es una funcionalidad para validar si el usuario esta Autenticado

@Login Inserta el token del usuario al LoacalStrorage
@LogOut Remueve el token del usuario en el local storage
@isAuntenticated retorna si el usuario esta autenticado BOOL 

*/

Auth = () => {
    const Login = (token) => {
        localStorage.setItem('studybuddy-token', token);
      }
  
      const LogOut = () => {
        localStorage.removeItem('studybuddy-token');
      }
  
      const isAuthenticated = () => {
        return localStorage.getItem('studybuddy-token');
      };

      return {
        Login,
        LogOut,
        isAuthenticated,
      };
};

export default new Auth();