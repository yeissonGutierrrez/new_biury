import { useState } from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Navbar from '../../components/layout/Navbar/Navbar'
import QuizPageStyle from '../../styles/pages/QuizPage/QuizPageStyle'
import QuizForm from './QuizForm'
import QuizRegister from './QuizRegister'




function QuizPage () {
    const [step, setStep] = useState('register');
    return (
        <>
        {
            step === 'register'
            ?
            <>
                <Navbar></Navbar>
                <div className={QuizPageStyle}>
                    <QuizRegister setStep={setStep}/>
                </div>
            </>
            : 
            <QuizForm setStep={setStep} step={step}/> 
        }
        </>
    )
}

export default QuizPage