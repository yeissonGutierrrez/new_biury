import { style } from "typestyle";
import userIcon from '../../../../assets/images/components/layout/Navbar/userIconBorder.svg'
import shopIcon from '../../../../assets/images/components/layout/Navbar/shopIcon.svg'
import instagramIcon from '../../../../assets/images/components/layout/Navbar/InstagramIcon.svg'
import wspIcon from '../../../../assets/images/components/layout/Navbar/wspIcon.svg'

const NavbarStyle = style({
    transition: 'top 0.5s',
    position: 'fixed',
    backgroundColor: '#242535',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 60px',
    width: '100vw',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    $nest: {
        '& .logo': {
            position: 'absolute',
            top: 15,
            left: '42%',
        },

        '& .list_menu': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            $nest: {
                '& .list': {
                    display: 'flex',
                },
                '& a': {
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    fontFamily: 'CocoGothSemiBold',
                    fontWeight: 500,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    margin: '15px 10px',
                    textAlign: "center",
                },
                '& hr': {
                    transform: 'rotate(180deg)',
                },
                '& .userIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${userIcon})`,
                    width: '20px',
                    height: '20px',
                    marginRight: '5px',
                    backgroundRepeat: 'no-repeat',
                },
                '& .shopIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${shopIcon})`,
                    width: '20px',
                    height: '20px',
                    marginLeft: '60px',
                    backgroundRepeat: 'no-repeat',
                },
                '& .instagramIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${instagramIcon})`,
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                },
                '& .wspIcon': {

                },
            }
        },

        '& .list_menu_mobile': {
            display: 'none',
            $nest: {
                '& .show': {
                    
                }
            }
        },
        
        '@media screen and (max-width: 1000px) and (min-width: 781px)': {
            padding: '30px 0',
            $nest: {
                '& .logo': {
                    position: 'absolute',
                    top: 15,
                    left: '45%',
                },
                '& .list_menu': {
                    width: '95%',
                    margin: 'auto',
                    $nest: {
                        '& a': {
                            fontSize: '14px',
                        },
                        '& .shopIcon': {
                            marginLeft: 0,
                        },
                    }
                }
            }
        },
        '@media screen and (max-width: 780px)': {
            padding: '30px 0',
            $nest: {
                '& .list_menu_mobile': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '90%',
                    margin: 'auto',
                    $nest: {
                        '& .logo_mobile': {
                            position: 'relative',
                            $nest: {
                                '& img': {
                                    width: '120px'
                                }
                            }
                        },

                        '& img': {
                            width: '60px'
                        },

                        '& .suscription': {
                            textDecoration: 'none',
                            color: 'white',
                            fontFamily: 'GothamBold',
                            fontSize: '26px'
                        },

                        '& .backdrop': {
                            display: 'flex !important',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            $nest: {
                                '& .logo_mobile': {
                                    position: 'relative',
                                    $nest: {
                                        '& img': {
                                            width: '150px'
                                        },
                                    }
                                },

                                '& .list': {
                                    width: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    $nest: {
                                        '& img': {
                                            width: '25px'
                                        }
                                    }
                                },

                                '& .link-page': {
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                    borderBottom: 'solid white 3px',
                                    paddingBottom: '20px',
                                    fontFamily: 'GothamMedium',
                                },

                                '& .login': {
                                    $nest: {
                                        '& a': {
                                            color: 'white',
                                            textDecoration: 'none',
                                            fontSize: '22px'
                                        },
                                        '& img': {
                                            width: '20px'
                                        },
                                        
                                    }
                                }
                            }
                        }
                            
                        
                    }
                },
                '& .list_menu': {
                    display: 'none'
                },
            }
        },

        '@media screen and (max-width: 515px) and (min-width: 320px)': {
            $nest: {
                '& .list_menu_mobile': {
                    $nest: {
                        '& .logo_mobile': {
                            position: 'relative',
                            $nest: {
                                '& img': {
                                    width: '80px'
                                }
                            }
                        },

                        '& img': {
                            width: '45px'
                        },

                        '& .suscription': {
                            textAlign: 'center',
                            fontWeight: 900,
                            fontSize: '18px',
                        }
                            
                        
                    }
                },
            }
        },
    },
})

export default NavbarStyle