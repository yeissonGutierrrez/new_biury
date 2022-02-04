import Navbar from "../../components/layout/Navbar/Navbar"
import Footer from '../../components/layout/Footer/Footer.js'

import SellersStyle from "../../styles/pages/Sellers/SellersStyle"

import ProductItem from '../../components/ProductItem/ProductItem.js'

import wave from '../../assets/images/wave.svg'
import wave2 from '../../assets/images/wave_dark_blue.svg'

import monthJanuaryImage from '../../assets/images/Sellers/month.svg'

import SuscribeButton from '../../components/SuscribeButton'

import ReviewsSlider from '../../components/ReviewsSlider/ReviewsSlider'



import image1 from '../../assets/images/Home/ProductSeccion/item1.png'
import image2 from '../../assets/images/Home/ProductSeccion/item2.png'
import image3 from '../../assets/images/Home/ProductSeccion/item3.png'
import image4 from '../../assets/images/Home/ProductSeccion/item4.png'


import brandLogo1 from '../../assets/images/brands/isdinLogo.svg'
import brandLogo2 from '../../assets/images/brands/uriageLogo.svg'
import brandLogo3 from '../../assets/images/brands/heliocareLogo.svg'
import brandLogo4 from '../../assets/images/brands/sesdesmaLogo.svg'
import brandLogo5 from '../../assets/images/brands/larocheposayLogo.svg'
import brandLogo6 from '../../assets/images/brands/eucelinLogo.svg'
import brandLogo7 from '../../assets/images/brands/almayLogo.svg'
import brandLogo8 from '../../assets/images/brands/revlon.svg'
import brandLogo9 from '../../assets/images/brands/avene.svg'


const products = [
    {
      title: 'Acerca de one',
      text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ',
      bgColor: '#FF4993',
      image: image1
    },
    {
      title: 'Acerca de two',
      text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ',
      bgColor: '#B3F12D',
      image: image2
    },
    {
      title: 'Acerca de three',
      text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ',
      bgColor: '#BC49EA',
      image: image3
    },
    {
      title: 'Acerca de four',
      text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ',
      bgColor: '#00CFBE',
      image: image4
    },
    {
      title: 'Acerca de one',
      text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ',
      bgColor: '#FF4993',
      image: image1
    },
    {
      title: 'Acerca de two',
      text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ',
      bgColor: '#B3F12D',
      image: image2
    },
    {
      title: 'Acerca de three',
      text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ',
      bgColor: '#BC49EA',
      image: image3
    },
    {
      title: 'Acerca de four',
      text: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ',
      bgColor: '#00CFBE',
      image: image4
    },
  ]

function Sellers() {
    return (
        <>
            <Navbar/>
            <div className={SellersStyle}>
                <div className="hero-image">
                    <img className="wave" src={wave}/>
                </div>
                <div className="main-wrapper">
                    <div className="main">
                        <h1 className="title">BEST SELLERS</h1>
                        <hr className="line"/>
                        <p className="pharagrap">ESTOS SON ALGUNOS DE LOS PRODUCTOS <br/> INCLUIDOS EN NUESTRAS BIURYBOXES <br/> RECIENTES: </p>

                        <div className="best-sellers-month">
                            <img className="month-title" src={monthJanuaryImage}/>
                            <div className="products-container">
                                {
                                    products.map((data) => {
                                        return (
                                            <ProductItem data={data}></ProductItem>
                                        )
                                    })
                                }
                            </div>

                            <SuscribeButton width={'50%'}></SuscribeButton>
                        </div>
                        
                        <h1 className="brands-title">NUESTRAS <span>MARCAS</span></h1>
                        
                        <div className="brands-wrapper">
                            <img src={brandLogo1}/>
                            <img src={brandLogo2}/>
                            <img src={brandLogo3}/>
                            <img src={brandLogo5}/>
                            <img src={brandLogo6}/>
                            <img src={brandLogo8}/>
                            <img src={brandLogo4}/>
                            <img src={brandLogo7}/>
                            <img src={brandLogo9}/>
                        </div>
                        

                    </div>
                </div>
                <div className="reviews-seccion">
                    <div className="reviews-info">
                        <h1>BIURY<span>REVIEWS</span></h1>
                        <p>
                            Conoce la opinión de nuestros usuarios, <br/>
                            <span>BIURY</span>CLUB es cada vez más grande, <br/>
                            solo faltas tú.
                        </p>
                    </div>
                    <img className="wave" src={wave2}/>
                    <h1 className="title">LA OPINIÓN DE NUESTROS USUARIOS <br/> ES LA MÁS IMPORTANTE</h1>
                    <ReviewsSlider></ReviewsSlider>
                    <h1 className="title">¡QUIERO HACER UN COMENTARIO!</h1>
                    
                    <div className="comment">
                        <div className="comment-input">
                            <input placeholder="Escribe Aquí..." type='text'></input>
                            <div className="shadow"></div>
                        </div>
                        <button className="send-button">ENVIAR</button>
                    </div>
                    <div className="button-wrapper">
                        <SuscribeButton bgColor={'#FF6B63'} textColor={'white'}/>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Sellers