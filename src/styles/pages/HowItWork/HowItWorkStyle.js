import { style } from "typestyle";

const HowItWorkStyle = style({
    position: 'relative',
    backgroundColor: 'white',
    marginTop: '100px',
    paddingTop: '500px',
    $nest: {
        '& .top-wave': {
            position: 'absolute',
            top: 0,
        },
        '& .bottom-wave': {
            position: 'absolute',
            bottom: 0,
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
                    marginLeft: '43%',
                    marginRight: '100px',
                    marginBottom: '80px',
                    $nest: {
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: 30,
                                },
                                '& .color': {
                                    position: 'absolute',
                                    top: 55,
                                    left: -10,
                                }
                            }
                        },
                    }
                },
                '& .step2': {
                    marginLeft: '100px',
                    marginBottom: '120px',
                    $nest: {
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
                    marginLeft: '50%',
                    marginBottom: '140px',
                    width: '50%',
                    $nest: {
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
                    marginLeft: '100px',
                    marginBottom: '80px',
                    $nest: {
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
                    flexDirection: 'column',
                    marginLeft: '50%',
                    marginBottom: '80px',
                    width: '50%',
                    $nest: {
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            $nest: {
                                '& .border': {
                                    position: 'absolute',
                                    top: -220,
                                    left: '55%',
                                },
                                '& .color': {
                                    position: 'absolute',
                                    top: -230,
                                    left: '55%',
                                }
                            }
                        },
                    }
                },
                '& .step6': {
                    width: '50%',
                    $nest: {
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
                    flexDirection: 'column',
                    marginLeft: '50%',
                    marginTop: '-120px',
                    width: '50%',
                    $nest: {
                        '& .number': {
                            position: 'relative',
                            width: '30%',
                            zIndex: 1,
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
            marginTop: '400px',
            paddingTop: '80px',
            backgroundColor: '#A125F4',
            paddingBottom: '100px',
            $nest: {
                '& .top-wave': {
                    top: -320
                },
                '& .questions-title': {
                    color: 'white',
                    fontFamily: 'GothamBold',
                    marginBottom: '100px',
                    fontSize: '45px',
                    textAlign: 'center',
                }
            }
        }
    }
})

export default HowItWorkStyle