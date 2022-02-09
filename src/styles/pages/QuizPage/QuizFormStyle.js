import { style } from "typestyle"

import bgSus from '../../../assets/images/Quiz/bgSuscribe.png'

const QuizFormStyle = style({
    backgroundColor: 'white',
    height: '100vh',
    $nest: {
        '& .navbar': {
            display:'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 50px',
            height: '100px',
            borderBottom: 'solid #00FF52 5px',
            $nest: {
                '& img': {
                    width: '150px'
                },
                '& h1': {
                    fontFamily: 'GothamLight',
                    textTransform: 'uppercase',
                    fontSize: '44px',
                },
                
                '@media screen and (max-width: 700px)': {
                    $nest: {
                        '& img': {
                            width: '100px'
                        },
                        '& h1': {
                            fontFamily: 'GothamLight',
                            textTransform: 'uppercase',
                            fontSize: '36px',
                        },
                    }
                }
            }
        },
        '& .step1': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            $nest: {
                '& .user_name': {
                    fontFamily: 'Alpha',
                    lineHeight: 1,
                    marginTop: '100px',
                    marginBottom: '20px',
                    fontSize: '130px',
                    textTransform: 'uppercase',
                },
                '& h2': {
                    textAlign: 'center',
                    margin: 0,
                    fontFamily: 'GothamBold',
                    fontSize: '44px',
                },
                '& h3': {
                    textAlign: 'center',
                    margin: '20px 0',
                    fontFamily: 'GothamLight',
                    fontSize: '35px',
                },
                '& .paragraph1': {
                    color: '#AE50E2',
                    marginBottom: '40px'
                },
                '& .answers-wrapper': {
                    margin: '30px 0',
                    width: '80%',
                    justifyContent: 'space-between',
                    $nest: {
                        '& .buttons': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '800px',
                            margin: 'auto',
                            $nest: {
                                '& .1': {
                                    
                                },
                                
                                '& .2': {
                                },
                                
                                '& .3': {
                                    
                                },
                                '& .two': {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '525px',
                                    paddingRight: '20px',
                                    $nest: {
                                        '& .1': {
                
                                        },
                                        
                                        '& .2': {
                                           
                                        },
                                        

                                    }
                                }
                            }
                        }
                    }
                },
                '@media screen and (max-width: 1200px)': {
                    $nest: {
                        '& .answers-wrapper': {
                            width: '100%',
                            $nest: {
                                '& .buttons': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    $nest: {

                                        '& .two': {
                                            width: '530px',
                                            margin: '30px 0',
                                        }
                                    }
                                }
                            }
                        },

                    }
                },
                '@media screen and (max-width: 700px)': {
                    $nest: {
                        '& .user_name': {
                            fontSize: '54px',
                        },
                        '& h2': {
                            fontSize: '26px',
                        },
                        '& h3': {
                            fontSize: '22px',
                        },
                        '& p': {
                            fontSize: '16px',
                        },
                        '& .question-title': {
                            fontSize: '24px',
                        },
                        '& .answers-wrapper': {
                            width: '100%',
                            $nest: {
                                '& .buttons': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '',
                                    $nest: {

                                        '& .two': {
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            height: '210px',
                                            alignItems: 'center',
                                            width: '300px !important',
                                            padding: 0,
                                        }
                                    }
                                }
                            }
                        },

                    }
                }
            },
        },
        '& .step2': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
            $nest: {
                '& .answer': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    paddingTop: '320px',
                    width: '350px',
                    $nest: {
                        '& img': {
                            position: 'absolute',
                            top: 0,
                            width: '120px',
                        },
                        '& p': {
                            fontSize: '20px',
                            fontFamily: 'GothamLight'
                        },
                        '& .button': {
                            position: 'absolute',
                            top: 240,
                        }
                    }
                },
                '& .paragraph1': {
                    color: '#AE50E2',
                },
                '& .answers-wrapper': {
                   display: 'flex',
                    margin: '30px 0',
                    width: '90%',
                    $nest: {
                        '& .two': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '80%'
                        },
                        '& .one': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '20%'
                        },
                        
                    }
                },
                '@media screen and (max-width: 1500px)': {
                    $nest: {
                        '& .item': {
                            width: '350px',
                        },
                        '& .answer': {
                            width: '100%',
                            $nest: {
                                '& img': {
                                    position: 'absolute',
                                    top: 0,
                                    width: '120px',
                                },
                                '& p': {
                                    fontSize: '20px',
                                    fontFamily: 'GothamLight'
                                },
                                '& .button': {
                                    position: 'absolute',
                                    top: 240,
                                }
                            }
                        },
                    }
                },

                '@media screen and (max-width: 1050px)': {
                    $nest: {
                        '& .answers-wrapper': {
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            $nest: {
                                '& .two': {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr'
                                },
                                '& .one': {
                                    width: '100%'
                                }
                            }
                        },
                    }
                },

                '@media screen and (max-width: 500px)': {
                    $nest: {
                        '& .question-title': {
                            fontSize: '22px',
                        },
                        '& .answers-wrapper': {
                            width: '100%',
                            $nest: {
                                '& .answer': {
                                    $nest: {
                                        '& img': {
                                            width: '100px'
                                        },
                                        '& .button': {
                                            top: 200
                                        },
                                        '& p': {
                                            fontSize: '18px'
                                        }
                                    }
                                }
                            }
                        },
                        
                    }
                },

                '@media screen and (max-width: 420px)': {
                    $nest: {
                        '& .answers-wrapper': {
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            $nest: {
                                '& .two': {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr !important'
                                },
                                '& .one': {
                                    width: '100%'
                                }
                            }
                        },
                        
                    }
                }
            },
        },
        '& .step3': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
            $nest: {
                '& .paragraph1': {
                    color: '#FF7065',
                },
                '& .answers-wrapper': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '700px',
                    $nest: {
                        '& .answers-container': {
                            display: 'flex',
                            width: '100%',
                            marginBottom: '30px',
                            justifyContent: 'space-evenly',
                        },
                        '& .answers-container2': {
                            display: 'flex',
                            width: '70%',
                            justifyContent: 'space-evenly',
                        },
                        '& .answers-container-mobile': {
                            display: 'none',
                        }
                    }
                },
                '@media screen and (max-width: 700px)': {
                    $nest: {
                        '& .answers-wrapper': {
                            width: '100%',
                            $nest: {
                                '& .answers-container': {
                                    display: 'none',
                                },
                                '& .answers-container2': {
                                    display: 'none',
                                },
                                '& .answers-container-mobile': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    $nest: {
                                        '& .grid-wrapper': {
                                            display: 'grid',
                                            gap: '20px',
                                            gridTemplateColumns: '1fr 1fr',
                                            marginBottom: '20px',
                                        },
                                        '& button': {
                                            fontSize: '14px'
                                        }
                                    }
                                }
                            }
                        },
                    }
                },
                '@media screen and (max-width: 420px)': {
                    padding: '20px 0'
                }
            },
        },

        '& .step4': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
            $nest: {
                '& .paragraph1': {
                    color: '#00EF8E',
                },
                '& .answers-wrapper': {
                    margin: '30px 0',
                    width: '100%',
                    justifyContent: 'space-between',
                    $nest: {
                        '& .buttons': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '650px',
                            margin: 'auto',
                            $nest: {
                                '& .two': {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '525px',
                                    paddingRight: '20px',
                                }
                            }
                        }
                    }
                },
                '@media screen and (max-width: 1200px)': {
                    paddingTop: '50px',
                    $nest: {
                        '& .answers-wrapper': {
                            width: '100%',
                            $nest: {
                                '& .buttons': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    $nest: {

                                        '& .two': {
                                            width: '430px',
                                            margin: '30px 0',
                                        }
                                    }
                                }
                            }
                        },

                    }
                },
                '@media screen and (max-width: 700px)': {
                    $nest: {
                        '& .answers-wrapper': {
                            width: '100%',
                            $nest: {
                                '& .buttons': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '',
                                    $nest: {

                                        '& .two': {
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            height: '210px',
                                            alignItems: 'center',
                                            width: '300px !important',
                                            padding: 0,
                                        }
                                    }
                                }
                            }
                        },

                    }
                }
            },
        },

        '& .step5': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
            $nest: {
                '& .paragraph1': {
                    color: '#FF7065',
                },
                '& .answers-wrapper': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '700px',
                    $nest: {
                        '& .answers-container': {
                            display: 'flex',
                            width: '100%',
                            marginBottom: '30px',
                            justifyContent: 'space-evenly',
                        },
                        '& .answers-container2': {
                            display: 'flex',
                            width: '70%',
                            justifyContent: 'space-evenly',
                        },
                        '& .answers-container-mobile': {
                            display: 'none',
                        }
                    }
                },
                '@media screen and (max-width: 700px)': {
                    $nest: {
                        '& .answers-wrapper': {
                            width: '100%',
                            $nest: {
                                '& .answers-container': {
                                    display: 'none',
                                },
                                '& .answers-container2': {
                                    display: 'none',
                                },
                                '& .answers-container-mobile': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    $nest: {
                                        '& .grid-wrapper': {
                                            display: 'grid',
                                            gap: '20px',
                                            gridTemplateColumns: '1fr 1fr',
                                            marginBottom: '20px',
                                        },
                                        '& button': {
                                            fontSize: '14px'
                                        }
                                    }
                                }
                            }
                        },
                    }
                },
                '@media screen and (max-width: 420px)': {
                    padding: '20px 0'
                }
            },
        },

        '& .step7': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
            $nest: {
                '& .question-title': {
                    margin: 0,
                    marginBottom: '50px'
                },
                '& .paragraph1': {
                    color: '#FF7065',
                    margin: '40px 0'
                },
                '& .answers-wrapper': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '700px',
                    $nest: {
                        '& .answers-container': {
                            display: 'flex',
                            width: '100%',
                            marginBottom: '30px',
                            justifyContent: 'space-evenly',
                        },
                        '& .answers-container2': {
                            display: 'flex',
                            width: '70%',
                            justifyContent: 'space-evenly',
                        },
                        '& .answers-container-mobile': {
                            display: 'none',
                        }
                    }
                },
                '@media screen and (max-width: 700px)': {
                    $nest: {
                        '& .answers-wrapper': {
                            width: '100%',
                            $nest: {
                                '& .answers-container': {
                                    display: 'none',
                                },
                                '& .answers-container2': {
                                    display: 'none',
                                },
                                '& .answers-container-mobile': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    $nest: {
                                        '& .grid-wrapper': {
                                            display: 'grid',
                                            gap: '20px',
                                            gridTemplateColumns: '1fr 1fr',
                                            marginBottom: '20px',
                                        },
                                        '& button': {
                                            fontSize: '14px'
                                        }
                                    }
                                }
                            }
                        },
                    }
                },
                '@media screen and (max-width: 420px)': {
                    padding: '20px 0'
                }
            },
        },

        '& .suscribe': {
            display: 'flex',
            height: '105vh',
            backgroundImage: `url(${bgSus})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: '20px',
            paddingRight: '50px',
            $nest: {
                '& .photo-container': {
                    position: 'relative',
                    width: '50%',
                    $nest: {
                        '& .photo': {
                            margin: '74px 60px 30px 90px',
                            width: '80%'
                        },
                        '& .circle-container': {
                            position: 'absolute',
                            top: 0,
                            left: 70,
                            $nest: {
                                '& .circle': {
                                    position: 'relative',
                                    height: '280px',
                                    width: '280px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    zIndex: 1,
                                    marginRight: '30px',
                                    $nest: { 
                                        '& .circle_color': {
                                            height: '105%',
                                            width: '105%',
                                            borderRadius: '50%',
                                            position: 'absolute',
                                            left: -10,
                                            top: -10,
                                            backgroundColor: '#33DFCA',
                                            zIndex: 0
                                        },
                                        '& .circle_border': {
                                            height: '105%',
                                            width: '105%',
                                            borderRadius: '50%',
                                            position: 'absolute',
                                            top: 0,
                                            zIndex: 1,
                                            border: 'solid black 3px',
                                        },
                                        '& img': {
                                            zIndex: 1,
                                        }
                                    }
                                },
                            }
                        }
                    }
                },
                '& .info-container': {
                    display: 'flex',
                    paddingBottom: '90px',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '50%',
                    textAlign: 'center',
                    $nest: {
                        '& h1': {
                            fontFamily: 'Alpha',
                            lineHeight: 1,
                            marginTop: '150px',
                            marginBottom: '30px',
                            fontSize: '130px',
                            textTransform: 'uppercase',
                        },
                        '& h2': {
                            fontFamily: 'GothamBold',
                            fontSize: '35px',
                            marginBottom: '50px',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamLight',
                                }
                            }
                        },
                    }
                },
                '@media screen and (max-width: 1200px)': {
                    $nest: {
                        '& .photo-container': {
                            width: '50%',
                            $nest: {
                                '& .photo': {
                                    margin: '200px 0 0 0',
                                    width: '80%',
                                },
                                '& .circle-container': {
                                    top: 50,
                                    left: 0,
                                    $nest: {
                                        '& .circle': {
                                            height: '200px',
                                            width: '200px',
                                            $nest: { 
                                                '& .circle_color': {

                                                },
                                                '& .circle_border': {

                                                },
                                                '& img': {
                                                    width: '80px'
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        },
                    }
                },
                '@media screen and (max-width: 1040px)': {
                    flexDirection: 'column-reverse',
                    alignItems: 'center',
                    height: 'auto',
                    $nest: {
                        '& .photo-container': {
                            width: '80%',
                            $nest: {
                                '& .photo': {
                                    margin: '80px 0 0 0',
                                    width: '100%',
                                },
                                '& .circle-container': {
                                    top: 0,
                                    left: -30,
                                    $nest: {
                                        '& .circle': {
                                            height: '200px',
                                            width: '200px',
                                            $nest: { 
                                                '& .circle_color': {

                                                },
                                                '& .circle_border': {

                                                },
                                                '& img': {
                                                    width: '80px'
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        },
                        '& .info-container': {
                            width: '80%',
                        },
                    }
                },
                '@media screen and (max-width: 700px)': {
                    flexDirection: 'column-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'auto',
                    $nest: {
                        '& .info-container': {
                            display: 'flex',
                            paddingBottom: '90px',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '50%',
                            textAlign: 'center',
                            $nest: {
                                '& h1': {
                                    marginTop: '50px',
                                    fontSize: '80px',
                                },
                                '& h2': {
                                    fontSize: '20px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamLight',
                                        }
                                    }
                                },
                                '& button': {
                                    fontSize: '20px'
                                }
                            }
                        },
                    }
                },
                '@media screen and (max-width: 450px)': {
                    padding: '20px 20px 80px 20px',
                    $nest: {
                        '& .info-container': {
                            width: '100%',
                            $nest: {
                                '& h1': {
                                    fontSize: '55px'
                                },
                                '& h2': {
                                    fontSize: '16px'
                                },
                                '& .button': {
                                    height: '60px',
                                    $nest: {
                                        '& button': {
                                            fontSize: '14px'
                                        }
                                    }
                                }
                            }
                        },
                        '& .photo-container': {
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            $nest: {
                                '& .photo': {
                                    margin: '50px 0 0 0',
                                    width: '80%',
                                },
                                '& .circle-container': {
                                    top: -10,
                                    left: 0,
                                    $nest: {
                                        '& .circle': {
                                            height: '120px',
                                            width: '120px',
                                            $nest: { 
                                                '& .circle_color': {

                                                },
                                                '& .circle_border': {

                                                },
                                                '& img': {
                                                    width: '40px'
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        },
                    }
                },
            }
        },

        '& .question-title': {
            fontSize: '44px',
            fontFamily: 'GothamBold',
            margin: '20px 0',
            textAlign: 'center',
            $nest: {
                '@media screen and (max-width: 700px)': {
                    fontSize: '32px',
                },
                '@media screen and (max-width: 500px)': {
                    fontSize: '20px',
                    padding: '0 30px',
                },
            }
        },

        '& p': {
            textAlign: 'center',
            fontFamily: 'GothamBold',
            fontSize: '21px',
            margin: '40px 0',
            $nest: {
                '@media screen and (max-width: 700px)': {
                    fontSize: '22px',
                    padding: '0 30px'
                },
                '@media screen and (max-width: 500px)': {
                    fontSize: '16px',
                    padding: '0 30px'
                },
            }
        },

        '& .pagination-button': {
            cursor: 'pointer',
            fontFamily: 'GothamBold',
            fontSize: '22px',
            width: '290px',
            padding: '20px 0',
            color: '#00FF52',
            backgroundColor: '#242535',
            border: 'none',
            textTransform: 'uppercase',
            margin: '80px 0',
            $nest: {
                '@media screen and (max-width: 700px)': {
                    width: '220px',
                    fontSize: '16px'
                },
                '@media screen and (max-width: 400px)': {
                    width: '140px',
                    fontSize: '14px'
                },
            }
        },
        '& .pagination-container': {
            display: 'flex',
            width: '600px',
            justifyContent: 'space-between',
            $nest: {
                '@media screen and (max-width: 700px)': {
                    width: '80%',
                },
                '@media screen and (max-width: 400px)': {
                    width: '90%',
                },
            }
        }
    }
})
export default QuizFormStyle