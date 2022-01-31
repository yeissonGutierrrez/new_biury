import { style } from "typestyle";
import userIcon from '../../../../assets/images/components/layout/Navbar/userIcon.svg'
import shopIcon from '../../../../assets/images/components/layout/Navbar/shopIcon.svg'
import instagramIcon from '../../../../assets/images/components/layout/Navbar/InstagramIcon.svg'
import wspIcon from '../../../../assets/images/components/layout/Navbar/wspIcon.svg'

const NavbarStyle = style({
    position: 'fixed',
    backgroundColor: '#9926F7',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '30px 0',
    width: '100vw',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    $nest: {
        '& .list_menu': {
            display: 'flex',
            alignItems: 'center',
            $nest: {
                '& a': {
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    fontFamily: 'CocoGothSemiBold',
                    fontWeight: 500,
                    fontSize: '17px',
                    textDecoration: 'none',
                    margin: '15px 10px',
                    textAlign: "center"
                },
                '& .userIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${userIcon})`,
                    width: '20px',
                    height: '20px',
                    marginRight: '10px',
                    backgroundRepeat: 'no-repeat',
                },
                '& .shopIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${shopIcon})`,
                    width: '20px',
                    height: '20px',
                    marginRight: '10px',
                    backgroundRepeat: 'no-repeat',
                },
                '& .instagramIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${instagramIcon})`,
                    width: '20px',
                    height: '20px',
                    marginRight: '10px',
                    backgroundRepeat: 'no-repeat',
                },
                '& .wspIcon': {
                    display: 'inline-block',
                    backgroundImage: `url(${wspIcon})`,
                    width: '20px',
                    height: '20px',
                    marginRight: '10px',
                    backgroundRepeat: 'no-repeat',
                },
            }
        }
    }
})

export default NavbarStyle