import { style } from "typestyle";

const QuizButtonStyle = style({
    position: 'relative',
    $nest: {
        '& button': {
            cursor: 'pointer',
            padding: '10px',
            textTransform: 'capitalize',
            minHeight: '90px',
            width: '250px',
            fontFamily: 'GothamBold',
            fontSize: '18px',
            border: 'solid 10px blue',
            borderTop: 'none',
            borderRight: 'none'
        },
        '& .border': {
            position: 'absolute',
            top: -15,
            right: -10,
            border: 'solid black 5px',
            width: '100%',
            height: '100%'
        }
    }
})

export default QuizButtonStyle