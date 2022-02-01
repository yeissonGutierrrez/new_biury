
import QuizFormStyle from "../../styles/pages/QuizPage/QuizFormStyle"

import Footer from '../../components/layout/Footer/Footer'

import LogoBlack from '../../assets/images/LogoBiuryBlack.svg'
import QuizStep1 from "./QuizStep1"
import QuizStep2 from "./QuizStep2"
import QuizStep3 from "./QuizStep3"
import QuizStep4 from "./QuizStep4"
import QuizStep5 from "./QuizStep5"
import Suscribe from "./Suscribe"

function QuizForm() {
    return (
        <div className={QuizFormStyle}>
            {/* <div className="navbar">
                <img src={LogoBlack}/>
                <h1>Quiz</h1>
            </div> */}
            <div className="wrapper">

                
                <Suscribe/>
                <Footer/>
                
            </div>
        </div>
    )
}

export default QuizForm