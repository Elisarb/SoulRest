import React from 'react';
import '../gallery/gallery.scss';
import ReactSimplyCarouselExample from '../../components/carousel/carousel'

const Gallery = () => {

    return(
        <div className='gallery' id='gallery'>
            <div className='texto'>
                <h2>#SomosSOUL</h2>
                <ReactSimplyCarouselExample></ReactSimplyCarouselExample>
                
            </div>
        </div>
        
    )
}

export default Gallery