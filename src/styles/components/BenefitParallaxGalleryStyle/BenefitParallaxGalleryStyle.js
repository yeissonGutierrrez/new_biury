import { style } from "typestyle";

const  BenefitParallaxGalleryStyle = style({
    position: "relative",
    width: '90%',
    height: '120vh',
    padding: '120px 0',
    margin: 'auto',
    overflowY: 'scroll',
    $nest: {
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        '&::-webkit-scrollbar-thumb': {
            display: 'none'
        },
        '& .item:nth-child(1)': {
            position: "absolute",
            left: 20,
            top: 0,
            top: '80px'
        },
        '& .item:nth-child(2)': {
            position: "absolute",
            right: 20,
            top: '20px'
        },
        '& .item:nth-child(3)': {
            position: "absolute",
            top: '500px',
            left: '35%'
        },
        '& .item:nth-child(4)': {
            position: "absolute",
            left: 20,
            top: '110vh'
        },
        '& .item:nth-child(5)': {
            position: "absolute",
            right: 20,
            top: '100vh'
        },
    }
})

export default BenefitParallaxGalleryStyle