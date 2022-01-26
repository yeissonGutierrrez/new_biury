import { style } from "typestyle";

const HeroSeccionStyle = style({
    position: "relative",
    display: 'flex',
    height: '120vh',
    $nest: {
        '& .hero_title__container': {
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'start',
            alignItems: 'start',
            width: '65%',
            paddingTop: '270px',
            paddingLeft: '20%',
            backgroundColor: '#00CFBE',
            $nest: {
                '& .hero_title_wrapper': {
                    visibility: 'hidden',
                },
                '& .hero_title': {
                    fontSize: '58px',
                    fontFamily: 'CocoGothLight',
                    lineHeight: '1',
                    color: '#202230',
                    marginBottom: '0px',
                },
                '& .hero_subtitle': {
                    color: 'white',
                    fontSize: '60px',
                    textTransform: 'uppercase',
                    fontFamily: 'CocoGothSemiBold',
                    lineHeight: '1',
                    margin: '30px 0',
                },
                '& .hero_suscribe__button': {
                    textAlign: "center",
                    fontFamily: 'cocoGoth',
                    color: '#fff',
                    fontSize: '20px',
                    textDecoration: 'none',
                    backgroundColor: '#202230',
                    width: '290px',
                    padding: '15px 50px',
                    margin: '30px 0',
                },
                '& img': {
                    margin: 0,
                }
            }
        },
        '& .hero_image_container': {
            position: "relative",
            width: '35%',
            $nest: {
                '& .hero_image_wrapper': {
                    overflow: 'hidden',
                    width: '550px',
                    position: 'absolute',
                    padding: '20px',
                    paddingRight: 0,
                    top: '20%',
                    left: '120px',
                    position: 'relative',
                    zIndex: 2,
                    $nest: {
                        '& img': {
                            // visibility: 'hidden'
                            border: 'none',
                            boxShadow: '-10px 10px 0px 0px #B3F12D',
                        },
                        '& .mask': {
                            position:'absolute',
                            bottom: 22,
                            width: '97%',
                            right: 0,
                            height: '588px',
                            backgroundColor: '#6962FD',
                        },
                        '& .mask2': {
                            position:'absolute',
                            bottom: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#fff',
                        },
                    }
                }
            }
        },
    }
    
})

export default HeroSeccionStyle