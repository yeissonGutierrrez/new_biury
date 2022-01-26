import { style } from "typestyle";



const ReviewsSectionStyle = style({
    backgroundColor: '#202230',
    padding: '40px 0',
    height: '100vh',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    $nest: {
        '& .title': {
            color: 'white',
            fontSize: '48px',
            fontFamily: 'CocoGothSemiBold',
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
    }
})

export default ReviewsSectionStyle