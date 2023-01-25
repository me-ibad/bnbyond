import React from "react";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { ImageEndPoint } from "config/config";
import Rating from "@mui/material/Rating";
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
  const onClickContinue = () => {
    if (localStorageData("_id")) {
      alert("button Clicked");
    } else {
      navigate("/auth/signin");
    }
  };
  return (
    <>
      <Container maxWidth="xl">
        <div className=" reserveDetailWrapper  flex ">
          <div className=" md:w-6/12">
            <div className="h-24 flex item-center">
              <div className="flex items-center ">
                <i class="fas fa-angle-left"></i>
                <h4 className="text-2xl font-bold ml-6">Confirm and pay</h4>
              </div>
            </div>
            <div>
              <h4 className="text-xl">Your trip</h4>
            </div>
            <div className="mt-2 w-36">
              <h4>Dates</h4>
              <div className=" w-80 flex justify-between">
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
                            placeholder="Check-out"
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
            {/* <div className="btn-continue w-full flex justify-center">
           
             <button className="w-80 py-2 bg-red-500 text-white rounded"
              onClick={onClickContinue}
              >
            Continue
                </button> 
            </div> */}
            <div className="cancellationWrapper  md:w-11/12 border-t-2 border-gray-500">
              <h5 className="font-bold mt-6 text-xl">Cancellation Policy</h5>
              <p className="text-sm mt-1">
                Free cancellation for 48 hours. Cancel before Apr 13 for a
                partial points refund
              </p>
            </div>
            <div className="PointsWrapper mt-6 w-11/12 border-t-2 border-gray-500">
              <h5 className="font-bold mt-8 text-xl">Your current points</h5>
              <p className="text-blue-400 mt-1">850 points</p>
              <p className="mt-1">
                Remaining points after this booking:{" "}
                <span className="text-green-500">300 points</span>
              </p>
            </div>
            <div className="PointsWrapper w-11/12 mt-8 border-t-2 border-gray-500">
              <p className=" mt-6">
                by selecting the button below I agree to host's house rules.
                Ground rules for guest. Bnbyond's Rebooking and Refund policy
              </p>
              <div className="btn-continue w-full ">
                <button
                  className="w-56 py-3 bg-blue-700 text-white rounded-xl mt-4"
                  onClick={onClickContinue}
                >
                  Confirm Reservation
                </button>
              </div>
            </div>
          </div>

          {/* Image Areas */}
          <div className="md:w-6/12 ">
            <div className="border-2 border-gray-300 rounded-xl border-t-0 md:w-10/12 mt-10 ">
            <div className="reserveImage w-full flex items-end">
              <img
                src={ImageEndPoint + state.propertyDetail.pics[0]}
                className="w-full object-cover rounded-xl h-56"
                alt=""
              />
            </div>
            {/* Title and Rating */}
            <div className=" flex h-24 w-full  ">
              <div className="propertyName w-11/12 m-auto ">
                <p>{state.propertyDetail.title}</p>

                <div className="locRatWrapper flex justify-between">
                  <p>Address</p>
                  <div className="flex">
                    <p className="mr-4 flex items-center">
                      {" "}
                      <Rating name="read-only" value={value} readOnly />5
                    </p>
                    <p> SuperHost</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Points Details */}
            <div className="h-fit w-full">
              <div className="propertyName mt-4 border-t-2 border-gray-500 w-11/12 m-auto ">
              <h3 className="font-bold">Points Details</h3>
              <div className=" mt-4 flex justify-between w-9/12">
                <p>100 points x 5 nights</p>
                <p>500 points</p>
              </div>
              <div className="flex justify-between w-9/12 mt-2">
                <p>Service fee</p>
                <p>50 points</p>
              </div>
              </div>
              
            </div>
            <div className=" mt-4 h-fit w-full">
              <div className="propertyName  h-16 flex items-center border-t-2 border-gray-500 w-11/12 m-auto ">
              
              <div className="flex justify-between w-9/12">
                <p>Total (points)</p>
                <p>550 points</p>
              </div>
             
              </div>
              
            </div>
            <div className="mt-4 w-full h-fit">
              <div className="propertyName h-16 flex items-center justify-end  border-t-2 border-gray-500 w-11/12 m-auto ">
              
              <div className=" flex justify-between w-9/12 ">
                <p>Your Booking is protected by</p>
                {/* <img
                  className="w-3 h-4  "
                  src={require("assets/img/whitelogo.png")}
                  alt=''
                /> */}
              </div>
             
              </div>
              
            </div>
          </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ReserveDetails;
