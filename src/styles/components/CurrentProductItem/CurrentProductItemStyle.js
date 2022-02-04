import { style } from "typestyle";

const CurrentProductItemStyle = style({
    marginRight: '60px',
    $nest: {
        '& .image-contain': {
            position: 'relative',
            height: '360px',
            minWidth: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F3EFED',
            $nest: {
                '& .moreIcon': {
                    position: 'absolute',
                    bottom: 15,
                    right: 15,
                    cursor: 'pointer',
                },
                '& .image-border': {
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    width: '100%',
                    height: '100%',
                    border: 'solid black 1px'
                },
                '& .image-border2': {
                    position: 'absolute',
                    top: -10,
                    right: 10,
                    width: '100%',
                    height: '100%',
                    border: 'solid black 1px'
                },
            }
        },
        '& .info': {
            margin: '40px 0',
            $nest: {
                '& .rating': {
                    margin: '10px 0',
                    display: 'flex',
                    width: '60%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily: 'GothamLight',
                },
                '& h5': {
                    fontFamily: 'GothamLight',
                    fontSize: '16px',
                },
                '& h6': {
                    fontFamily: 'GothamBold',
                    fontSize: '16px',
                },
            }
        }
    }
})

export default CurrentProductItemStyle