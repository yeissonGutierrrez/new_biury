
import QuizFormStyle from "../../styles/pages/QuizPage/QuizFormStyle"

import Footer from '../../components/layout/Footer/Footer'

import LogoBlack from '../../assets/images/LogoBiuryBlack.svg'
import quizLogo from '../../assets/images/Quiz/quizLogo.svg'

import QuizStep1 from "./QuizStep1"
import QuizStep2 from "./QuizStep2"
import QuizStep3 from "./QuizStep3"
import QuizStep4 from "./QuizStep4"
import QuizStep5 from "./QuizStep5"
import QuizStep6 from './QuizStep6'
import Suscribe from "./Suscribe"
import Navbar from "../../components/layout/Navbar/Navbar"
import { Link } from "react-router-dom"
import QuizStep7 from "./QuizStep7"

function QuizForm({setStep, step}) {
    return (
        <div className={QuizFormStyle}>

            <div className="wrapper">
                {
                    step !== 'suscribe'
                    ?
                    <div className="navbar">
                        <Link to={'/'}>
                            <img src={LogoBlack}/>
                        </Link>
                        <img src={quizLogo}/>
                    </div> 
                    : null

                }
                {
                    step === 'step1'
                    ?
                    <>
                        <QuizStep1 setStep={setStep}/>
                    </>
                    : step === 'step2'
                    ? 
                    <>

                    <QuizStep2 setStep={setStep}/>
                    </>
                    : step === 'step3'
                    ?
                    <>
                        <QuizStep3 setStep={setStep}/>
                    </>
                    : step === 'step4'
                    ?
                    <>
                        <QuizStep4 setStep={setStep}/>
                    </>
                    : step === 'step5'
                    ?
                    <>
                        <QuizStep5 setStep={setStep}/>
                    </>
                    : step === 'step6'
                    ? 
                        <QuizStep6 setStep={setStep}/>
                    : step === 'step7'
                    ?
                        <QuizStep7 setStep={setStep}/>
                    : null
                }

                {
                    step === 'suscribe'
                    ?
                    <>
                        <Suscribe/>
                        <Footer/>
                    </>
                    : null
                }
                
            </div>
        </div>
    )
}

export default QuizForm