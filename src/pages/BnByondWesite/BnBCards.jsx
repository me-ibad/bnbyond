import React from 'react'
import 'react-multi-carousel/lib/styles.css';




function Slidercard(props) {
 
  return (  
    <>
 
  <div className='carousel-slider w-full h-full '>
    <button className='btn-save rounded-full'><i class="far fa-heart mr-1"></i>Save</button>
  <img src={props.image} alt="" />  
<p className='placeName'>{props.destination}</p>
<p className='featuresName' >{props.features}</p>
<p className='rating' >{props.feedback}</p> 
                
               
</div> 

 

 </>
  )
}

export default Slidercard
