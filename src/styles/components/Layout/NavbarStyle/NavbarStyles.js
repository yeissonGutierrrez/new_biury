import { style } from "typestyle";
import userIcon from '../../../../assets/images/components/layout/Navbar/userIconBorder.svg'
import shopIcon from '../../../../assets/images/components/layout/Navbar/shopIcon.svg'
import instagramIcon from '../../../../assets/images/components/layout/Navbar/InstagramIcon.svg'
import wspIcon from '../../../../assets/images/components/layout/Navbar/wspIcon.svg'

const NavbarStyle = style({
    position: 'fixed',
    backgroundColor: '#242535',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 60px',
    width: '100vw',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    $nest: {
        '& .center': {
            display: 'flex',
            paddingLeft: '150px',
            width: '30%',
        },

        '& .list_menu': {
            display: 'flex',
            alignItems: 'center',
            width: '35%',
            $nest: {
                '& a': {
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    fontFamily: 'CocoGothSemiBold',
                    fontWeight: 500,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    margin: '15px 10px',
                    textAlign: "center",
                },
                '& hr': {
                    transform: 'rotate(90deg)',
                    width: '60px',
                },
                '& .userIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${userIcon})`,
                    width: '20px',
                    height: '20px',
                    marginRight: '5px',
                    backgroundRepeat: 'no-repeat',
                },
                '& .shopIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${shopIcon})`,
                    width: '20px',
                    height: '20px',
                    marginLeft: '60px',
                    backgroundRepeat: 'no-repeat',
                },
                '& .instagramIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${instagramIcon})`,
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                },
                '& .wspIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${wspIcon})`,
                    width: '20px',
                    height: '20px',
                    backgroundRepeat: 'no-repeat',
                },
            }
        },
    },
})

export default NavbarStyle