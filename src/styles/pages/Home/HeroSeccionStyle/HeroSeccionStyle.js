import { style } from "typestyle";

import bgImage from '../../../../assets/images/Home/HeroSeccion/cheerful-young-female-model-has-pleasant-smile-covers-eye-with-cosmetic-sponge-enjoys-all-benefits-of-patches-reduces-wrinkles-wears-wrapped-towel-on-head-has-skincare-routine-after-awakening.jpg'


const HeroSeccionStyle = style({
    position: "relative",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '120vh',
    $nest: {
        '& .wrapperColorMobile': {
            display: 'none'
        },
        '& .hero_container': {
            $nest: {
                '& .whatsapp_button': {
                    position: 'absolute',
                    bottom: 60,
                    right: 80,
                    zIndex: 1,
                },
                '& .info_container': {
                    position: 'absolute',
                    top: 350,
                    right: 20,
                    bottom: 300,
                    maxWidth: '780px',
                    textAlign: 'end',
                    $nest: {
                        '& h1': {
                            fontFamily: 'GothamBold',
                            marginBottom: '10px',
                            fontSize: '36px',
                        },
                        '& p': {
                            fontFamily: 'GothamLight',
                            marginBottom: '40px',
                            fontSize: '25px',
                            fontWeight: 300
                        },
                        '& button': {
                            backgroundColor: '#FF6B63',
                            border: 'none',
                            padding: '20px',
                            fontFamily: 'GothamLight',
                            fontSize: '22px',
                            fontWeight: 'normal',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamBold',
                                }
                            }
                        }
                    }
                }
            }
        },
        '& .wave': {
            position: 'absolute',
            bottom: 0,
        },
        '@media screen and (max-width: 1200px) and (min-width: 961px)': {
            // background: 'red'
            backgroundPositionX: '-220px',
            backgroundSize: '130vw',
            $nest: {
                '& .hero_container': {
                    $nest: {
                        '& .whatsapp_button': {
                            bottom: 30,
                            right: 80,
                            zIndex: 1,
                        }
                    }
                }
            }
        },
        '@media screen and (max-width: 960px) and (min-width: 801px)': {
            // background: 'red'
            backgroundPositionX: '-270px',
            backgroundSize: '140vw',
            height: '110vh',
            $nest: {
                '& .hero_container': {
                    $nest: {
                        '& .whatsapp_button': {
                            bottom: 10,
                            right: 80,
                            zIndex: 1,
                        },
                        '& .info_container': {
                            top: 250,
                            $nest: {
                                '& h1': {
                                    fontSize: '32px',
                                },
                                '& p': {
                                    fontSize: '25px',
                                },
                            }
                        }
                    }
                },
            }
        },
        '@media screen and (max-width: 800px) and (min-width: 421px)': {
            backgroundPositionX: '-170px',
            height: '130vh',
            $nest: {
                '& .hero_container': {
                    $nest: {
                        '& .whatsapp_button': {
                            bottom: 0,
                            right: 80,
                            zIndex: 1,
                        },
                        '& .info_container': {
                            top: 240,
                            left: 0,
                            right: 0,
                            textAlign: 'center',
                            $nest: {
                                '& h1': {
                                    fontSize: '28px',
                                },
                                '& p': {
                                    margin: '40px',
                                    fontSize: '25px',
                                },
                            }
                        }
                    }
                },
                '& .wrapperColorMobile': {
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgb(255,185,190, 0.5)',
                },
            }
        },
        '@media screen and (max-width: 420px) and (min-width:320px)': {
            backgroundPositionX: '-120px',
            height: '90vh',

            $nest: {
                '& .hero_container': {
                    $nest: {
                        '& .whatsapp_button': {
                            width: '80px',
                            right: 20,
                            bottom: 0,
                        },
                        '& .info_container': {
                            top: 150,
                            textAlign: 'center',
                            $nest: {
                                '& h1': {
                                    margin: '0 20px',
                                    fontSize: '22px',
                                },
                                '& p': {
                                    margin: '40px',
                                    fontSize: '22px',
                                },
                                '& button': {
                                    fontSize: '16px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamBold',
                                        }
                                    }
                                }
                            }
                        },
                    }
                },
                '& .wrapperColorMobile': {
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgb(255,185,190, 0.5)',
                },
            }
        },
    }
    
})

export default HeroSeccionStyle