import { style } from "typestyle";

const MembershipCardStyle = style({
    // position: 'absolute',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '150px',
    boxSizing: 'border-box',
    height: '100%',
    width: '400px',
    background: 'white',
    color: 'black',
    textAlign: 'center',
    $nest: {
        '& .title': {
            fontFamily: 'GothamBold',
            fontSize: '32px',
            marginRight: '45%',
            lineHeight: 0,
        },
        '& .outlined': {
            color: '#fff',
            position: "absolute",
            top: 180,
            lineHeight: 0,
            marginLeft: '25%',
            fontSize: '50px',
            textShadow: '#2B96F9 0px 0px 2px,   #2B96F9 0px 0px 2px,   #2B96F9 0px 0px 2px, #2B96F9 0px 0px 2px,   #2B96F9 0px 0px 2px,   #2B96F9 0px 0px 2px',
        },
        '& .price': {
            fontFamily: 'GothamBold',
            fontSize: '26px',
        },
        '& .promo_text': {
            fontFamily: 'GothamMediumItalic',
            lineHeight: 1.3
        },
        '& hr': {
            position: "absolute",
            top: '55%',
            right: '-73%',
            width: '150%',
            transform: 'rotate(90deg)',
            border: '0.2px solid #A6A7AC'
        },
        '& .promo_text': {
            padding: '0 50px'
        },
        '& button': {
            padding: '10px 50px',
            marginBottom: '30px',
            backgroundColor: '#202230',
            color: 'white',
            fontFamily: 'CocoGoth',
            fontSize: '18px',
            fontWeight: 700,
            borderRadius: '5px'
            
        }
    }
})

export default MembershipCardStyle