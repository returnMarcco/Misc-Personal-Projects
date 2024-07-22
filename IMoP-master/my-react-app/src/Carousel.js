import React from 'react';
import ReactSwipe from 'react-swipe';
import Button from '@mui/material/Button';
import img_1 from './images/img_1.jpg';
import img_2 from './images/img_2.jpg';
import img_3 from './images/img_3.jpg';
import img_4 from './images/img_4.jpg';
import img_5 from './images/img_5.jpg';
 
const Carousel = () => {
  let reactSwipeEl;
 
  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        
          <div className='carousel-img-style'><img src ={img_1} alt="Paul & Jason"></img></div>
          <div className='carousel-img-style'><img src={img_2} alt=""></img></div>
          <div className='carousel-img-style'><img src={img_3} alt=""></img></div>
          <div className='carousel-img-style'><img src={img_4} alt=""></img></div>
          <div className='carousel-img-style'><img src={img_5} alt=""></img></div>
        
     
      </ReactSwipe>
      <Button size='small' onClick={() => reactSwipeEl.next()}>Next</Button>
      <Button size='small' onClick={() => reactSwipeEl.prev()}>Previous</Button>
    </div>
  );
};

export default Carousel;
