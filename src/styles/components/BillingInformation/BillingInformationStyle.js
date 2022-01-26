import { style } from "typestyle";

const BillingInformationStyle = style({
    margin:  '80px auto',
    $nest: {
        '& .form_container': {
            width: '40%', 
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            margin: 'auto',
            $nest: {
                '& label': {
                    fontFamily: 'GothamBold', 
                    color: 'black', 
                    fontWeight: 700, 
                    fontSize: '18px', 
                    margin: '20px 30px',
                },
                '& input': {
                    padding: '10px 30px', 
                    fontSize: '18px', 
                    fontWeight: '400', 
                    outline: 'none',
                }
            }
        },
        '& .title': {
            fontSize: '48px',
            textAlign: 'center'
        }
    }
})

export default BillingInformationStyle