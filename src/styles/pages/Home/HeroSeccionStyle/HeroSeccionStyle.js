import { style } from "typestyle";

import bgImage from '../../../../assets/images/Home/HeroSeccion/cheerful-young-female-model-has-pleasant-smile-covers-eye-with-cosmetic-sponge-enjoys-all-benefits-of-patches-reduces-wrinkles-wears-wrapped-towel-on-head-has-skincare-routine-after-awakening.jpg'


const HeroSeccionStyle = style({
    position: "relative",
    backgroundImage: `url(${bgImage})`,
    // marginTop: '100px',
    backgroundPosition: 'start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '120vh',
    $nest: {
        '& .hero_container': {
            $nest: {
                '& .whatsapp_button': {
                    position: 'absolute',
                    bottom: 60,
                    right: 80,
                    zIndex: 1,
                },
                '& .info_container': {
                    position: 'absolute',
                    top: 350,
                    right: 80,
                    bottom: 300,
                    maxWidth: '780px',
                    textAlign: 'end',
                    $nest: {
                        '& h1': {
                            fontFamily: 'GothamBold',
                            marginBottom: '10px',
                            fontSize: '36px',
                        },
                        '& p': {
                            fontFamily: 'GothamLight',
                            marginBottom: '40px',
                            fontSize: '25px',
                            fontWeight: 300
                        },
                        '& button': {
                            backgroundColor: '#FF6B63',
                            border: 'none',
                            padding: '20px',
                            fontFamily: 'GothamLight',
                            fontSize: '22px',
                            fontWeight: 'normal',
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamBold',
                                }
                            }
                        }
                    }
                }
            }
        },
        '& .wave': {
            position: 'absolute',
            bottom: 0,
        }
    }
    
})

export default HeroSeccionStyle