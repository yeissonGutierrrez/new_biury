import React, { useState } from 'react'
import EditPerfilStyle from '../../styles/components/EditPerfil/EditPerfilStyle'
import ConfirmButton from '../ConfirmButton/ConfirmButton'


function EditPerfil() {
    return (
        <div className={EditPerfilStyle}>
        <h1 style={{fontFamily: 'GothamBold'}}>Editar Perfil</h1>
        <div className='form_container'>
            <label>Nombre usuario</label>
            <input></input>
            
            <label>Correo Electronico</label>
            <input type='email' style={{padding: '10px 30px', fontSize: '18px', fontWeight: '400', outline: 'none'}}></input>
            
            <label>Cambiar contraseña</label>
            <input type='password' style={{padding: '10px 30px', fontSize: '18px', fontWeight: '400', outline: 'none'}}></input>
            
            <label>Confirmar nueva contraseña</label>
            <input type='password' style={{padding: '10px 30px', fontSize: '18px', fontWeight: '400', outline: 'none'}}></input>

            {/* <label>Nombre usuario</label>
            <select style={{padding: '10px 30px',fontSize: '18px', outline: 'none'}} name="select">
                <option value="value1">Bogota</option>
                <option value="value2" selected>Pereira</option>
                <option value="value3">Cali</option>
            </select> */}

            <ConfirmButton width='335px' type='button' text='Guardar cambios'></ConfirmButton>
        </div>
        </div>
    )
}

export default EditPerfil