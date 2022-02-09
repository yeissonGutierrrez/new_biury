import { style } from "typestyle";

import bgHeroImage from '../../../assets/images/Sellers/bgHeroImageSellers.png'


const SellersStyle = style({
    $nest: {
        '& .hero-image': {
            backgroundImage: `url(${bgHeroImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            height: '70vh',
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
                            border: 'solid 2px',
                            margin: '50px 0',
                            width: '40%',
                        },
                        '& .pharagrap': {
                            fontFamily: 'GothamLight',
                            fontSize: '35px',
                            textAlign: 'center',
                        },


                        '& .sus-button': {
                            width: '80%',
                        },

                        '& .best-sellers-month': {
                            width: '100%',
                            margin: '100px 0',
                            $nest: {
                                '& .month-title': {
                                    margin: '50px 50px'
                                },

                                '& .products-container': {
                                    width: '82%',
                                    margin: 'auto',
                                    overflow: 'hidden',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                                    padding: '30px 0',
                                    gap: '30px 10px',
                                    marginBottom: '50px',
                                    $nest: {
                                        '& .item': {
                                            margin: '0 20px',
                                        }
                                    }
                                }
                            }
                        },
                        '& .brands-title': {
                            textAlign: 'center',
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

        '& .wave': {
            marginTop: '100px',
            marginBottom: '-5px',
        },

        '& .reviews-seccion': {
            position: 'relative',
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

                '& .titleMobile': {
                    display: 'none'
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
        },

        '@media screen and (max-width: 900px)': {
            $nest: {
                '& .main-wrapper': {
                    $nest: {
                        '& .main': {
                            $nest: {
                                '& .title': {
                                    fontSize: '65px',
                                },

                                '& .best-sellers-month': {
                                    width: '100%',
                                    margin: '100px 0',
                                    $nest: {
                                        '& .month-title': {
                                            width: '270px'
                                        },
                                        '& .products-container': {
                                            width: '80%',
                                        }
                                    }
                                },

                                '& .pharagrap': {
                                    fontSize: '32px',
                                    margin: '0 20px'
                                },

                                '& .brands-title': {
                                    fontSize: '48px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamLight',
                                        }
                                    }
                                },
                            }
                        },
                    },
                },

                '& .reviews-seccion': {
                    $nest: {
                        '& .reviews-info': {
                            marginRight: '20%',
                        },
                    }
                }
            }
        },

        '@media screen and (max-width: 550px)': {
            $nest: {
                '& .hero-image': {
                    height: '50vh',
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
                            $nest: {
                                '& .title': {
                                    fontSize: '43px',
                                    marginTop: '40px'
                                },

                                '& .line': {
                                    margin: '40px 0',
                                },

                                '& .best-sellers-month': {
                                    $nest: {
                                        '& .month-title': {
                                            width: '220px',
                                            margin: '0 0 30px 30px',
                                        },
                                    }
                                },

                                '& .sus-button': {
                                    width: '70%',
                                    $nest: {
                                        '& button': {
                                            fontSize: '20px'
                                        }
                                    }
                                },

                                '& .pharagrap': {
                                    fontSize: '22px',
                                },
                            }
                        },
                    },
                },
                '& .reviews-seccion': {
                    paddingBottom: '50px',
                    $nest: {
                        '& .reviews-info': {
                            color: 'white',
                            textAlign: 'center',
                            marginRight: 0,
                            $nest: {
                                '& h1': {
                                    fontSize: '32px',
                                    marginBottom: '50px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamLight',
                                        }
                                    }
                                },
                                '& p': {
                                    fontSize: '18px',
                                }
                            }
                        },
                        '& .title': {
                            fontSize: '26px',
                            margin: '0 10px',
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
                            width: '80%',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            $nest: {
                                '& .comment-input': {
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
                                    fontSize: '18px',
                                    margin: '50px auto',
                                    height: '50px',
                                    width: '220px',
                                    float: 'none',
                                },
                            }
                        },
        
                        '& .button-wrapper': {
                            marginTop: '40px',
                            width: '70%',
                            $nest: {
                                '& button': {
                                    fontSize: '18px',
                                    height: '70px'
                                },
                                '& .border': {
                                    height: '70px'
                                }
                            }
                        },
        
                    }
                },
            }
        },

        '@media screen and (max-width: 420px)': {
            $nest: {
                '& .main-wrapper': {
                    $nest: {
                        '& .main': {
                            $nest: {
                                '& .title': {
                                    fontSize: '33px',
                                },

                                '& .best-sellers-month': {
                                    $nest: {
                                        '& .month-title': {
                                            width: '180px'
                                        },
                                    }
                                },

                                '& .sus-button': {
                                    width: '90%',
                                    $nest: {
                                        '& button': {
                                            fontSize: '20px'
                                        }
                                    }
                                },

                                '& .pharagrap': {
                                    fontSize: '22px',
                                },

                                '& .brands-title': {
                                    fontSize: '24px',
                                },
                            }
                        },
                    },
                },

                '& .reviews-seccion': {
                    $nest: {
                        '& .reviews-info': {
                            $nest: {
                                '& h1': {
                                    fontSize: '28px',
                                    marginBottom: '50px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamLight',
                                        }
                                    }
                                },
                                '& p': {
                                    fontSize: '16px',
                                }
                            }
                        },
                        '& .title': {
                            display: 'none'
                        },

                        '& .titleMobile': {
                            display: 'block',
                            fontSize: '27px',
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
        
                        '& .button-wrapper': {
                            marginTop: '40px',
                            width: '80%',
                            $nest: {
                                '& button': {
                                    fontSize: '18px',
                                    height: '70px'
                                },
                                '& .border': {
                                    height: '70px'
                                }
                            }
                        },
        
                    }
                },
            }
        },
    }
})

export default SellersStyle