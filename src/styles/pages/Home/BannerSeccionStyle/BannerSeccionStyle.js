import { style } from "typestyle";

const BannerSeccionStyle = style({
    display: 'flex',
    backgroundColor: '#F72D97',
    padding: '30px 0',
    $nest: {
        '& .banner_titles_seccion': {
            width: '50%',
            display: 'flex',
            paddingLeft: '200px',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'start',
            $nest: {
                '& .hashtag_title': {
                    margin: 0,
                    fontFamily: 'CocoGothSemiBold',
                    fontSize: '32px',
                    fontWeight: 400,
                },
                '& .title': {
                    margin: 0,
                    fontFamily: 'CocoGoth',
                    fontSize: '54px',
                    lineHeight: 1
                },
                '& .decorated_subtitle': {
                    margin: 0,
                    fontFamily: 'CocoGothSemiBold',
                    color: 'white',
                    fontSize: '45px',
                    lineHeight: 1.2,
                    fontWeight: 700
                },
                '& a': {
                    textDecoration: 'none',
                    display: 'block',
                    fontFamily: 'CocoGothLight',
                    backgroundColor: 'black',
                    border: 'none',
                    color: 'white',
                    fontSize: '28px',
                    padding: '10px 80px',
                    margin: '30px 0',
                    marginLeft: '60px'

                }
            }
        },
        '& .banner_images_seccion': {
            position: "relative",
            width: '50%',
            paddingRight: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            $nest: {
                '& .logo_banner': {
                    position: 'absolute',
                    right: 60,
                },
                '& .video': {
                    position: 'absolute',
                    top: 50,
                    left: 165,
                    width: '232px',
                    height: '90%',
                    borderRadius: '10px',
                }
            }
        }
    }
})

export default BannerSeccionStyle