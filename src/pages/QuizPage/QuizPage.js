import React, { useState } from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Navbar from '../../components/layout/Navbar/Navbar'
import QuizPageStyle from '../../styles/pages/QuizPage/QuizPageStyle'
import QuizForm from './QuizForm'
import QuizRegister from './QuizRegister'




function QuizPage () {

    return (
        <>
        {/* <Navbar></Navbar>
        <div className={QuizPageStyle}>
            <QuizRegister/>
        </div> */}
        <QuizForm/>
        </>
    )
}

export default QuizPage