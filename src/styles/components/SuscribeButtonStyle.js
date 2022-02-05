import { style } from "typestyle";

const SuscribeButtonStyle = style(  {
    position: 'relative',
    width: '100%',
    height: '90px',
    cursor: 'pointer',
    margin: 'auto',
    $nest: {
        '& button': {
            position: 'absolute',
            top: -8,
            left: -5,
            width: '100%',
            height: '105%',
            zIndex: 1,
            border: 'none',
            backgroundColor: '#FF97C6',
            fontFamily: 'GothamBold',
            fontSize: '34px',
        },
        '& .border': {
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            border: 'solid black 3px',
            zIndex: 1
        }
    }
})

export default SuscribeButtonStyle