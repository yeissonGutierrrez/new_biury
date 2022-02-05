import { useState } from "react"
import QuizButtonStyle from "../../styles/pages/QuizPage/QuizButtonStyle"

function QuizButton({question, borderColor, bgColor, width}) {
    const [hover, sethover] = useState(false);
    return (
        <div className={`${QuizButtonStyle}`}>
            <button onClick={() => sethover(!hover)} style={{borderColor: borderColor, backgroundColor: bgColor, width: width}}>
                {question}
            </button>
            {
                hover
                ?
            <div onClick={() => sethover(!hover)} className="border"></div>
                : null
            }
        </div>
    )
}
export default QuizButton