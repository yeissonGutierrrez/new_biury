import React from 'react'
import { Link } from 'react-router-dom'
import ConfirmButtonStyle from '../../styles/components/ConfirmButton/ConfirmButtonStyle'

function ConfirmButton({text, toDo, type, width}) {
    return (
        <>
            {
                type === 'button'
                ?
                <button onClick={toDo} style={{width: width}} id='email_login_button' className={ConfirmButtonStyle}>
                    {text}
                    <i className='arrow'></i>
                </button>
                : null
            }
            {
                type === 'link'
                ?
                <button onClick={toDo} id='email_login_button' className={ConfirmButtonStyle}>
                    {text}
                    <i className='arrow'></i>
                </button>
                : null
            }
        </>
    )
}

export default ConfirmButton