import { style } from "typestyle";

const InfoProfileStyle = style({
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    $nest: {
        '& .image-container': {
            position: 'relative',
            height: '600px',
            width: '500px',
            backgroundColor: '#FF7065',
            $nest: {
                '& .ProfilePhoto': {
                    position: 'absolute',
                    top: 40,
                    right: '-10%',
                }
            }
        },
        '& .info': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            paddingLeft: '10%',
            $nest: {
                '& h1': {
                    fontFamily: 'GothamBold',
                    fontSize: '26px',
                    margin: '20px 0',
                },
                '& p': {
                    fontFamily: 'GothamLight',
                    fontSize: '20px',
                    $nest: {
                        '& span': {
                            fontFamily: 'GothamBold',
                        }
                    }
                }
            }
        },
        '@media screen and (max-width: 940px)': {
            $nest: {
                '& .image-container': {
                    height: '500px',
                    width: '400px',
                    $nest: {
                        '& .ProfilePhoto': {
                            position: 'absolute',
                            top: 40,
                            right: '-20%',
                            width: '400px'
                        }
                    }
                },
                '& .info': {
                    padding: '0 2% 0 12%',
                },
            }
        },
        '@media screen and (max-width: 620px)': {
            flexDirection: 'column',
            alignItems: 'center',
            $nest: {
                '& .image-container': {
                    height: '350px',
                    width: '340px',
                    $nest: {
                        '& .ProfilePhoto': {
                            position: 'absolute',
                            top: 20,
                            right: '-30px',
                            width: '300px'
                        }
                    }
                },
                '& .info': {
                    padding: 0,
                    width: '80%',
                    textAlign: 'center',
                },
            }
        },
    }
})

export default InfoProfileStyle