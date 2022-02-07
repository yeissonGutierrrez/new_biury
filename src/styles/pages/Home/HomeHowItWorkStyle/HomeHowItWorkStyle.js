import { style } from "typestyle";

const HomeHowItWorkStyle = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '100px',
    $nest: {
        '& .title': {
            $nest: {
                '& span': {
                    fontFamily: 'GothamLight'
                },
            }
        },
        '& .steps_container': {
            display: 'flex',
            width: '70%',
            margin: '80px 0',
            justifyContent: 'space-evenly',
            $nest: {
                '& .steps': {
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    paddingTop: '350px',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '290px',
                    $nest: {
                        '& .circle-wrapper': {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            $nest: {
                                '& .circle': {
                                    margin: 'auto',
                                    position: 'relative',
                                    height: '150px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '150px',
                                    borderRadius: '50%',
                                    // backgroundColor: 'red',
                                    border: 'solid black 3px',
                                    $nest: { 
                                        '& .circle_color': {
                                            height: '105%',
                                            width: '105%',
                                            borderRadius: '50%',
                                            position: 'absolute',
                                            left: -10,
                                            top: -10,
                                            backgroundColor: '#33DFCA',
                                            zIndex: -1
                                        },
                                        '& .num': {
                                            zIndex: 1,
                                            fontFamily: 'GothamBold',
                                            fontSize: '36px'
                                        }
                                    }
                                },
                            }
                        },
                        '& .step_title': {
                            position: 'absolute',
                            top: 200,
                            fontFamily: 'GothamLight',
                            color: 'rgba(153, 38, 247, 1)',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamBold',
                                }
                            }
                        },
                        '& p': {
                            margin: 'auto',
                            fontFamily: 'GothamMedium',
                            lineHeight: 1.2,
                            fontSize: '15px',
                        },
                    }
                }
            },
        },
        '& .subtitle': {
            fontFamily: 'GothamBold',
            fontSize: '32px',
            marginBottom: '100px',
            $nest: {
                '& span': {
                    fontFamily: 'GothamLight',
                }
            }
        },
        '& button': {
            fontFamily: 'GothamBold',
            backgroundColor: '#FF6B63',
            border: 'none',
            fontSize: '20px',
            padding: '20px',
            color: 'white',
            marginBottom: '150px'
        },
        '@media screen and (max-width: 1100px) and (min-width: 820px)': {
            overflow: 'hidden',
            $nest: {
                '& .title': {
                    fontSize: '42px',
                },
                '& .subtitle': {
                    textAlign: 'center',
                    fontSize: '28px',
                    margin: '0 30px'
                },
                '& .steps_container': {
                    width: '90%'
                },
            }
        },

        '@media screen and (max-width: 820px)': {
            // backgroundColor: 'red',
            overflow: 'hidden',
            $nest: {
                '& .title': {
                    textAlign: 'center',
                    margin: '30px 20px',
                    fontSize: '34px',
                },
                '& .subtitle': {
                    textAlign: 'center',
                    fontSize: '28px',
                    margin: '0 30px'
                },
                '& .steps_container': {
                    width: '90%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    $nest: {
                        '& .steps': {
                            paddingTop: '300px',
                            margin: '30px 0',
                            $nest: {
                                '& .step_title': {
                                    top: 180,
                                    fontSize: '28px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamBold',
                                        }
                                    }
                                },
                                '& p': {
                                    margin: 'auto',
                                    fontFamily: 'GothamMedium',
                                    lineHeight: 1.2,
                                    fontSize: '15px',
                                },
                            }
                        }
                    },
                },
            }
        },

        '@media screen and (max-width: 420px) and (min-width: 320px)': {
            // backgroundColor: 'red',
            overflow: 'hidden',
            $nest: {
                '& .title': {
                    textAlign: 'center',
                    margin: '30px 20px',
                    fontSize: '24px',
                },
                '& .subtitle': {
                    textAlign: 'center',
                    fontSize: '24px',
                    margin: '0 20px'
                },
                '& .steps_container': {
                    margin: 0,
                },
                '& button': {
                    fontSize: '16px',
                    marginBottom: '50px'
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
        },
    },
})

export default HomeHowItWorkStyle