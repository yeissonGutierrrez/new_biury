import { style } from "typestyle";
import bgBanner from '../../../assets/images/Home/HeroSeccion/banner/bgBanner.png'

const HeroBannerStyle = style({
    margin: '0',
    height: '40px',
    width: '100%',
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    bottom: '0',
    backgroundColor: 'rgb(196,196,196)',
    zIndex: 1,
    $nest: {
        '& .mobile-banner': {
            display: 'none',
        },
        '@media screen and (max-width: 700px)': {
            $nest: {
              '& .mobile-banner': {
                  display: 'block',
              },
              '& .desktop-banner': {
                  display: 'none',
              },
          }  
        }
    }
    
})

export default HeroBannerStyle


