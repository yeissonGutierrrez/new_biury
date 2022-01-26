import { style } from "typestyle";
import bgBanner from '../../../assets/images/Home/HeroSeccion/banner/bgBanner.png'

const HeroBannerStyle = style({
    position: 'absolute',
    height: '40px',
    width: '100%',
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    bottom: '0',
    backgroundImage: `url(${bgBanner})`,
    backgroundColor: 'white',
    zIndex: 1
})

export default HeroBannerStyle


