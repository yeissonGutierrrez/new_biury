import { style } from "typestyle";

const RegisterStyle = style({
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
            color: '#16E5CB'
        },
        '& a': {
            textDecoration: 'none',
            color: 'white',
            fontFamily: 'CocoGothSemiBold',
            fontWeight: 700,
        },
        '& .info_text': {
            fontFamily: 'CocoGothLight',
            textAlign: 'center',
            $nest: {
                '& span': {
                    fontFamily: 'CocoGothSemiBold',
                    fontWeight: 900,   
                }
            }
            
        }
    }
})

export default RegisterStyle