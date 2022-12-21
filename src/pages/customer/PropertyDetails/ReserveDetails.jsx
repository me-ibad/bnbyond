import React from "react";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { ImageEndPoint } from "config/config";
import Rating from '@mui/material/Rating';
import { localStorageData, Logout } from "services/auth/localStorageData";


function ReserveDetails() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(5);
  const location = useLocation();
  const { state } = location;
  console.log(state, "my state");
  let [checkIn, setCheckIn] = useState(state.offerState.checkIn);
  let [checkOut, setCheckOut] = useState(state.offerState.checkOut);
  let [count, setCount] = useState(state.offerState.count);
  function incrementCount() {
    const num = count + 1;

    if (count > 8) {
      return;
    }
    setCount(num);
  }
  function decrementCount() {
    const num = count - 1;
    if (num < 0) {
      return;
    } else {
      setCount(num);
    }
  }
  console.log(state.propertyDetail, "propertyDetail");
const onClickContinue=()=>{

  if(localStorageData("_id")){
 alert("button Clicked")
  }

else{
  navigate('/auth/signin')
}
}
  return (
    <>
      <Container maxWidth="xl">
        <div className=" reserveDetailWrapper flex mt-2">
          <div className=" w-6/12">
            <div className="h-24 flex item-center">
              <div className="flex items-center ">
                <i class="fas fa-angle-left"></i>
                <h4 className="text-2xl font-bold ml-6">Request to book</h4>
              </div>
            </div>
            <div>
              <h4 className="text-xl">Your trip</h4>
            </div>
            <div className="mt-2 w-36">
              <h4>Dates</h4>
              <div className=" w-80  flex justify-between">
                <div className="border-2 border-gray-400 p-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Basic example"
                      value={checkIn}
                      onChange={(newValue) => setCheckIn(newValue)}
                      renderInput={({
                        inputRef,
                        inputProps,
                        InputProps,
                        params,
                      }) => (
                        <div className="flex items-center  ">
                          <input
                            className="outline-0 text-black w-24"
                            ref={inputRef}
                            {...inputProps}
                            placeholder="Check-in"
                            {...params}
                          />
                          {InputProps?.endAdornment}
                        </div>
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="border-2 border-gray-400 p-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Basic example"
                      value={checkOut}
                      onChange={(newValue) => setCheckOut(newValue)}
                      renderInput={({
                        inputRef,
                        inputProps,
                        InputProps,
                        params,
                      }) => (
                        <div className="flex items-center  ">
                          <input
                            className="outline-0 text-black w-24"
                            ref={inputRef}
                            {...inputProps}
                            placeholder="Check-in"
                            {...params}
                          />
                          {InputProps?.endAdornment}
                        </div>
                      )}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </div>

            <div className=" m-4 lg:mr-2 md:mr-2 ">
              <div className="flex items-center font-bold">
                <label htmlFor="">Guests</label>
                <button className="ml-5" onClick={decrementCount}>
                  -
                </button>
                <span className="bg-gray-300 px-4 py-2 rounded-3xl ml-2 ">
                  {count}
                </span>
                <button className="ml-1" onClick={incrementCount}>
                  +
                </button>
              </div>
            </div>
            <div className="btn-continue w-full flex justify-center">
           
              <button className="w-80 py-2 bg-red-500 text-white rounded"
              onClick={onClickContinue}
              >
            Continue
                </button>
            </div>
          </div>
{/* Image Areas */}
          <div className="flex mt-20">

            <div className="reserveImage  p-4">
              <img
                src={ImageEndPoint + state.propertyDetail.pics[0]}
                className="w-80 object-cover rounded "
                alt=""
              />
            </div>
            <div className=" flex items-center h-48">
            <div className="propertyName ">
              <p>{state.propertyDetail.title}</p>
     <p> <Rating name="read-only" value={value} readOnly /></p>
     <p> points $400</p>
     </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ReserveDetails;
