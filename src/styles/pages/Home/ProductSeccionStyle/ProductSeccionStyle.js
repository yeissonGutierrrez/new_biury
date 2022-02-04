import { style } from "typestyle";

import cursorImage from '../../../../assets/images/heroBannerimage2.png';

const ProductSeccionStyle = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'none',
    paddingBottom: '200px',
    $nest: {
        '& .products_container': {
            width: '100%',
            height: '90vh',
            $nest: {
                '& .title': {
                    textAlign: 'center',
                    marginTop: '100px',
                    color: '#FF7A6C',
                    $nest: {
                        '& span': {
                            color: '#BC49EA'
                        }
                    }
                },
                '& .subtitle': {
                    marginTop: '20px',
                    fontFamily: 'GothamLight',
                    textAlign: 'center',
                    lineHeight: 1.3,
                    margin: 0,
                    marginBottom: '80px',
                    fontSize: '36px',
                    $nest: {
                        '& span': {
                            fontFamily: 'GothamBold',
                        }
                    }
                },
                '& .productsContain': {
                    display: 'flex',
                    justifyContent: 'space-evenly'
                },
            }
        },
        '& button': {
            fontSize: '20px',
            fontFamily: 'GothamLight',
            backgroundColor: '#00FF58',
            border: 'none',
            padding: '20px',
            margin: '90px auto',
            $nest: {
                '& span': {
                    fontFamily: 'GothamBold',
                }
            }
        },
        '& .wave': {
            position: 'absolute',
            bottom: 0,
        },
    }

})

export default ProductSeccionStyle