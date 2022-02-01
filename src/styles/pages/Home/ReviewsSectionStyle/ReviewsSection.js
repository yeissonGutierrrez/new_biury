import { style } from "typestyle";



const ReviewsSectionStyle = style({
    backgroundColor: '#242535',
    padding: '40px 0',
    height: '100vh',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    $nest: {
        '& .title': {
            paddingTop: '120px',
            color: '#67FF6C',
            zIndex: 2,
            $nest: {
                '& span': {
                    color: '#B3F12D'
                }
            }
        },
        '& .subtitle': {
            color: 'white',
            margin: 0,
            fontSize: '18px',
            fontFamily: 'CocoGothLight',
            fontWeight: 400,
            $nest: {
                '& span': {
                    fontWeight: 700,
                    fontFamily: 'CocoGothSemiBold',
                }
            }
        },
        '& button': {
            fontSize: '20px',
            fontFamily: 'GothamLight',
            backgroundColor: '#FF7065',
            border: 'none',
            padding: '20px',
            margin: 'auto',
            marginBottom: '280px',
            $nest: {
                '& span': {
                    fontFamily: 'GothamBold',
                }
            }
        }
    }
})

export default ReviewsSectionStyle