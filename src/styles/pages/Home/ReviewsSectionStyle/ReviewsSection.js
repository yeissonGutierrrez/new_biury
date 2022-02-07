import { style } from "typestyle";



const ReviewsSectionStyle = style({
    backgroundColor: '#242535',
    padding: '40px 0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    $nest: {
        '& .title': {
            color: '#67FF6C',
            zIndex: 2,
            $nest: {
                '& span': {
                    color: '#B3F12D'
                }
            }
        },
        '& .subtitle': {
            color: 'white',
            margin: 0,
            fontSize: '18px',
            fontFamily: 'CocoGothLight',
            fontWeight: 400,
            $nest: {
                '& span': {
                    fontWeight: 700,
                    fontFamily: 'CocoGothSemiBold',
                }
            }
        },
        '& button': {
            fontSize: '20px',
            fontFamily: 'GothamLight',
            backgroundColor: '#FF7065',
            border: 'none',
            padding: '20px',
            margin: 'auto',
            $nest: {
                '& span': {
                    fontFamily: 'GothamBold',
                }
            }
        },
        '@media screen and (max-width: 1100px) and (min-width: 820px)': {
            $nest: {
                '& .title': {
                    fontSize: '42px',
                },
                '& .subtitle': {
                    fontSize: '22px',
                    $nest: {
                        '& span': {
                            fontFamily: 'GothamLight',
                        }
                    }
                },
                    

            }
        },

        '@media screen and (max-width: 820px)': {
            $nest: {
                '& .title': {
                    textAlign: 'center',
                    margin: '30px 20px',
                    fontSize: '34px',
                },
                '& .subtitle': {
                    fontSize: '20px',
                    $nest: {
                        '& span': {
                            fontFamily: 'GothamLight',
                        }
                    }
                },
                
            }
        },

        '@media screen and (max-width: 420px) and (min-width: 320px)': {
            $nest: {
                '& .title': {
                    textAlign: 'center',
                    margin: '30px 20px',
                    fontSize: '24px',
                },
            }
        },
    }
})

export default ReviewsSectionStyle