import { style } from "typestyle";





const HomeMembershipSeccionStyle = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    width: '100vw',
    marginBottom: '180vh',
    $nest: {
        '& .seccion1_wrapper': {
            position: 'relative',
            display: 'flex',
            overflow: 'scroll',
            justifyContent: 'space-between',
            height: '100%',
            width: '100vw',
            $nest: {
                    '& .title_seccion': {
                        position: 'relative',
                        paddingLeft: '120px',
                        margin: 'auto',
                        width: '50%',
                        $nest: {
                            '& h1': {
                                fontFamily: 'CocoGothSemiBold',
                                lineHeight: 1,
                                fontSize: '95px',
                                textTransform: 'uppercase'
                            },
                            '& .ray': {
                                position: "absolute",
                                top: 70,
                                right: 160
                            }
                        }
                    },
                    '& .info_seccion': {
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: '#6962FD',
                        width: '50%',
                        padding: 0,
                        paddingLeft: '200px',
                        $nest: {
                            '& .info_title': {
                                fontFamily: 'CocoGothLight',
                                fontSize: '24px',
                                color: 'white',
                                $nest: {
                                    '& span': {
                                        fontFamily: 'CocoGothSemiBold',
                                        fontSize: '60px',
                                        lineHeight: 1
                                    }
                                }
                                
                            },
                            '& .info_subtitle': {
                                fontFamily: 'CocoGothSemiBold',
                                fontSize: '24px',
                                color: 'white',
                                lineHeight: 1.1,
                                $nest: {
                                    '& span': {
                                        color: '#67FF6C',
                              
                                    },
                                }
                                
                            },
                            '& ul': {
                                // fontFamily: 'CocoGothSemiBold',
                                margin: 0,
                                marginLeft: 20,
                                padding: 0,
                                $nest: {
                                    '& li': {
                                        maxWidth: '380px',
                                        fontSize: '17px',
                                        lineHeight: '27px',
                                    }
                                }
                            },
                            '& .center_image': {
                                position: 'absolute',
                                left: -120,
            
                                borderRadius: '50%'
                            },
                            '& .membership_button': {
                                position: 'absolute',
                                backgroundColor: '#202230',
                                fontFamily: 'CocoGothLight',
                                fontSize: '20px',
                                padding: '20px 60px',
                                margin: 0,
                                transform: 'rotate(-90deg)',
                                right: '-95px',
                                border: 'none',
                                color: 'white'
                            }
                    }
                }
            },
        },
        '& .membership_seccion': {
            position: 'absolute',
            top: 0,
            right: '-101vw',
            width: '101vw',
            height: '100%',
            background: 'red',
            $nest: {
                '& .membership_seccion_wrapper': {
                    position: 'relative',
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    background: 'blue'
                }
            }
        }
    }
})

export default HomeMembershipSeccionStyle