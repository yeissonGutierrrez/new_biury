import React from 'react'
import BillingInformationStyle from '../../styles/components/BillingInformation/BillingInformationStyle'
import ConfirmButton from '../ConfirmButton/ConfirmButton'

function BillingInformation () {
    return (
        <div className={BillingInformationStyle}>
        <h1 className='title'>Información facturación</h1>
        <div className='form_container'>
            <label>Dirección</label>
            <input></input>
            
            <label>Pais</label>
            <select style={{padding: '10px 30px',fontSize: '18px', outline: 'none'}} name="select">
                <option value="value1">Bogota</option>
                <option value="value2" selected>Pereira</option>
                <option value="value3">Cali</option>
            </select>
            
            <label>Ciudad</label>
            <select style={{padding: '10px 30px',fontSize: '18px', outline: 'none'}} name="select">
                <option value="value1">Bogota</option>
                <option value="value2" selected>Pereira</option>
                <option value="value3">Cali</option>
            </select>

            <label>Código Postal</label>
            <input></input>

            <label>Télefono</label>
            <input></input>

            <ConfirmButton width='335px' type='button' text='Guardar cambios'></ConfirmButton>
        </div>
        </div>
    )
}

export default BillingInformation