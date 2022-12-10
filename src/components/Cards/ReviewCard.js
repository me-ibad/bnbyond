import React from "react";

export default function ReviewCard({ state }) {
  console.log(state.photos[0].file);

  return (
    <div>
      <div className="bg-white shadow-xl rounded-xl p-4 ">
        <img
          src={
            state.photos.lenght != 0
              ? URL.createObjectURL(state.photos[0].file)
              : null
          }
          className="w-full h-40 object-cover rounded-xl"
          alt="review card"
        />

        <div className="m-2">
          <h3 className="text-xl font-bold">{state.title}</h3>
          <hr className="my-2" />
          {/* <div className='flex justify-between'>
            <h5 className='mr-4'>Entire house is rented by Louis</h5>
            <img
              src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1060&t=st=1662816524~exp=1662817124~hmac=42c5b80c8cf2bef93804026b38b3488d8d758c2df8f7e58b2675a26976af34b8'
              className='w-10 h-10  object-cover rounded-full  '
              alt='review card'
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
