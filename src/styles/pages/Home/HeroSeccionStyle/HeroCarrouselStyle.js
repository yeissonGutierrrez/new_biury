import { style } from "typestyle";

const HeroCarrouselStyle = style({
    maxWidth: '80%',
    maxHeight: '80vh',
    margin: '120px auto',
    paddingTop: '0px',
    overflow: 'scroll',
    $nest: {
        '&::-webkit-scrollbar': {
            width: '40px',
            backgroundColor: 'trasparent'
        }
    }
})

export default HeroCarrouselStyle;