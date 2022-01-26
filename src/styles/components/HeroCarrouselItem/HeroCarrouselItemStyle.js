import { style } from "typestyle";

const HeroCarrouselItemStyle = style({
    margin: '70px 0',
    $nest: {
        '& .hero_carrousel_item__images': {
            position: "relative",
            $nest:{
                '& .principal_image': {
                    width: '90%',
                    margin: '20px',
                    backgroundPosition: 'cover',
                    borderRadius: '40px',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    boxShadow: '0px 0px 14px 1px rgba(0,0,0,0.42)',
                },
                '& .promotional_image': {
                    position: "absolute",
                    left: 0,
                    top: '-40px'

                }
            },
        },
        '& .item_title': {
            fontSize: '45px',
            lineHeight: '1',
            margin: '16px 0'
        },
        '& .item_subtitle': {
            fontSize: '25px',
            lineHeight: '1',
            marginTop: 0,
            fontWeight: '300px'
        },
    }
})

export default HeroCarrouselItemStyle;