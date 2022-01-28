import { style } from "typestyle";

const HoverImageStyle = style({
    position: 'relative',
    width: '250px',
    height: '250px',
    $nest: {
        '& .border': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            border: 'solid black 2px',
            $nest: {
            }
        },
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
        },
        "&:first-child": {
            $nest: {
                '& .border': {
                    top: 20,
                    right: 10,
                }
            }
        },
        "&:nth-child(2)": {
            $nest: {
                '& .border': {
                    top: -10,
                }
            }
        },
        "&:nth-child(3)": {
            $nest: {
                '& .border': {
                    border: 'none'
                }
            }
        },
        "&:last-child": {
            $nest: {
                '& .border': {
                    top: 20,
                    left: 10,
                }
            }
        },
    }
})

export default HoverImageStyle