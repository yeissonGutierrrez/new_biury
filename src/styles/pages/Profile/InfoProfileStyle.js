import { style } from "typestyle";

const InfoProfileStyle = style({
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    $nest: {
        '& .image-container': {
            position: 'relative',
            height: '600px',
            width: '560px',
            backgroundColor: '#FF7065',
            $nest: {
                '& .ProfilePhoto': {
                    position: 'absolute',
                    top: 40,
                    right: -100
                }
            }
        },
        '& .info': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            $nest: {
                '& h1': {
                    fontFamily: 'GothamBold',
                    fontSize: '26px',
                    margin: '20px 0',
                },
                '& p': {
                    fontFamily: 'GothamLight',
                    fontSize: '20px',
                    $nest: {
                        '& span': {
                            fontFamily: 'GothamBold',
                        }
                    }
                }
            }
        }
    }
})

export default InfoProfileStyle