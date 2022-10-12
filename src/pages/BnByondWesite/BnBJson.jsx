import React from 'react'
import { Grid } from '@mui/material';
import Iconscard from './Iconscard';
import Slidercard from './Slidercard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function BnbJson() {
  // Responsive
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3001 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };
  

  // SLider end



  let url1='https://img.freepik.com/free-photo/quebec-city-skyline-river-with-blue-sky-cloud_649448-1936.jpg?w=900&t=st=1664994372~exp=1664994972~hmac=b2ef29a32c764850c6d656e7ff1f6aee017c197bf72ee501cd699a17c2ef821e'
let url2='https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen_181624-1846.jpg?w=900&t=st=1664998329~exp=1664998929~hmac=d1cc415c8f446815c21f18c8a875d534e8a008ff12c634b83c8967151e5517d5'

let url3='https://img.freepik.com/free-vector/city-night_1325-128.jpg?w=740&t=st=1664998511~exp=1664999111~hmac=47a88cdab4fc775c9637bda8afecfb2822071b2000d27835049f0fd4214e78c3'
let url4='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

let url5='https://img.freepik.com/free-photo/tv-mockup-cabinet-living-room-concrete-wall-3d-rendering_41470-3757.jpg?w=1060&t=st=1665166149~exp=1665166749~hmac=35a87cd552fb0157b411ab3d93ff3f9c98720fc5df2bc45ce264b8ba5aefe494'




  
    let carouselCard=[
      {
        img:url1,
        destination:"Harbourview,Dartmouth,Nova Scotia,Can...",
        features:"Sleeps 2 . 1 BR . 1 BA",
        feedback:"⭐⭐⭐⭐⭐"+"(4)"
        },
        {
         img:url2,
         destination:"North End,Halifax,Nova Scotia,Canada",
         features:"Sleeps 4 . 2 BR . 2 BA",
         feedback:"⭐⭐⭐⭐⭐"+"(10)"
         },
         {
           img:url3,
           destination:"Halifax,Nova Scotia,Canada",
           features:"Sleeps 4 . 2 BR . 1 BA",
           feedback:"⭐⭐⭐⭐⭐"+"(71)"
           },
           {
            img:url4,
            destination:"Mahone Bay,Nova Scotia,Canada",
            features:"Sleeps 2 . 1 BR . 1 BA",
            feedback:"⭐⭐⭐⭐⭐"+"(30)"
            },
           {
            img:url5,
            destination:"Head of cheezetcook,Nova Scotia,Canada",
            features:"Sleeps 4 . 2 BR . 1 BA",
            feedback:"⭐⭐⭐⭐⭐"+"(1)"
            },
              {
                img:url1,
                destination:"Mahone Bay,Nova Scotia,Canada",
                features:"Sleeps 2 . 1 BR . 1 BA",
                feedback:"⭐⭐⭐⭐⭐"+"(30)"
                }
    ];

    
      
       
       
  console.log(carouselCard)

    

  return (
  
    <>
  
   <Grid container spacing={0 }>
  <Grid item xs={12}>
   <div className="carousel-parent-sliders">
   <h1 className='text-2xl font-bold mt-5'>Explore homes near you </h1>


   <Carousel responsive={responsive}>
   {carouselCard.map((item,index)=>
<Slidercard image={item.img} destination={item.destination} features={item.features}
feedback={item.feedback}/>

)}
</Carousel>
</div>
  
  </Grid>

</Grid>


{/* <BnBFooter/> */}

    </>
  )
}

export default BnbJson
