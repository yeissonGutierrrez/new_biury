import { style } from "typestyle";

const BenefitItemStyle = style({
    position: "relative",
    maxWidth: '360px',
    margin: '0 40px',
    $nest: {
        '& img': {
            borderRadius: '50%',
            boxShadow: '0px 0px 14px 1px rgba(0,0,0,0.42)',
        },
        '& .list_item__info': {
            maxWidth: '100%',
            $nest: {
                '& li': {
                    width: '90%',
                    margin: 'auto',
                    fontFamily: 'Montserrat'
                }
            }   
        },
        '& .banner': {
            position: "absolute",
            padding: '20px 30px',
            top: '-30px',
            $nest: {
                '& .banner_text': {
                    display: 'block',
                    color: 'white',
                    fontFamily: 'Montserrat',
                    fontSize: '25px',
                    textAlign: "center"
                }
            }
        }
    }
})

export default BenefitItemStyle