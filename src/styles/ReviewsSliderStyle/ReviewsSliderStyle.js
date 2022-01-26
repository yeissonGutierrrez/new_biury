import { style } from "typestyle";

import leftArrow from '../../assets/images/components/ReviewSlider/leftArrow.svg'

const ReviewsSliderStyle = style({
    width: '80%',
    height: '100vh',
    padding: '50px 0',
    $nest: {
        '& .ReviewsSwiper': {
            padding: '100px 0px',
            boxSizing: "border-box",
        },
        '& .swiper-slide': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '380px !important'

        },
        '& .navigations_buttons':{
            position: "absolute",
            top: '45%',
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            zIndex: 3,
            $nest: {
                '& .prev, .next': {
                    fontFamily: 'Montserrat',
                    color: 'black',
                    fontSize: '18px',
                    cursor: 'pointer',
                    backgroundColor: 'blue',
                    borderRadius: '50%'
                },
                '& .prev': {
                    backgroundColor: '#202230'
                },
                '& .next': {
                    backgroundColor: '#202230'
                },
            }
        },
        '& .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction': {
            display: 'none',
        },
        '& .swiper-button-next, .swiper-button-prev':{
            display: 'none'
        },
    }
})

export default ReviewsSliderStyle