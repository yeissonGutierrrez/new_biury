import { style } from "typestyle";

const HomeHowItWorkStyle = style({
    // backgroundColor: 'red',
    // height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '300px',
                    $nest: {
                        '& .circle': {
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
                        '& .step_title': {
                            fontFamily: 'GothamLight',
                            color: 'rgba(153, 38, 247, 1)',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamBold',
                                }
                            }
                        },
                        '& p': {
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
            marginBottom: '50px'
        }
    }
})

export default HomeHowItWorkStyle