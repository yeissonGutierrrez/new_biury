const { style } = require("typestyle");

const BeautyMembersSeccionStyle = style({
    position: 'relative',
    backgroundColor: 'red',
    minHeight: '70vh',
    display: 'flex',
    $nest: {
        '& .seccion1': {
            position: "relative",
            width: '60%',
            backgroundColor: 'white',
            $nest: {
                '& .content': {
                    position: "absolute",
                    top: 90,
                    left: 80,
                    $nest: {
                        '& .links': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '200px',
                            margin: '10px 0'
                        },
                        '& .subtitle': {
                            fontSize: '26px',
                            fontFamily: 'GothamBold',
                            margin: 0,
                            textTransform: 'uppercase',
                            color: '#9926F7',
                        },
                        '& .hashtag': {
                            textTransform: 'uppercase',
                            fontSize: '40px',
                            fontFamily: 'GothamBold',
                            lineHeight: 1.3,
                            margin: 0,
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamLight',
                                }
                            }
                        },
                        '& .heart_icon': {
                            float: 'right',
                            marginTop: '-70px'
                        },
                        '& .gallery-mobile': {
                            display: 'none'
                        },
                        '& .gallery': {
                            display: 'flex',
                            marginTop: '30px',
                            justifyContent: 'space-between',
                            width: '75vw',
                            $nest: {
                                '& .image_container': {
                                    position: 'relative',
                                    width: '250px',
                                    height: '250px',
                                    $nest: {
                                        '& img': {
                                            height: '100%',
                                            width: '100%'
                                        },
                                        '& .image_hover': {
                                            position: 'absolute',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            top: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'rgba(202, 202, 202, 0.58)',
                                            backdropFilter: 'blur(12px)',
                                            $nest: {
                                                '& img': {
                                                    width: '25px',
                                                    marginRight: '10px'
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        }
                    }
                }
            }
        },
        '& .seccion2': {
            width: '40%',
            backgroundColor: '#67FF6C'
        },
        '& .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction': {
            display: 'none',
        },
        '& .swiper-button-next, .swiper-button-prev':{
            display: 'none'
        },
        '@media screen and (max-width: 1400px) and (min-width: 1160px)': {
            $nest: {
                '& .seccion1': {
                    $nest: {
                        '& .content': {
                            $nest: {
                                '& .gallery': {
                                    width: '90vw',
                                }
                            }
                        }
                    }
                },
            }
        },

        '@media screen and (max-width: 1159px)': {
            $nest: {
                '& .seccion1': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '80px',
                    width: '100%',
                    $nest: {
                        '& .content': {
                            position: 'static',
                            $nest: { 
                                '& .links': {
                                    margin: '10px 50px'
                                },
                                '& .hashtag': {
                                    fontSize: '30px',
                                    margin: '10px 50px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamLight',
                                        }
                                    }
                                },
                                '& .subtitle': {
                                    fontSize: '22px',
                                    margin: '10px 50px',
                                    $nest: {
                                        '& span': {
                                            fontFamily: 'GothamLight',
                                        }
                                    }
                                },
                                '& .heart_icon': {
                                    display: 'none',
                                },
                                '& .gallery': {
                                    display: 'grid',
                                    margin: '80px auto',
                                    width: '80%',
                                    gap: '50px 15px',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                                }
                            }
                        }
                    }
                },
                '& .seccion2': {
                    display: 'none',
                },
                
            }
        },

        '@media screen and (max-width: 650px) and (min-width: 320px)': {
            $nest: {
                '& .seccion1': {
                    $nest: {
                        '& .content': {
                            $nest: {
                                '& .gallery-mobile': {
                                    position: 'relative',
                                    display: 'block',
                                    margin: 'auto',
                                    width: '90vw',
                                    padding: '50px 0px',
                                    boxSizing: "border-box",
                                    $nest :{
                                        '& .swiper-slide': {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '320px !important',
                                            paddingBottom: '50px'
                                        },
                                        '& .navigations_buttons':{
                                            position: "absolute",
                                            top: '45%',
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'space-between',
                                            zIndex: 3,
                                            $nest: {
                                                '& .prev, .next': {
                                                    fontFamily: 'Montserrat',
                                                    color: 'black',
                                                    fontSize: '18px',
                                                    cursor: 'pointer',
                                                    backgroundColor: 'blue',
                                                    borderRadius: '50%'
                                                },
                                                '& .prev': {
                                                    backgroundColor: '#202230'
                                                },
                                                '& .next': {
                                                    backgroundColor: '#202230'
                                                },
                                            }
                                        },
                                    }
                                },
                                '& .subtitle': {
                                    textAlign: 'center',
                                    margin: '10px',
                                    color: 'black',
                                    paddingBottom: '50px',
                                    $nest: {
                                        '& span': {
                                        }
                                    }
                                },
                                '& .gallery': {
                                    display: 'none',
                                },
                                '& .links': {
                                    position: 'absolute',
                                    top: 180,
                                    right: 0,
                                    left: 0,
                                    margin: 'auto',
                                    width: '40%',
                                    $nest: {
                                        '& img': {
                                            width: '25px',
                                        }
                                    }
                                },
                                '& .hashtag': {
                                    display: 'none'
                                },
                            }
                        }
                    }
                },
            }
        },
    }
})

export default BeautyMembersSeccionStyle