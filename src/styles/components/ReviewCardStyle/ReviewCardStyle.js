import { style } from "typestyle";

const ReviewCardStyle = style({
    boxSizing: 'border-box',
    paddingTop: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "column",
    width: '90%',
    backgroundColor: 'White',
    height: '380px',
    $nest: {
        '& .review_photo': {
            borderRadius: '50%',
            position: "absolute",
            top: -80
        },
        '& p': {
            padding: '0 40px',
            textAlign: 'center',
            fontFamily: 'CocoGothLight',
            fontSize: '16px'
        },
        '& .review_nombre': {
            fontFamily: 'CocoGothSemiBold',
            fontWeight: 700,
            fontSize: '20px'
        },
        '& .footer': {
            position: "relative",
            boxSizing: 'border-box',
            padding: '25px 0px',
            textAlign: 'center',
            width: '100%',
            $nest: {
                '& .product_image': {
                    position: 'absolute',
                    left: 0,
                    top: -40
                },
                '& span': {
                    fontFamily: 'CocoGothSemiBold',
                    fontWeight: 700,
                    fontSize: '16px'
                }
            }
        }
    }
})

export default ReviewCardStyle