import React from 'react'
import Container from "@mui/material/Container";
function ReserveDetails() {
  return (
    <>  
    <Container maxWidth="xl">
    <div className='border-2 border-red-500 h-24 flex item-center'>
    <div className='flex items-center '>
    <i class="fas fa-angle-left"></i>
<h4 className='text-2xl font-bold ml-6'>Request to book</h4>
</div>
</div>
<div>
    <h4 className='text-xl'>Your trip</h4>
</div>
<div className='mt-2 w-36'>
    <h4 >Dates</h4>
    <div className='flex justify-between'>
    <p>Show Date</p>
    <button className='underline'>Edit</button>
    </div>
</div>
<div className='mt-2 w-36'>
    <h4 >Guest</h4>
    <div className='flex justify-between'>
    <p>Show Guest</p>
    <button className='underline'>Edit</button>
    </div>
</div>
  </Container>
  
    </>
  )
}

export default ReserveDetails
