import { style } from "typestyle";

const ProductItemStyle = style({
    position: "relative",
    width: '260px',
    margin: 'auto',
    cursor: 'pointer',
    $nest: {
        '& .item_image': {
            position: "relative",
            display: 'flex',
            justifyContent: 'center',
            padding: '50px 0',
            boxSizing: 'border-box',
            borderRadius: '50%',
            height: '260px',
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
        },

        '@media screen and (max-width: 780px)': {
            width: '200px',
            $nest: {
                '& .item_image': {
                    height: '220px',
                },
            }
        },


    },
})

export default ProductItemStyle