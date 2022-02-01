import { style } from "typestyle";

 const QuizPageStyle = style({
     position: 'relative',
     marginTop: '90px',
     height: '100vh',
     $nest: {
         '& .QuizRegister': {
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             paddingTop: '190px',
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
                    top: 30,
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
                                    lineHeight: 0.5
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
                   top: 0,
                   left: 0
                },

                '& button': {
                    fontSize: '22px',
                    fontFamily: 'GothamBold',
                    backgroundColor: '#00FF58',
                    width: '290px',
                    marginTop: '90px',
                    padding: '10px',
                    border: 'none',
                    $nest: {
                        '& span': {
                            fontFamily: 'GothamBold',
                        }
                    }
                }
            }
         },
     }
 })

 export default QuizPageStyle