import { style } from "typestyle";

const HoverImageStyle = style({
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
})

export default HoverImageStyle