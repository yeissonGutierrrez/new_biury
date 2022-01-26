import { style } from "typestyle";

import arrow from '../../../assets/images/components/ConfirmButton/Line8.svg'


const ConfirmButtonStyle = style({
    textAlign: "center",
    color: 'black !important',
    textDecoration: 'none',
    width: '250px',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 10px',
    paddingLeft: '50px',
    margin: '40px auto',
    fontSize: '22px',
    backgroundColor: '#67FF6C',
    fontFamily: 'CocoGothLight',
    cursor: 'pointer',
    border: 'none',
    $nest: {
        '& .arrow': {
            display: 'inline-block',
            backgroundImage: `url(${arrow})`,
            width: '30px',
            height: '15px',
            marginRight: '10px',
            backgroundRepeat: 'no-repeat',
        }
    }
})

export default ConfirmButtonStyle