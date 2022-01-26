import { style } from "typestyle";

const FooterStyle = style({
    position: 'relative',
    height: '80vh',
    backgroundColor: '#FF6F5B',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    $nest: {
        '& .footer_logo': {
            position: 'absolute',
            top: 20,
            left: 70,
        },
        '& .footer_title_one': {
            fontFamily: 'cocoGothLight',
            fontSize: '32px',
            $nest: {
                '& strong': {
                    fontFamily: 'cocoGothSemiBold',
                }
            }
        },
        '& .footer_title_two': {
            fontFamily: 'cocoGoth',
            fontSize: '32px',
            lineHeight: 1,
            margin: 0
        },
        '& .footer_subtitle': {
            fontFamily: 'cocoGoth',
            fontSize: '20px',
            marginTop: '20px',
        },
        '& p': {
            fontFamily: 'cocoGothLight',
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
            $nest: {
                '& .footer_input': {
                    height: '52px',
                    width: '415px',
                    paddingLeft: '20px',
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
                '& .make_account__button': {
                    padding: '15px 50px',
                    fontSize: '20px',
                    fontFamily: 'cocoGoth',
                    backgroundColor: 'black',
                    color: '#D2D3D6',
                    textDecoration: 'none',
                    margin: '0 20px'

                },
            }
        },
        '& .links_container': {
            fontSize: '15px',
            fontFamily: 'cocoGoth',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '30px 0',
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
        }
    }
})

export default FooterStyle