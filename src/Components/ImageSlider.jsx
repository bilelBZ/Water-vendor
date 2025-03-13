import React from 'react';
import Slider from 'react-slick';
import '../Styles/ImageSlider.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import waterBottleImage from '../assets/water.jpeg';
import waterFactoryImage from '../assets/water-factory.jpg';
import waterMarketImage from '../assets/water-market.jpg';
import Sidebar from './SideBar';
import Articles from './Articles';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
  <div style={{marginTop:"90px"}}>
    <h1 className='Title-slider' >Votre satisfaction : notre Priorité</h1>
    <div style={{display:'flex',flexDirection:"row-reverse",justifyContent:'center',alignItems:"center"}}>
      <Sidebar/>
      <div className="image-slider">
        <Slider {...settings}>
          <div>
            <img src={waterBottleImage} alt="Drinking Water"/>
          </div>
          <div>
            <img src={waterFactoryImage} alt="Drinking Water" />
          </div>
          <div>
            <img src={waterMarketImage} alt="Water Quality" />
          </div>
        </Slider>
    </div>
  </div>
<Articles/>
</div>

    
  );
};

export default ImageSlider;
