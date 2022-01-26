import React from 'react'
import CustomInputStyle from '../../styles/components/CustomInput/CustomInputStyle'


function CustomInput ({labelText, placeHolderText, inputType, inputId, borderColor, textColor}) {
    return (
    <div className={CustomInputStyle}>
        <label>{labelText}</label>
        <div className='input_style'>
            {
                inputType === 'text'
                ?
                    <input id={`${inputId}`} style={{borderColor: borderColor, color: textColor}} type='text'></input>
                : null
            }
            {
                inputType === 'email'
                ?
                    <input id={`${inputId}`} type='email'></input>
                : null
            }
            {
                inputType === 'password'
                ?
                    <input id={`${inputId}`} type='password'></input>
                : null
            }
            <span>{placeHolderText}</span>
        </div>
    </div>
    )
}

export default CustomInput