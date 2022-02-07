import { style } from "typestyle";

const FooterStyle = style({
    position: 'relative',
    minHeight: '80vh',
    backgroundColor: '#FF6F5B',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    $nest: {
        '& .footer_logo': {
            height: '100%',
        },
        '& .footer_title_one': {
            fontFamily: 'GothamBold',
            fontSize: '32px',
            margin: 0,
            marginTop: '40px',
            marginBottom: '20px',
            $nest: {
                '& strong': {
                    fontFamily: 'cocoGothSemiBold',
                }
            }
        },
        '& p': {
            color: 'white',
            fontFamily: 'GothamBold',
            fontSize: '20px',
            maxWidth: '820px',
            textAlign: "center"
        },
        '& .suscribe_content': {
            display: 'flex',
            margin: '40px 0',
            $nest: {
                "& .suscribe_button": {
                    padding: '10px 60px',
                    margin: '0 20px',
                    backgroundColor: 'white',
                    color: 'black',
                    textDecoration: 'none',
                    fontFamily: 'cocoGoth',
                    fontSize: '22px'
                }
            }
        },
        '& .input_container': {
            display: 'flex',
            $nest: {
                '& .footer_input': {
                    border: 'solid black 3px',
                    height: '52px',
                    width: '415px',
                    paddingLeft: '20px',
                    marginLeft: '20px',
                    outline: 'none',
                    fontSize: '20px',
                    fontFamily: 'cocoGoth',
                    color: '#202230',
                    $nest: {
                        '&::placeholder': {
                            fontSize: '20px',
                            fontFamily: 'cocoGoth',
                            color: '#202230',
                            
                        }
                    }
                },
            }
        },
        '& .make_account__button': {
            width: '500px',
            padding: '20px 0',
            textAlign: 'center',
            fontSize: '20px',
            fontFamily: 'cocoGoth',
            backgroundColor: 'black',
            color: '#D2D3D6',
            textDecoration: 'none',
            margin: '50px 20px'

        },
        '& .links_container': {
            display: 'flex',
            margin: '40px 0',
            $nest: {
                '& .links_text': {
                    color: 'black',
                    margin: '0 20px',
                    textDecoration: 'none',
                },
                '& .links_icons': {
                    margin: '0 10px',
                },
            }
        },
        '@media screen and (max-width: 670px) and (min-width: 320px)': {
            padding: '20px 0',
            $nest: {
                '& .footer_title_one': {
                    fontSize: '22px',
                    color: 'white',
                },
                '& p': {
                    fontSize: '16px',
                    padding: '0 20px',
                    fontFamily: 'GothamLight',
                },
                '& .input_container': {
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    $nest: {
                        '& img': {
                            width: '200px',
                            marginBottom: '20px'
                        },
                        '& .footer_input': {
                            width: '80%',
                            margin: 0
                        },
                    }
                },
                '& .make_account__button': {
                    width: '80%',
                    fontSize: '14px',
                    marginBottom: 0
                },

                '& .links_container': {
                    display: 'flex',
                    margin: '30px 0',
                    $nest: {
                        '& .links_icons': {
                            width: '25px'
                        },
                    }
                },
            }
        },
    }
})

export default FooterStyle