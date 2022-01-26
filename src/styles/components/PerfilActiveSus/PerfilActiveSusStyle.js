import { style } from "typestyle";

const PerfilActiveSusStyle = style({
    width: '40%', 
    margin:  'auto',
    $nest: {
        '& .container': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            $nest: {
                '& .title': {
                    fontFamily: 'GothamBold',
                    fontSize: '48px',
                },
                '& .imagen_container': {
                    width: '170px',
                },
                '& .subtitle': {
                    fontFamily: 'GothamBold',
                    fontSize: '24px',
                },
                '& .price': {
                    fontFamily: 'GothamBold',
                    color: '#797A83'
                },
                '& .description': {
                    textAlign: 'center',
                },
                '& .cancel_sus': {
                    fontFamily: 'GothamBold',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginTop: '-20px',
                }

            }
        }
    }
})

export default PerfilActiveSusStyle