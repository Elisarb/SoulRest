import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import Fiesta1 from '../../assets/images/fiesta1.jpg';

import '../carousel/carousel.scss';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  return (
    <div className="carousel-container">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        showSlidesBeforeInit={true}
        containerProps = {{
            className: "container-carousel",
            style: {
                paddingTop: '50px',
                overflow: 'visible!important',
            },
        }}
        innerProps = {{
            className: "inner-carousel",
        }}
        visibleSlideProps= {{
          className: "visible-slides",
            style: {
                overflow: 'visible!important',
            },
        }}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            position: 'absolute',
            right: '0px', 
            top:'25%',  
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '80px',
            height: '50%',
            lineHeight: 1,
            textAlign: 'center',
            width: '100px',
            zIndex: "99",
          },
          children: <span>{`▶`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            position: 'absolute',
            left: '0px',
            top:'25%',        
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '80px',
            height: '50%',
            lineHeight: 1,
            textAlign: 'center',
            width: '100px',
            zIndex: "99",
          },
          children: <span>{`◀`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {/* <div className="proyect-container" id="proyect-container"> */}
        <div>
        <div className="card">
            <img className="image-card" src={Fiesta1} alt="imagen fiesta1"/>
        </div>
        </div>

        <div>
            <div className="card">
            <img className="image-card" src={Fiesta1} alt="imagen fiesta1"/>
             </div>
        </div>

        
        <div>
            <div className="card">
            <img className="image-card" src={Fiesta1} alt="imagen fiesta1"/>
             </div>
        </div>
        
        <div>
            <div className="card">
            <img className="image-card" src={Fiesta1} alt="imagen fiesta1"/>
             </div>
        </div>

        
        {/* </div> */}
      </ReactSimplyCarousel>

      <div className="text-on-top">
        <span>
            @soulmadridrest
        </span>
      </div>
      
    </div>
  );
}

export default ReactSimplyCarouselExample;