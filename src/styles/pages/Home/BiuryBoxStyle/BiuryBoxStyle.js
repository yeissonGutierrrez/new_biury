import { style } from "typestyle";

import biuryBoxImage from '../../../../assets/images/Home/Biury_Fotos-02.png'

const BiuryBoxStyle = style({
    display: 'flex',
    height: '140vh',
    width: '100%',
    $nest: {
        '& .biuryBox_image': {
            background: `url(${biuryBoxImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '50%',
            height: '100%'
        },
        '& .biuryBox_info': {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            width: '50%',
            backgroundColor: '#9926F7',
            $nest: {
                '& .biuryBox_title': {
                    paddingTop: '60px',
                    color: '#67FF6C',
                    fontFamily: 'GothamBold',
                    fontSize: '40px',
                    $nest: {
                        '& span': {
                            fontFamily: 'GothamLight',
                        }
                    }
                },
                '& .info': {
                    borderBottom: 'solid #67FF6C 5px',
                    width: '70%',
                    paddingBottom: '10px',
                    $nest: {
                        '& h3': {
                            fontFamily: 'GothamBold',
                            color: 'white',
                            fontSize: '24px',
                            textAlign: 'center',
                            lineHeight: 1.4,
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamLight',
                                }
                            }
                        }
                    }
                },
                '& .biuryBox_big_title': {
                    fontFamily: 'GothamBold',
                    fontSize: '40px',
                    textTransform: 'uppercase',
                    color: 'white',   
                },
                '& p': {
                    fontFamily: 'GothamBold',
                    fontSize: '24px',
                    color: 'white',
                    textTransform: 'capitalize',
                    margin: 0
                },
                '& a': {
                    fontFamily: 'GothamLight',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '24px',
                    margin: 0
                },
                '& .biuryBox_subtitle': {
                    fontFamily: 'GothamBold',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '24px',
                    textTransform: 'capitalize'
                },
                '& button': {
                    fontFamily: 'GothamLight',
                    border: 'none',
                    backgroundColor: '#00FF58',
                    padding: '20px 40px',
                    marginBottom: '60px',
                    fontSize: '20px',
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

export default BiuryBoxStyle