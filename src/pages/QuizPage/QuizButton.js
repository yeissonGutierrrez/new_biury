import QuizButtonStyle from "../../styles/pages/QuizPage/QuizButtonStyle"

function QuizButton({question, borderColor, bgColor, width}) {
    return (
        <div className={`${QuizButtonStyle}`}>
            <button style={{borderColor: borderColor, backgroundColor: bgColor, width: width}}>
                {question}
            </button>
        </div>
    )
}
export default QuizButton