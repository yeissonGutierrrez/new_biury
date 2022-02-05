import { style } from "typestyle";

 const QuizPageStyle = style({
     position: 'relative',
     marginTop: '100px',
     height: '100vh',
     $nest: {
            '& .QuizRegister': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '260px',
                justifyContent: 'center',
                backgroundColor: '#FF5E5C',
                height: '100%',
                    $nest: {
                    '& .inputs_wrapper': {
                        display: 'flex',
                        width: '100vw',
                        $nest: {
                            '& .input': {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                                width: '50%',
                                padding: '0 50px',
                                color: 'white',
                                marginTop: '50px',
                                $nest: {
                                    '& label': {
                                        fontFamily: 'GothamBold',
                                        fontSize: '35px',
                                        textAlign: 'center',
                                        marginBottom: '50px',
                                    },
                                    '& input': {
                                        border: 'none',
                                        height: '52px',
                                        width: '100%',
                                        paddingLeft: '20px',
                                        outline: 'none',
                                        fontSize: '20px',
                                        fontFamily: 'cocoGoth',
                                        color: '#202230',
                                        $nest: {
                                            '&::placeholder': {
                                                fontSize: '20px',
                                                fontFamily: 'cocoGoth',
                                                color: 'rgba(32, 34, 48, .5)',
                                                
                                            }
                                        }
                                    }
                                }
                            },
                        }
                    },
                    '& h3': {
                        zIndex: 2,
                        position: 'absolute',
                        textAlign: 'center',
                        fontFamily: 'GothamBold',
                        fontSize: '39px',
                        top: 50,
                        left: 60
                    },
                    '& .info': {
                        display: 'flex',
                        textAlign: 'center',
                        $nest: {
                            '& .circle': {
                                position: 'relative',
                                height: '150px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '150px',
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
                                    '& .num': {
                                        zIndex: 1,
                                        fontFamily: 'GothamBold',
                                        fontSize: '36px'
                                    }
                                }
                            },
                            '& .text': {
                                textAlign: "center",
                                color: 'white',
                                $nest: {
                                    '& h1': {
                                        fontFamily: 'GothamBold',
                                        fontSize: '47px',
                                        lineHeight: 0.5,
                                        margin: '30px 0'
                                    },
                                    '& p': {
                                        fontFamily: 'GothamLight',
                                        fontSize: '26px',
                                    }
                                }
                            }
                        }
                    },
                    '& .wave': {
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        left: 0,
                        overflow: 'hidden',
                        $nest: {
                            '& img': {
                                width: '100%'
                            }
                        }
                    },
                    '& .waveMobile': {
                        display: 'none'
                    },

                    '& button': {
                        cursor: 'pointer',
                        fontSize: '22px',
                        fontFamily: 'GothamBold',
                        backgroundColor: '#00FF58',
                        width: '290px',
                        marginTop: '90px',
                        padding: '20px',
                        border: 'none',
                        $nest: {
                            '& span': {
                                fontFamily: 'GothamBold',
                            }
                        }
                    },

                    '@media screen and (max-width: 1200px) and (min-width: 901px)': {
                        // display: 'none'
                        paddingTop: '300px',
                        $nest: {
                            '& .wave': {
                                width: '90%'
                            },
                            '& h3': {
                            }
                        }
                    },

                    '@media screen and (max-width: 900px)': {
                        // display: 'none'
                        paddingTop: '300px',
                        paddingBottom: '50px',
                        $nest: {
                            '& .wave': {
                                width: '100%'
                            },
                            '& h3': {
                                fontSize: '30px'
                            },
                            '& .info': {
                                flexDirection: 'column',
                                alignItems: 'center',
                                $nest: {
                                    '& .circle': {
                                        margin: 0,
                                        marginBottom: '50px'
                                    },
                                    '& .text': {
                                        $nest: {
                                            '& h1': {
                                                fontSize: '36px',
                                            },
                                            '& p': {
                                                fontSize: '22px',
                                            }
                                        }
                                    }
                                }
                            },
                            '& .inputs_wrapper': {
                                $nest: {
                                    '& .input': {
                                        $nest: {
                                            '& label': {
                                                fontSize: '22px',
                                                textAlign: 'center',
                                                marginBottom: '20px',
                                            },
                                        }
                                    },
                                }
                            },
                        }
                    },

                    '@media screen and (max-width: 659px)': {
                        paddingTop: '220px',
                        $nest: {
                            '& .wave': {
                                $nest: {
                                    '& img': {
                                        width: '120%'
                                    }
                                }
                            },
                            '& h3': {
                                fontSize: '25px',
                                left: 0,
                                right: 0,
                            },
                            '& .info': {
                                $nest: {
                                    '& .text': {
                                        $nest: {
                                            '& h1': {
                                                fontSize: '28px',
                                            },
                                            '& p': {
                                                fontSize: '20px',
                                            }
                                        }
                                    }
                                }
                            },
                            '& .inputs_wrapper': {
                                flexDirection: 'column',
                                $nest: {
                                    '& .input': {
                                        width: '100%',
                                        padding: 0,
                                        $nest: {
                                            '& input': {
                                                width: '80%',
                                            },
                                        }
                                    },
                                }
                            },

                            '& button': {
                                fontSize: '18px',
                            },
                        }
                    },
                    '@media screen and (max-width: 425px) and (min-width: 320px)': {
                        $nest: {
                            '& .wave': {
                                $nest: {
                                    '& img': {
                                        width: '700px'
                                    }
                                }
                            },
                            '& h3': {
                                fontSize: '22px',
                                left: 5,
                                right: 5,
                            },
                            '& .info': {
                                $nest: {
                                    '& .text': {
                                        $nest: {
                                            '& h1': {
                                                fontSize: '22px',
                                            },
                                            '& p': {
                                                fontSize: '18px',
                                            },
                                        }
                                    }
                                }
                            },

                            '& .inputs_wrapper': {
                                $nest: {
                                    '& .input': {
                                        $nest: {
                                            '& label': {
                                                fontSize: '18px'
                                            },
                                            '& input': {
                                                fontSize: '18px',
                                                $nest: {
                                                    '&::placeholder': {
                                                        fontSize: '18px'
                                                    }
                                                }
                                            },
                                        }
                                    },
                                }
                            },

                            '& button': {
                                marginTop: '70px',
                            },
                        }
                    },

                }
            },

            '@media screen and (max-width: 700px)': {
                height: 'auto',
            }
     }
 })

 export default QuizPageStyle