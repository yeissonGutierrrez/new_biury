import { style } from "typestyle";

const QuestionStyle = style({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    $nest: {
        '& .photo': {
            margin: 'auto',
        },
        '& .myAccordionHeader': {
            backgroundColor: '#A125F4',
            border: 'solid 2px white',
            height: '100px',
            $nest: {
                '& h3': {
                    textAlign: 'center',
                    margin: 'auto',
                    color: 'white',
                    fontFamily: 'GothamBold',
                    fontSize: '30px',
                }
            }
        },
        '& .myAccordionContent': {
            backgroundColor: '#A125F4',
            border: 'solid 2px white',
            borderTop: 'none',
            $nest: {
                '& p': {
                    color: 'white',
                    fontFamily: 'GothamLight',
                    fontSize: '20px',
                    textAlign: 'center',
                }
            }
        },
    }
})

export default QuestionStyle