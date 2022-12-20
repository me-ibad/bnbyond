import React from 'react';
import Rating from '@mui/material/Rating';
import { ImageEndPoint } from 'config/config';
import { useNavigate, Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { useState,useEffect } from 'react';
export default function HomeCard({ data }) {
  let navigate = useNavigate();

  console.log("my pictures",data.pics)
    const [image, setImage] = useState([]);
  

  console.log(
    'data',
    ImageEndPoint + decodeURIComponent(data.pics[0].replace(/\s/g, ''))
  );
  useEffect(()=>{


    let allimages=data.pics.map(item=>{
  
      return ImageEndPoint+ item
      
      })
      setImage(allimages)
  
  },
  [])
  
console.log(image,"image is")

  
 
  return (
   <>
   <div className="slide-container w-full ">
      <Slide>
       {data.pics.map((slideImage, index)=> (
        <div key={index}>
      <div
        className=' w-full h-60 bg-center bg-cover rounded'
        style={{
          backgroundImage: `url(${ImageEndPoint + slideImage})`,
        }}
        onClick={() => navigate(`/propertydetails/${data._id}`)}
      >
        <div className='float-right mr-2 mt-2'>
          <div className='flex bg-white rounded-xl text-black p-2 '>
            <i class='far fa-heart text-sm '></i>
            <span className='text-sm mx-1 -mt-1'>Save</span>
          </div>
        </div>
      </div>
      </div>
      ))} 
      </Slide>
      </div>
      <div className='my-1 w-60'>
        <h3 className='font-bold truncate'>{data.title}</h3>
        <h5 className='text-sm'>{data.address}</h5>

        <Rating name='size-small' readOnly defaultValue={2} size='small' />
      </div>
      </>
  );
}
