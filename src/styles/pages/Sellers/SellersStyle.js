import { style } from "typestyle";

import bgHeroImage from '../../../assets/images/Sellers/bgHeroImageSellers.png'


const SellersStyle = style({
    $nest: {
        '& .hero-image': {
            backgroundImage: `url(${bgHeroImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            background: 'red',
            height: '100vh',
            marginTop: '100px',
            $nest: {
                '& .wave': {
                    position: 'absolute',
                    bottom: 0
                },
            }
        },
        '& .main-wrapper': {
            $nest: {
                '& .main': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    $nest: {
                        '& .title': {
                            fontFamily: 'GothamBold',
                            fontSize: '85px',
                        },
                        '& .line': {
                            width: '40%',
                        },
                        '& .pharagrap': {
                            fontFamily: 'GothamLight',
                            fontSize: '35px',
                            textAlign: 'center',
                        },
                        '& .best-sellers-month': {
                            width: '90%',
                            margin: '100px 0',
                            $nest: {
                                '& .month-title': {
                                    margin: '50px 0'
                                },
                                '& .products-container': {
                                    display: 'grid',
                                    gridTemplateColumns: '280px 280px 280px 280px',
                                    gridGap: '100px 50px',
                                    marginBottom: '200px',
                                }
                            }
                        },
                        '& .brands-title': {
                            fontFamily: 'GothamBold',
                            fontSize: '52px',
                            margin: '100px 0',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamLight',
                                }
                            }
                        },

                        '& .brands-wrapper': {
                            width: '80%',
                            display: 'grid',
                            gap: '100px 0',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            $nest: {
                                '& img': {
                                    width: '60%',
                                    margin: 'auto'
                                }
                            }
                        }
                    }
                },
            },
        },
        '& .reviews-seccion': {
            position: 'relative',
            marginTop: '300px',
            backgroundColor: '#242535',
            padding: '40px 0',
            paddingBottom: '200px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            $nest: {
                '& .reviews-info': {
                    color: 'white',
                    marginRight: '45%',
                    marginBottom: '100px',
                    $nest: {
                        '& h1': {
                            fontFamily: 'GothamBold',
                            fontSize: '52px',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamLight',
                                }
                            }
                        },
                        '& p': {
                            fontFamily: 'GothamLight',
                            fontSize: '24px',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamBold',
                                }
                            }
                        }
                    }
                },
                '& .wave': {
                    position: 'absolute',
                    top: -300,
                },
                '& .title': {
                    fontSize: '37px',
                    textAlign: 'center',
                    fontFamily: 'GothamBold',
                    color: '#67FF6C',
                    zIndex: 2,
                    $nest: {
                        '& span': {
                            color: '#B3F12D'
                        }
                    }
                },

                '& .comment': {
                    width: '50%',
                    margin: 'auto',
                    $nest: {
                        '& .comment-input': {
                            position: 'relative',
                            height: '100px',
                            width: '100%',
                            marginTop: '80px',
                            $nest: {
                                '& input': {
                                    border: 'none',
                                    outline: 'none',
                                    fontFamily: 'GothamBold',
                                    position: 'absolute',
                                    top: 0,
                                    paddingLeft: '20px',
                                    height: '100%',
                                    width: '100%',
                                    zIndex: 1,
                                    $nest: {
                                        '&::placeholder': {
                                            fontFamily: 'GothamBold',
                                            margin: 0,
                                            color: 'black',
                                            lineHeight: 1,
                                        }
                                    }
                                },
                                '& .shadow': {
                                    position: 'absolute',
                                    top: -10,
                                    left: -10,
                                    height: '100%',
                                    width: '100%',
                                    backgroundColor: '#ABF591',
                                }
                            }
                        },
                        '& .send-button': {
                            fontFamily: 'GothamBold',
                            fontSize: '18px',
                            margin: '50px 0',
                            marginBottom: '150px',
                            marginRight: '-20px',
                            height: '80px',
                            width: '280px',
                            backgroundColor: '#00EF8E',
                            border: 'none',
                            float: 'right',
                        },
                    }
                },

                '& .button-wrapper': {
                    width: '45%',
                },

            }
        }
    }
})

export default SellersStyle