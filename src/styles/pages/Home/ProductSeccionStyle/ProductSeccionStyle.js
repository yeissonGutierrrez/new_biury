import { style } from "typestyle";

import cursorImage from '../../../../assets/images/heroBannerimage2.png';

const ProductSeccionStyle = style({
    // position: 'relative',
    cursor: 'none',
    $nest: {
        '& .products_container': {
            cursor: `url(${cursorImage})`,
            display: 'flex',
            // position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: "column",
            width: '100%',
            height: '100vh',
            $nest: {
                '& .title': {
                    margin: '20px 0',
                    fontFamily: 'cocoGoth',
                    fontSize: '36px',
                    lineHeight: 1,
                    $nest: {
                        '& span': {
                            color: '#BC49EA'
                        }
                    }
                },
                '& .subtitle': {
                    margin: 0,
                    marginBottom: '60px',
                    fontFamily: 'cocoGothLight',
                    fontSize: '18px',
                    lineHeight: 1
                },
                '& .productsContain': {
                    display: 'flex',
                },
            }
        },
        
    }

})

export default ProductSeccionStyle