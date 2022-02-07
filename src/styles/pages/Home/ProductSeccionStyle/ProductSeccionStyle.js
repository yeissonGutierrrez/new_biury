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
            minHeight: '90vh',
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
                    display: 'grid',
                    width: '80%',
                    margin: 'auto',
                    gap: '50px 15px',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    
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

        '@media screen and (max-width: 1100px) and (min-width: 820px)': {
            $nest: {
                '& .products_container': {
                    $nest: {
                        '& .title': {
                            fontSize: '42px',
                        },
                        '& .subtitle': {
                            fontSize: '22px',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamLight',
                                }
                            }
                        },
                    }
                }

            }
        },

        '@media screen and (max-width: 820px)': {
            $nest: {
                '& .products_container': {
                    '& .title': {
                        textAlign: 'center',
                        margin: '30px 20px',
                        fontSize: '34px',
                    },
                    '& .subtitle': {
                        fontSize: '20px',
                        $nest: {
                            '& span': {
                                fontFamily: 'GothamLight',
                            }
                        }
                    },
                }
            }
        },

        '@media screen and (max-width: 420px) and (min-width: 320px)': {
            $nest: {
                '& .title': {
                    textAlign: 'center',
                    margin: '30px 20px',
                    fontSize: '24px',
                },
            }
        },
    }

})

export default ProductSeccionStyle