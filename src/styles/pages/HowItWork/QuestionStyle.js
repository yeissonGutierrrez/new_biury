import { style } from "typestyle";

const QuestionStyle = style({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    $nest: {
        '& .photo': {
            margin: 'auto',
            width: '60%',
        },
        '& .myAccordion': {
            width: '80%',
            $nest: {
                '& .expandedIcon': {
                    color: 'white',
                    fontSize: '30px',
                }
            }
        },
        '& .myAccordionHeader': {
            margin: 'auto',
            backgroundColor: '#A125F4',
            border: 'solid 2px white',
            height: '100px',
            $nest: {
                '& h3': {
                    textAlign: 'center',
                    margin: 'auto',
                    color: 'white',
                    fontFamily: 'GothamBold',
                    fontSize: '24px',
                }
            }
        },
        '& .myAccordionContent': {
            margin: 'auto',
            backgroundColor: '#A125F4',
            border: 'solid 2px white',
            borderTop: 'none',
            $nest: {
                '& p': {
                    color: 'white',
                    fontFamily: 'GothamLight',
                    fontSize: '20px',
                    textAlign: 'center',
                }
            }
        },
        '@media screen and (max-width: 1200px)': {
            $nest: {
                '& .myAccordionHeader': {
                    $nest: {
                        '& h3': {
                            fontSize: '18px',
                        }
                    }
                },
            }
        },

        '@media screen and (max-width: 890px)': {
            $nest: {
                '& .myAccordion': {
                    width: '90%',
                    marginBottom: '100px',
                    $nest: {
                        '& .expandedIcon': {
                            color: 'white',
                            fontSize: '30px',
                        }
                    }
                },

                '& .myAccordionHeader': {
                    height: '60px',
                    $nest: {
                        '& h3': {
                            fontSize: '14px',
                        }
                    }
                },
            }
        },
        '@media screen and (max-width: 590px)': {
            width: '80%',
            margin: 'auto !important',
            $nest: {
                '& .myAccordion': {
                    width: '100%',
                },
            }
        },
        '@media screen and (max-width: 450px)': {
            width: '80%',
            $nest: {
                '& .photo': {
                    display: 'none',
                },
                '& .myAccordion': {
                    margin: '10px 0',
                },
                
            }
        },
    }
})

export default QuestionStyle