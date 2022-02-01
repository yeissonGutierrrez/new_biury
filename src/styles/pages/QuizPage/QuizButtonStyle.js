import { style } from "typestyle";

const QuizButtonStyle = style({
    $nest: {
        '& button': {
            padding: '10px',
            textTransform: 'capitalize',
            minHeight: '90px',
            width: '250px',
            fontFamily: 'GothamBold',
            fontSize: '18px',
            border: 'solid 10px blue',
            borderTop: 'none',
            borderRight: 'none'
        }
    }
})

export default QuizButtonStyle