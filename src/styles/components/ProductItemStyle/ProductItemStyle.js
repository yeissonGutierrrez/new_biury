import { style } from "typestyle";

const ProductItemStyle = style({
    position: "relative",
    width: '260px',
    margin: '0 50px',
    cursor: 'pointer',
    $nest: {
        '& .item_image': {
            position: "relative",
            borderRadius: '50%',
            boxShadow: '0px 0px 14px 1px rgba(0,0,0,0.42)',
        },
        '& .item_title': {
            display: 'block',
            textAlign: "center",
            fontFamily: 'cocoGoth',
            margin: '20px 0'
        },
        '& .stars': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxHeight: '200px',
        },
        
        '& .hover_contain': {
            boxSizing: 'border-box',
            overflow: "hidden",
            position: "absolute",
            borderRadius: '50%',
            padding: '50px 30px',
            width: '100%',
            height: '100%',
            top: 0,
            textAlign: "center",
            $nest: {
                '& h4': {
                    fontFamily: 'CocoGothSemiBold',
                    color: 'white',
                    fontSize: '24px',
                    margin: 0
                },
                '& p': {
                    fontFamily: 'CocoGothLight',
                    fontSize: '17px'
                },
            }
        }
    }
})

export default ProductItemStyle