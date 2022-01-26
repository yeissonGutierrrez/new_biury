import { style } from "typestyle";

const ParallaxGaleryItemStyle = style({
    backgroundColor: '#FF6F5B',
    height: '455px',
    width: '300px',
    $nest: {
        '& img': {
            width: '100%'
        },
        '& .text': {
            fontSize: '34px',
            color: '#202230',
            fontSize: '34px',
            padding: '20px 30px',
            $nest: {
                '& .text_light': {
                    fontFamily: 'CocoGothLight',
                },
                '& .text_bold': {
                    fontFamily: 'CocoGothSemiBold',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                },
            }
        }
    }
})

export default ParallaxGaleryItemStyle