const { style } = require("typestyle");

const BeautyMembersSeccionStyle = style({
    backgroundColor: 'red',
    height: '70vh',
    display: 'flex',
    $nest: {
        '& .seccion1': {
            position: "relative",
            width: '60%',
            backgroundColor: 'white',
            $nest: {
                '& .content': {
                    position: "absolute",
                    top: 90,
                    left: 80,
                    $nest: {
                        '& .links': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '200px',
                            margin: '10px 0'
                        },
                        '& .subtitle': {
                            fontSize: '26px',
                            fontFamily: 'GothamBold',
                            margin: 0,
                            textTransform: 'uppercase',
                            color: '#9926F7',
                        },
                        '& .hashtag': {
                            textTransform: 'uppercase',
                            fontSize: '40px',
                            fontFamily: 'GothamBold',
                            lineHeight: 1.3,
                            margin: 0,
                            $nest: {
                                '& span': {
                                    fontFamily: 'GothamLight',
                                }
                            }
                        },
                        '& .heart_icon': {
                            float: 'right',
                            marginTop: '-70px'
                        },
                        '& .gallery': {
                            display: 'flex',
                            marginTop: '30px',
                            justifyContent: 'space-between',
                            width: '75vw',
                            $nest: {
                                '& .image_container': {
                                    position: 'relative',
                                    width: '250px',
                                    height: '250px',
                                    $nest: {
                                        '& img': {
                                            height: '100%',
                                            width: '100%'
                                        },
                                        '& .image_hover': {
                                            position: 'absolute',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '12px',
                                            top: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'rgba(202, 202, 202, 0.58)',
                                            backdropFilter: 'blur(12px)',
                                            $nest: {
                                                '& img': {
                                                    width: '25px',
                                                    marginRight: '10px'
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        }
                    }
                }
            }
        },
        '& .seccion2': {
            width: '40%',
            backgroundColor: '#67FF6C'
        },
    }
})

export default BeautyMembersSeccionStyle