import { style } from "typestyle";
import TestBgImage from '../../../assets/images/testBg.png'

 const TestPageStyle = style({
     marginTop: '150px',
     $nest: {
         '& .logo': {
            position: 'absolute',
            top: 0
         },
         '& .form_container': {
            background: `url(${TestBgImage})`,
            backgroundSize: 'cover',
            width: '80%',
            margin: '0 auto',
            height: '70vh',
            $nest: {
                '& .welcome_seccion': {
                    display: 'flex',
                    height: '100%',
                    padding: '0 10px',
                    $nest: {
                        '& .welcome_seccion_text': {
                            width: '50%',
                            $nest: {
                                '& h1': {
                                    margin: '10%',
                                    marginTop: '30%',
                                    fontSize: '38px',
                                    fontFamily: 'GothamBold'
                                },
                                '& p': {
                                    margin: '10%',
                                    fontSize: '30px'
                                },
                            }
                        },
                        '& .welcome_seccion_image': {
                            width: '50%',
                            position: 'relative',
                            $nest: {
                                '& img': {
                                    position: 'absolute',
                                    top: 40,
                                    right: -45,
                                    boxShadow: '-6px 9px 0px 2px #000000',
                                    width: '600px',
                                    margin: 'auto'
                                }
                            }
                        }
                    }
                },
                '& .nickname_seccion': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '0 10px',
                },
                '& .test_seccion': {
                    height: '100%',
                    padding: '0',
                    $nest: {
                        '& .test_swiper': {
                            height: '100%',
                            $nest: {
                                '& .swiper-button-prev': {
                                    display: 'block'
                                },
                                '& .swiper-pagination-progressbar': {
                                    height: '30px'
                                }
                            }
                            
                        },
                        '& .swiper-slide': {
                            flexDirection: "column",
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            backgroundColor: 'rgba(255, 0, 0, 0);',
                            width: '100%',
                        },
                        '& .QuestionsSwiper': {
                            position: 'absolute',
                            left: '13%',
                            bottom: 120,
                            width: '70%',
                        },
                        '& .swiper-pagination-bullet': {
                            backgroundColor: 'red !important',
                        },
                        '& .swiper-pagination-bullet-active': {
                            backgroundColor: 'red'
                        },
                        '& .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction': {
                            display: 'none',
                        },
                        // '& .swiper-button-next, .swiper-button-prev':{
                        //     display: 'none'
                        // },
                        '& .navigations_buttons':{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            position: "absolute",
                            bottom: '20px',
                            zIndex: 1,
                            $nest: {
                                '& .prev, .next': {
                                    fontFamily: 'Montserrat',
                                    color: 'red',
                                    fontSize: '18px',
                                    cursor: 'pointer'
                                },
                            }
                        },
                        '& .title': {
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            fontSize: '55px',
                            position: "absolute",
                            top: '100px',
                            left: '150px',
                            color: 'white'
                        },
                        '& .back': {
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            fontSize: '20px',
                            position: "absolute",
                            top: '120px',
                            right: '300px',
                            color: 'white',
                            textDecoration: 'none',
                            zIndex: 1000
                        },
                
                        '& .question_number': {
                            backgroundColor: '#3A1B68',
                            padding: '10px 30px',
                            borderRadius: '40px',
                            $nest: {
                                '& h1': {
                                    color: 'white',
                                    fontSize: '35px',
                                    fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                }
                            }
                        },
                        '& .points': {
                            color: 'white',
                            fontSize: '59px',
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                        },
                        '& .serie': {
                            margin: '10px 0',
                            color: 'white',
                            fontSize: '19px',
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                        },
                        '& .question': {
                            margin: '10px 0',
                            color: 'white',
                            fontSize: '29px',
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                        },
                        '& .question_input': {
                            position: 'relative',
                            margin: '30px',
                            padding:'5px 0 5px 60px', /* Damos un padding de 60px para posicionar el elemento <i> en este espacio*/
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '80%',
                            color: 'white',
                            fontFamily: 'Montserrat',
                            fontSize: '22px',
                            $nest: {
                                '& label': {
                                    display: 'block',
                                    cursor: 'pointer',
                                    padding: '15px 15px',
                                    textAlign: "center",
                                    width: '200px',
                                    border: 'solid 2px #F32779',
                                    borderRadius: '50px'
                                },
                                '& input[type=radio]': {
                                    display: 'none',
                                    $nest: {
                                        '&:checked': {
                                            display: 'none'
                                        }
                                    }
                                },
                                '& input[type="radio"]:checked + label:before ': {
                                    display:' none'
                                },
                                'input[type="radio"]:checked + label': {
                                    padding: '15px 15px',
                                    background: '#F32779',
                                    borderRadius: '50px',
                                }
                            }
                        },
                        '& .progress_text': {
                            position: "absolute",
                            bottom: 60,
                            left: '38%',
                            display: 'block',
                            padding: '15px 15px',
                            textAlign: "center",
                            width: '270px',
                            border: 'solid 2px #9434D8',
                            borderRadius: '50px',
                            color: 'white',
                            fontSize: '12px',
                        },
                        '& .finishButton': {
                            position: "absolute",
                            bottom: 60,
                            padding: '15px 15px',
                            left: '40%',
                            height: '60px',
                            width: '260px',
                            border: 'solid 2px #9434D8',
                            borderRadius: '50px',
                            color: 'white',
                            backgroundColor: '#3A1B68',
                            color: 'white',
                            fontSize: '18px',
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            cursor: 'pointer',
                            zIndex: 2000,
                        },
                        '& .result_container': {
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            backgroundColor: 'rgba(255, 0, 0, 0);',
                            height: '100vh',
                            width: '75%',
                            margin: 'auto',
                            $nest: {
                                '& h1': {
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    fontSize: '60px',
                                    fontWeight: 400
                                },
                                '& a': {
                                    textDecoration: 'none',
                                    borderRadius: '50px',
                                    padding: '20px 40px',
                                    backgroundColor: '#9434D8',
                                    border: 'none',
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    fontSize: '22px',
                                    marginTop: '40px'
                                }
                            }
                        },
                        '& .question_container': {
                            paddingTop: '120px'
                        },
                        '& .get_email_seccion': {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                    }
                },
            }
         }
     }
 })

 export default TestPageStyle