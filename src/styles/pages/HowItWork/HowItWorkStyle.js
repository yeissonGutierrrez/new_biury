import { style } from "typestyle";

const HowItWorkStyle = style({
    backgroundColor: 'white',
    height: '150vh',
    padding: '200px 0',
    $nest: {
        '& .title': {
            textAlign: "center",
            fontFamily: 'CocoGothSemiBold',
            $nest: {
                '& span': {
                    color: '#00CFBE'
                }
            }
        },
        '& .steps_container': {
            display: 'grid',
            width: '65%',
            marginTop: '50px',
            gridTemplateAreas: "'image1 text1' 'text2 image2' 'image3 text3'",
            gridGap: 15,
            margin: 'auto',
            $nest: {
                '& .step_imageLeft': {
                    width: '500px',
                    $nest: {
                        '& img': {
                            boxShadow: '-5px 10px 0px 0px #FFDBE9',
                            width: '100%',
                            height: '100%',
                            margin: 0,
                            padding: 0,
                        }
                    }
                },
                '& .step_imageRight': {
                    width: '500px',
                    $nest: {
                        '& img': {
                            boxShadow: '8px 10px 0px 0px #99ECE5',
                            width: '100%',
                            height: '100%',
                            margin: 0,
                            padding: 0
                        }
                    }
                },
                '& .step_text': {
                    margin: 'auto',
                    width: '500px',
                    paddingLeft: '15%',
                    paddingTop: '20px',
                    gridTemplateAreas: "'image1 '",
                    $nest:{
                        '& .step_number': {
                            margin: '20px 0',
                            fontSize: '70px',
                            lineHeight: 1
                        },
                        '& .step': {
                            margin: '20px 0',
                            fontSize: '44px',
                            lineHeight: 1
                        },
                        '& .step_subtitle': {
                            margin: '20px 0',  
                            fontFamily: 'CocoGothLight',
                            fontSize: '24px',
                            lineHeight: 1
                        },
                        '& hr': {
                            width: '52px',
                            float: "left"
                        },
                    },
                },
                '& .image1': {
                    gridArea: 'image1'
                },
                '& .image2': {
                    gridArea: 'image2'
                },
                '& .image3': {
                    gridArea: 'image3'
                },

                '& .text1': {
                    gridArea: 'text1'
                },
                '& .text2': {
                    gridArea: 'text2'
                },
                '& .text3': {
                    gridArea: 'text3'
                },
            }
        },
        '& .start_button': {
            backgroundColor: '#B3F12D',
            display: 'block',
            width: '200px',
            textAlign: "center",
            padding: '15px 0',
            textDecoration: 'none',
            margin: ' 100px auto',
            fontFamily: 'CocoGothSemiBold',
            fontWeight: 700,
            color: '#202230'
            
        }
    }
})

export default HowItWorkStyle