import { style } from "typestyle";

const PerfilStyle = style({
    padding: '50px',
    marginTop: '100px',
    $nest: {
        '& .title': {
            fontFamily: 'GothamBold'
        },
        '& .menu_list': {
            display: 'flex',
            width: '80%',
            margin: '30px auto',
            borderBottom: 'solid 1px black',
            $nest: {
                '& .menu_button': {
                    position: 'relative', 
                    cursor: 'pointer',
                    paddingBottom: '20px', 
                    listStyle: 'none', 
                    paddingRight: '50px',
                    $nest: {
                        '& hr': {
                            position: 'absolute', 
                            bottom: -12, 
                            width: '50%', 
                            border: '3px solid #9926F7', 
                            borderRadius: '5px',
                            marginLeft: '10px'
                        }
                    }
                }
            }
        }
    }
})

export default PerfilStyle