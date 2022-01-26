import { style } from "typestyle";

const RatingStyle = style({
    width: '100%',
    $nest: {
        '& .Rating_container':{
            display: 'flex',
            width: '60%',
            justifyContent: 'center',
            margin: 'auto'
        }
    }
})

export default RatingStyle