import { style } from 'typestyle';

const TestSeccionStyle = style({
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100vh',
    $nest: {
        '& .home_test_image__container': {
            marginTop: '-2px',
            height: '100%',
            width: '55%',
            position: 'relative',
            $nest: {
                '& .bgImage': {
                    height: '100%',
                    width: '100%',
                    margin: 0,
                    zIndex: 0
                },
                '& .faceIcon': {
                    position: 'absolute',
                    $nest: {
                        '& .circle': {
                            position: 'absolute',
                            top: 0,
                            padding: '5px',
                            height: '20px',
                            width: '20px',
                            backgroundColor:'rgba(255, 255, 255, 0.54)',
                            borderRadius: '50%',
                            zIndex: 1,
                            border: 'solid 3px white'
                        },
                        '& .circle_animated': {
                            position: 'absolute',
                            top: 3,
                            left: 3,
                            height: '30px',
                            width: '30px',
                            backgroundColor:'rgba(255, 255, 255, 0.54)',
                            borderRadius: '50%',
                        },
                        // '& img': {
                        //     position: 'absolute',
                        //     top: 0,
                        //     zIndex: 3
                        // }
                        
                    }
                },
                '& .iconOne': {
                    top: '130px',
                    left: '150px',
                },
                '& .iconTwo': {
                    top: '130px',
                    left: '440px',
                },
                '& .iconTree': {
                    top: '230px',
                    left: '340px',
                },
                '& .image_mask': {
                    position:'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    right: 0,
                    zIndex: 2,
                    backgroundColor: '#fff',
                }
            }
        },
        '& .home_test_title__container': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            paddingLeft: '80px',
            justifyContent: 'center',
            height: '100%',
            width: '45%',
            backgroundColor: '#B3F12D',
            $nest: {
                '& .home_test_title': {
                    width: '80%',
                    margin: '0',
                    fontSize: '70px',
                    fontWeight: '900',
                },
                '& .home_test_subtitle1': {
                    width: '80%',
                    fontFamily: 'CocoGothSemiBold',
                    margin: '30px 0',
                    fontSize: '24px',
                    fontWeight: '900',
                },
                '& .home_test_subtitle2': {
                    width: '80%',
                    fontFamily: 'CocoGothLight',
                    margin: '30px 0',
                    fontSize: '24px',
                    fontWeight: '900',
                    $nest: {
                        '& span': {
                            fontFamily: 'CocoGothSemiBold',
                        }
                    }
                },
                '& .home_test_button': {
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '15px 30px',
                    marginTop: '10px',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontFamily: 'Montserrat',
                    fontWeight: '900',
                },
                '& .star': {
                    position: 'absolute',
                    top: '48%',
                    right: '-50px',
                    zIndex: 1

                }
            }
        }
    }
})


export default TestSeccionStyle