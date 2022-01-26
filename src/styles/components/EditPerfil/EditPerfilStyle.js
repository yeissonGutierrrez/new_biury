import { style } from "typestyle";

const EditPerfilStyle = style({
    width: '40%', 
    margin:  '80px auto',
    $nest: {
        '& .form_container': {
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            width: '100%', 
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
        }
    }
})

export default EditPerfilStyle