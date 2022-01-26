import { style } from "typestyle";

const LoginStyle = style({
    backgroundColor: '#202230',
    height: '100vh',
    padding: '50px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    color: 'white',
    $nest: {
        '& .wave': {
            textAlign: 'center',
            color: '#00CFBE',
            fontSize: '48px',
            fontFamily: 'CocoGothSemiBold'
        },
        '& .info_text': {
            fontFamily: 'CocoGothLight',
            fontSize: '24px',
            marginBottom: '20px',
        },   
        '& a': {
            color: 'white'
        }  
    }
})

export default LoginStyle