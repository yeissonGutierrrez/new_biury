import { style } from "typestyle"

import bgSus from '../../../assets/images/Quiz/bgSuscribe.png'

const QuizFormStyle = style({
    backgroundColor: 'white',
    height: '100vh',
    $nest: {
        '& .navbar': {
            display:'flex',
            justifyContent: 'space-between',
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
                    lineHeight: 0,
                    marginTop: '150px',
                    fontSize: '130px',
                    textTransform: 'uppercase',
                },
                '& h2': {
                    margin: 0,
                    fontFamily: 'GothamBold',
                    fontSize: '44px',
                },
                '& h3': {
                    margin: '20px 0',
                    fontFamily: 'GothamLight',
                    fontSize: '35px',
                },
                '& p': {
                    textAlign: 'center',
                    fontFamily: 'GothamBold',
                    fontSize: '21px',
                },
                '& .question-title': {
                    fontSize: '32px',
                    fontFamily: 'GothamBold',
                    margin: '20px 0',
                },
                '& .paragraph1': {
                    color: '#AE50E2',
                    marginBottom: '40px'
                },
                '& .answers-wrapper': {
                    display: 'flex',
                    margin: '30px 0',
                    width: '60%',
                    justifyContent: 'space-between'
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
                        'button': {
                            position: 'absolute',
                            top: 220,
                            left: 0,
                            right: 0,
                            margin: 'auto',
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
                    justifyContent: 'space-between'
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
                    width: '50%',
                    $nest: {
                        '& .answers-container': {
                            display: 'flex',
                            width: '90%',
                            marginBottom: '30px',
                            justifyContent: 'space-evenly',
                        },
                        '& .answers-container2': {
                            display: 'flex',
                            width: '60%',
                            justifyContent: 'space-evenly',
                            marginBottom: '80px'
                        },
                    }
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
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '50%',
                    margin: '40px 0',
                    marginBottom: '90px'
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
                    width: '50%',
                    margin: '50px',
                    $nest: {
                        '& .answers-container': {
                            display: 'flex',
                            width: '90%',
                            marginBottom: '30px',
                            justifyContent: 'space-evenly',
                        },
                        '& .answers-container2': {
                            display: 'flex',
                            width: '60%',
                            justifyContent: 'space-evenly',
                            marginBottom: '80px'
                        },
                    }
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
                            width: '500px'
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
                                            fontFamily: 'GothamBold',
                                            fontSize: '36px'
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
                            lineHeight: 0,
                            marginTop: '180px',
                            fontSize: '130px',
                            textTransform: 'uppercase',
                        },
                        '& h2': {
                            fontFamily: 'GothamBold',
                            fontSize: '35px',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamLight',
                                }
                            }
                        },
                        '& .button-container': {
                            position: 'relative',
                            width: '100%',
                            height: '90px',
                            $nest: {
                                '& button': {
                                    position: 'absolute',
                                    top: -8,
                                    left: -5,
                                    width: '100%',
                                    height: '105%',
                                    zIndex: 1,
                                    border: 'none',
                                    backgroundColor: '#FF97C6',
                                    fontFamily: 'GothamBold',
                                    fontSize: '34px',
                                },
                                '& .border': {
                                    position: 'absolute',
                                    top: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 'solid black 3px',
                                    zIndex: 1
                                }
                            }
                        }
                    }
                }
            }
        },

        '& .question-title': {
            fontSize: '44px',
            fontFamily: 'GothamBold',
            margin: '20px 0',
            textAlign: 'center',
        },

        '& p': {
            textAlign: 'center',
            fontFamily: 'GothamBold',
            fontSize: '21px',
            marginBottom: '40px'
        },

        '& .pagination-button': {
            fontFamily: 'GothamBold',
            fontSize: '22px',
            width: '290px',
            padding: '20px 0',
            color: '#00FF52',
            backgroundColor: '#242535',
            border: 'none',
            textTransform: 'uppercase',
            marginBottom: '80px'
        },
        '& .pagination-container': {
            display: 'flex',
            width: '50%',
            justifyContent: 'space-between'
        }
    }
})
export default QuizFormStyle