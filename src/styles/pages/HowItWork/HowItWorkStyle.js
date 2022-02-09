import { style } from "typestyle";

import photo from '../../../assets/images/HowItWork/Biury_Fotos-08.png'


const HowItWorkStyle = style({
    position: 'relative',
    backgroundColor: 'white',
    marginTop: '100px',
    paddingTop: '500px',
    overflowX: 'hidden',
    $nest: {
        '& .top-wave': {
            position: 'absolute',
            top: 0,
        },
        '& .question-wave': {
            marginBottom: '-20px',
        },
        '& .top-title': {
            position: 'absolute',
            textAlign: 'center',
            fontFamily: 'GothamBold',
            color: 'white',
            fontSize: '67px',
            top: 45,
            left: 0,
            right: 0,
            margin: 'auto'
        },
        '& .steps-container': {
            position: 'relative',
            $nest: {
                '& .step': {
                    display: 'flex',
                    width: '40%',
                    margin: '80px 0',
                    $nest: {
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                },
                                '& .color': {
                                    position: 'absolute',
                                }
                            }
                        },
                        '& .info': {
                            width: '70%',
                            $nest: {
                                '& h1': {
                                    fontFamily: 'GothamBold',
                                    fontSize: '46px',
                                    marginBottom: '30px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamLight',
                                        }
                                    }
                                },
                                '& p': {
                                    fontFamily: 'GothamLight',
                                    fontSize: '22px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamBold',
                                        }
                                    }
                                },
                            }
                        }
                    }
                },
                '& .step1': {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    $nest: {
                        '& .step': {
                            marginRight: '20px'
                        },
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: 0,
                                },
                                '& .color': {
                                    position: 'absolute',
                                    top: 35,
                                    left: -10,
                                }
                            }
                        },
                    }
                },
                '& .step2': {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'start',
                    $nest: {
                        '& .step': {
                            marginLeft: '90px'
                        },
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: 40,
                                    left: -40,
                                },
                                '& .color': {
                                    position: 'absolute',
                                    top: 10,
                                    left: -60,
                                }
                            }
                        },
                    }
                },
                '& .step3': {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    $nest: {
                        '& .step': {
                            width: '50%',
                            marginRight: '50px'
                        },
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: -90,
                                    left: -20,
                                },
                                '& .color': {
                                    position: 'absolute',
                                    top: -120,
                                    left: 0,
                                }
                            }
                        },
                    }
                },
                '& .step4': {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'start',
                    marginBottom: '150px',
                    $nest: {
                        '& .step': {
                            marginLeft: '60px',
                        },
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: 40,
                                    left: -45,
                                },
                                '& .color': {
                                    position: 'absolute',
                                    top: 50,
                                    left: -40,
                                }
                            }
                        },
                    }
                },
                '& .step5': {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    $nest: {
                        '& .step': {
                            width: '60%',
                        },
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: -220,
                                    left: '150%'
                                },
                                '& .color': {
                                    position: 'absolute',
                                    top: -230,
                                    left: '150%'
                                }
                            }
                        },
                    }
                },
                '& .step6': {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'start',
                    $nest: {
                        '& .step': {
                            width: '50%',
                        },
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: 20,
                                    left: 0,
                                },
                                '& .color': {
                                    position: 'absolute',
                                    top: 20,
                                    left: 0,
                                }
                            }
                        },
                    }
                },
                '& .step7': {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                    $nest: {
                        '& .step': {
                            flexDirection: 'column',
                        },
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            zIndex: 1,
                            marginTop: '50px',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                },
                                '& .color': {
                                    position: 'absolute',
                                    top: 50,
                                    left: 30,
                                }
                            }
                        },
                    }
                },
            }
        },
        '& .questions-container': {
            position: 'relative',
            paddingTop: '180px',
            backgroundColor: '#A125F4',
            paddingBottom: '100px',
            $nest: {
                '& .top-wave': {
                    top: 0
                },
                '& .questions-title': {
                    color: 'white',
                    fontFamily: 'GothamBold',
                    marginBottom: '100px',
                    fontSize: '67px',
                    textAlign: 'center',
                },
                '& .photo-mobile': {
                    display: 'none'
                },
                '& .button-sus': {
                    position: 'absolute',
                    top: '53%',
                    left:  '10%',
                    width: '30%',
                    $nest: {
                        '& button': {
                            fontSize: '22px'
                        }
                    }
                }
            }
        },

        '@media screen and (max-width: 1210px)': {
            $nest: {
                '& .steps-container': {
                    position: 'relative',
                    $nest: {
                        '& .step5': {
                            justifyContent: 'end',
                            $nest: {
                                '& .step': {
                                    width: '60%',
                                    marginRight: '30px',
                                }
                            }
                        },
                        '& .step6': {
                            justifyContent: 'start',
                            $nest: {
                                '& .step': {
                                    width: '80%',
                                    $nest: {
                                    }
                                }
                            }
                        },
                        '& .step7': {
                            justifyContent: 'end',
                            $nest: {
                                '& .step': {
                                    width: '45%',
                                    $nest: {
                                    }
                                }
                            }
                        },
                    }
                },

                '& .questions-container': {
                    $nest: {
                        '& .button-sus': {
                            position: 'absolute',
                            top: '55%',
                            left:  '10%',
                            width: '30%',
                            $nest: {
                                '& button': {
                                    fontSize: '18px'
                                }
                            }
                        }
                    }
                },
            }
        },

        '@media screen and (max-width: 890px)': {
            $nest: {
                '& .top-title': {
                    fontSize: '48px'
                },
                '& .top-wave': {
                    width: '1100px'
                },
                '& .questions-container': {
                    $nest: {
                        '& .questions-title': {
                            fontSize: '48px'
                        },
                        '& .button-sus': {
                            top: '55%',
                            left:  '5%',
                            width: '40%',
                            $nest: {
                                '& button': {
                                    height: '80%',
                                    fontSize: '18px'
                                },
                                '& .border': {
                                    height: '80%',
                                }
                            }
                        }
                    }
                },
                '& .steps-container': {
                    $nest: {
                        '& .step': {
                            width: '80%',
                            $nest: {
                                '& .info': {
                                    $nest: {
                                        '& h1': {
                                            fontSize: '27px'
                                        }
                                    }
                                },
                                '& .number': {
                                    position: 'relative',
                                    height: '100px',
                                    $nest: {
                                        '& .border': {
                                            top: -220,
                                            width: '150px',
                                            maxHeight: '200px'
                                        },
                                        '& .color': {
                                            top: -200,
                                            width: '150px',
                                            maxHeight: '200px'
                                        },
                                    }
                                }
                            }
                        },

                        '& .step1': {
                            justifyContent: 'center',
                            $nest: {
                                '& .step': {
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    $nest: {
                                        '& .info': {
                                            textAlign: 'center',
                                        },
                                        '& .number': {
                                            position: 'relative',
                                            height: '100px',
                                            $nest: {
                                                '& .border': {
                                                    top: -220,
                                                },
                                                '& .color': {
                                                    top: -200,
                                                },
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        '& .step2': {
                            justifyContent: 'center',
                            $nest: {
                                '& .step': {
                                    $nest: {
                                        '& .number': {
                                            position: 'relative',
                                            height: '100px',
                                            $nest: {
                                                '& .border': {
                                                    top: 0,
                                                },
                                                '& .color': {
                                                    top: -20,
                                                },
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        '& .step3': {
                            justifyContent: 'center',
                            $nest: {
                                '& .step': {
                                    flexDirection: 'column-reverse',
                                    alignItems: 'end',
                                    width: '100%',
                                    paddingLeft: '30px',
                                    $nest: {
                                        '& .number': {
                                            position: 'relative',
                                            height: '200px',
                                            $nest: {
                                                '& .border': {
                                                    top: 0,
                                                    right: 0,
                                                },
                                                '& .color': {
                                                    top: 0,
                                                    right: 0,
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '100%',
                                        }
                                    }
                                }
                            }
                        },
                        '& .step4': {
                            justifyContent: 'center',
                            $nest: {
                                '& .step': {
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    width: '100%',
                                    paddingLeft: '30px',
                                    $nest: {
                                        '& .number': {
                                            position: 'relative',
                                            $nest: {
                                                '& .border': {
                                                    top: -90,
                                                    right: 0,
                                                },
                                                '& .color': {
                                                    top: -80,
                                                    right: 0,
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '100%',
                                        }
                                    }
                                }
                            }
                        },
                        '& .step6': {
                            marginBottom: '90px',
                            $nest: {
                                '& .step': {
                                    width: '100%',
                                    $nest: {
                                        '& .number': {
                                            $nest: {
                                                '& .border': {
                                                    top: 0,
                                                    left: -20
                                                },
                                                '& .color': {
                                                    top: 0,
                                                    left: -20
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '100%',
                                        }
                                    }
                                }
                            }
                        },
                        '& .step7': {
                            justifyContent: 'center',
                            $nest: {
                                '& .step': {
                                    width: '50%',
                                    flexDirection: 'column-reverse',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    $nest: {
                                        '& .number': {
                                            height: '20px',
                                            $nest: {
                                                '& .border': {
                                                    top: -210,
                                                    left: -10
                                                },
                                                '& .color': {
                                                    left: 0
                                                },
                                            }
                                        },
                                    }
                                }
                            }
                        },
                    }
                }
            }
        },

        '@media screen and (max-width: 590px)': {
            marginTop: '70px',
            paddingTop: '400px',
            $nest: {
                '& .top-title': {
                    fontSize: '27px'
                },
                '& .top-wave': {
                    width: '800px'
                },
                '& .steps-container': {
                    $nest: {
                        '& .step1': {
                            marginBottom: '30px',
                            $nest: {
                                '& .step': {
                                    width: '100%',
                                    $nest: {
                                        '& .number': {
                                            height: '0'
                                        }
                                    }
                                }
                            }
                        },

                        '& .step2': {
                            $nest: {
                                '& .step': {
                                    width: '100%',
                                    margin: 0,
                                    flexDirection: 'column',
                                    padding: '0 20px',
                                    $nest: {
                                        '& .number': {
                                            position: 'relative',
                                           width: 0,
                                            $nest: {
                                                '& .border': {
                                                    top: -40,
                                                    left: 0
                                                },
                                                '& .color': {
                                                    top: -60,
                                                    left: 0
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '100%',
                                            padding: 0,
                                            $nest: {
                                                '& h1': {
                                                    paddingLeft: '45%',
                                                    marginBottom: '50px'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        '& .step3': {
                            justifyContent: 'center',
                            $nest: {
                                '& .step': {
                                    flexDirection: 'column-reverse',
                                    alignItems: 'end',
                                    width: '100%',
                                    paddingLeft: '30px',
                                    $nest: {
                                        '& .number': {
                                            position: 'relative',
                                            height: '200px',
                                            $nest: {
                                                '& .border': {
                                                    top: 0,
                                                    right: 0,
                                                },
                                                '& .color': {
                                                    top: 0,
                                                    right: 0,
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '100%',
                                        }
                                    }
                                }
                            }
                        },

                        '& .step4': {
                            justifyContent: 'center',
                            $nest: {
                                '& .step': {
                                    margin: '80px 0',
                                    padding:0,
                                    flexDirection: 'column',
                                    alignItems: 'start',
                                    width: '100%',
                                    $nest: {
                                        '& .number': {
                                            position: 'relative',
                                            $nest: {
                                                '& .border': {
                                                    top: -90,
                                                    left: 20
                                                },
                                                '& .color': {
                                                    top: -80,
                                                    left: 20
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '100%',
                                            $nest: {
                                                '& h1': {
                                                    textAlign: 'center'
                                                },
                                                '& p': {
                                                    textAlign: 'center'
                                                },
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        '& .step5': {
                            marginBottom: '100px',
                            $nest: {
                                '& .step': {
                                    width: '100%',
                                    padding: '0 30px',
                                    $nest: {
                                        '& .number': {
                                            position: 'relative',
                                           width: 0,
                                            $nest: {
                                                '& .border': {
                                                    top: -40,
                                                    left: 0
                                                },
                                                '& .color': {
                                                    top: -60,
                                                    left: 0
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '100%',
                                            padding: 0,
                                            $nest: {
                                                '& h1': {
                                                    paddingLeft: '45%',
                                                    marginBottom: '80px'
                                                },
                                                '& p': {
                                                    textAlign: 'center'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        '& .step6': {
                            $nest: {
                                '& .step': {
                                    width: '100%',
                                    $nest: {
                                        '& .number': {
                                            $nest: {
                                                '& .border': {
                                                    top: 0,
                                                    left: -20
                                                },
                                                '& .color': {
                                                    top: 0,
                                                    left: -20
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '60%',
                                        }
                                    }
                                }
                            }
                        },
                    }
                },

                '& .questions-container': {
                    $nest: {
                        '& .questions-title': {
                            fontSize: '27px',
                            margin: '0 20px',
                        },

                        '& .button-sus': {
                            position: 'static',
                            margin: 'auto',
                            width: '70%',
                            $nest: {
                                '& button': {
                                    height: '80%',
                                    fontSize: '18px'
                                },
                                '& .border': {
                                    height: '80%',
                                }
                            }
                        }
                    }
                },
            }
        },

        '@media screen and (max-width: 450px)': {
            $nest: {
                '& .steps-container': {
                    $nest: {
                        '& .step1': {
                            $nest: {
                                '& .step': {
                                    margin: 0,
                                    marginRight: 0,
                                    $nest: {
                                        '& .number': {
                                            width: '20%',
                                            $nest: {
                                                '& .border': {
                                                    width: '60px',
                                                    top: -150,
                                                },
                                                '& .color': {
                                                    width: '60px',
                                                    top: -140,
                                                },
                                            }
                                        }
                                    }
                                },
                            }
                        },

                        '& .step2': {
                            $nest: {
                                '& .step': {
                                    margin: 0,
                                    marginRight: 0,
                                    $nest: {
                                        '& .number': {
                                            $nest: {
                                                '& .border': {
                                                    top: 55,
                                                    width: '80px',
                                                    
                                                },
                                                '& .color': {
                                                    top: 45,
                                                    left: -4,
                                                    width: '80px',
                                                 
                                                },
                                            }
                                        },
                                        '& .info': {
                                            $nest: {
                                                '& h1': {
                                                    paddingLeft: '90px',
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        },

                        '& .step3': {
                            $nest: {
                                '& .step': {
                                    margin: 0,
                                    marginRight: 0,
                                    $nest: {
                                        '& .number': {
                                            height: '170px',
                                            $nest: {
                                                '& .border': {
                                                    top: 55,
                                                    width: '80px',
                                                    
                                                },
                                                '& .color': {
                                                    top: 45,
                                                    left: -4,
                                                    width: '80px',
                                                 
                                                },
                                            }
                                        },
                                    }
                                },
                            }
                        },

                        '& .step4': {
                            $nest: {
                                '& .step': {
                                    margin: 0,
                                    marginRight: 0,
                                    $nest: {
                                        '& .number': {
                                            height: '170px',
                                            $nest: {
                                                '& .border': {
                                                    top: 40,
                                                    left: 10,
                                                    width: '80px',
                                                    
                                                },
                                                '& .color': {
                                                    top: 45,
                                                    left: 12,
                                                    width: '80px',
                                                },
                                            }
                                        },
                                    }
                                },
                            }
                        },

                        '& .step5': {
                            $nest: {
                                '& .step': {
                                    margin: 0,
                                    marginRight: 0,
                                    $nest: {
                                        '& .number': {
                                            height: '170px',
                                            $nest: {
                                                '& .border': {
                                                    top: 0,
                                                    left: 10,
                                                    width: '80px',
                                                    
                                                },
                                                '& .color': {
                                                    top: -5,
                                                    left: 15,
                                                    width: '80px',
                                                },
                                            }
                                        },
                                        '& .info': {
                                            $nest: {
                                                '& h1': {
                                                    paddingLeft: '120px',
                                                    marginBottom: '20px',
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        },

                        '& .step6': {
                            margin: 0,
                            $nest: {
                                '& .step': {
                                    margin: 0,
                                    $nest: {
                                        '& .number': {
                                            height: '170px',
                                            $nest: {
                                                '& .border': {
                                                    top: 0,
                                                    left: -4,
                                                    width: '80px',
                                                    
                                                },
                                                '& .color': {
                                                    top: -5,
                                                    left: -4,
                                                    width: '80px',
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '90%',
                                            marginRight: '5px',
                                            $nest: {
                                                '& h1': {
           
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        },

                        '& .step7': {
                            margin: 0,
                            $nest: {
                                '& .step': {     
                                    width: '90%',  
                                    $nest: {
                                        '& .number': {
                                            height: '130px',
                                            $nest: {
                                                '& .border': {
                                                    top: 0,
                                                    width: '80px',
                                                },
                                                '& .color': {
                                                    top: 5,
                                                    width: '80px',
                                                },
                                            }
                                        },
                                        '& .info': {
                                            width: '100%',
                                            marginRight: '5px',
                                            $nest: {
                                                '& h1': {
           
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        },

                    }
                },
                '& .questions-container': {
                    $nest: {
                        '& .questions-title': {
                            margin: '0 20px',
                        },

                        '& .questions-title': {
                            fontSize: '27px'
                        },

                        '& .button-sus': {
                            marginTop: '50px',
                            width: '70%',
                            $nest: {
                                '& button': {
                                    height: '80%',
                                    fontSize: '16px'
                                },
                                '& .border': {
                                    height: '80%',
                                }
                            }
                        },

                        '& .photo-mobile': {
                            position: 'relative',
                            margin: '50px auto',
                            display: 'block',
                            width: '250px',
                            height: '250px',
                            background: `url(${photo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: 15,
                                    left: 15,
                                    width: '100%',
                                    height: '100%',
                                    border: 'solid white 5px'
                                }
                            }
                        }
                    }
                },
            }
        },

        '@media screen and (max-width: 360px)': {
            marginTop: '90px',
            $nest: {
                '& .top-wave': {
                    width: '750px'
                },
            }
        },
    }
})

export default HowItWorkStyle