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
        <Container maxWidth="xl">
          <div className=" reserveDetailWrapper flex mt-2">
            <div className=" w-6/12">
              <div className="h-24 flex item-center">
                <div className="flex items-center ">
                  <i class="fas fa-angle-left"></i>
                  <h4 className="text-2xl font-bold ml-6">Confirm And Pay</h4>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Your trip</h4>
              </div>
              <div className="mt-2 w-36">
                <h4 className="font-semibold">Dates</h4>
                <div className=" w-80  flex justify-between">
                  <div className="border-2 border-gray-400 p-2 rounded-xl">
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
                              className="outline-0 text-black w-24  "
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
                  <div className="border-2 border-gray-400 p-2 rounded-xl">
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
              <button
                className="w-80 py-2 bg-red-500 text-white rounded"
                onClick={onClickContinue}
              >
                Continue
              </button>
            </div> */}
              <hr className="mt-6  border-gray-700 w-11/12" />
              <div className="mt-5">
                <h4 className="text-xl text-black  font-semibold">
                  Cancellation Policy
                </h4>
                <p className="mt-2 text-md">
                  <span className="font-semibold">
                    Free Cancellation for 48 hours.
                  </span>
                  <span>Cancel Before Apr 13 for a partial points refund.</span>
                </p>
                <hr className="mt-6  border-gray-700 w-11/12" />
              </div>
              <div className="mt-5">
                <h4 className="text-xl text-black  font-semibold">
                  Your Current Points
                </h4>
                <p className="mt-2 text-md">
                  <span className="font-semibold text-[#3DABBF]">
                    850 Points
                  </span>
                </p>
                <div className="mt-2">
                  <span className="text-md  font-semibold">
                    Remaining Points after this booking:
                    <span className="text-lime-500 ml-2">300 Points</span>
                  </span>
                </div>

                <hr className="mt-6  border-gray-700 w-11/12" />
                <div className="mt-6">
                  <span className="text-sm font-semibold">
                    By Selecting The Button below, I agree the Hosts House
                    Rules, Ground Rules foer Guests,Bnbyond's Rebooking and
                    Refund Policy.
                  </span>
                </div>
              </div>
              <div className="mt-4 ml-3">
                <button className="py-3 px-5  rounded-xl text-white font-semibold bg-[#46AFC2]">
                  Confirm Reservation
                </button>
              </div>
            </div>
            {/* Image Areas */}
            <div className="height-line mt-20 border ml-4 rounded-xl border-gray-500">
              <div className="reserveImage  ">
                <img
                  src={ImageEndPoint + state.propertyDetail.pics[0]}
                  className="w-full h-48 object-cover rounded-xl "
                  alt=""
                />
              </div>
              <div className="  items-center h-48 ">
                {/* <div className="propertyName ">
                  <p>{state.propertyDetail.title}</p>
                  <p>
                    {" "}
                    <Rating name="read-only" value={value} readOnly />
                  </p>
                  <p> points $400</p>
                </div> */}
                <div className=" mt-3 ml-6">
                  <span className="text-lime-500 text-md">Tree House</span>
                </div>
                <div className="mt-3 ml-6 flex">
                  <span>Veluvana Belle - Owl Bamboo House</span>
                  {/* <p className="ml-4">
                    {" "}
                    <Rating name="read-only" value={5} readOnly />
                  </p> */}
                  <p className=" text-md ml-6 mr-4">4.8 (95 Reviews)</p>
                </div>
                <hr className="mt-6 ml-3 border-gray-700 w-12/12 flex justify-center items-center" />
                <div className="mt-3 ml-4">
                  <h4 className="text-xl text-black  font-semibold">
                    Points Datails
                  </h4>
                </div>
                <div className="flex mt-6">
                  <span className="ml-4 font-semibold">
                    100 Points x 5 nights
                  </span>
                  <span className="ml-24 font-semibold">500 points</span>
                </div>
                <div className="flex mt-6">
                  <span className="ml-4 font-semibold">Services Fee</span>
                  <span className="ml-40 font-semibold">50 points</span>
                </div>
                <hr className="mt-6 ml-3 border-gray-700 w-12/12 flex justify-center items-center" />
                <div className="flex mt-6">
                  <span className="ml-4 font-semibold">Total (points)</span>
                  <span className="ml-36 font-semibold">550 points</span>
                </div>
                <hr className="mt-6 ml-3 border-gray-700 w-12/12 flex justify-center items-center" />
                <div className=" flex text-center justify-center mt-4 ">
                  <p className="font-semibold">
                    Your Booking is Protected by Bnbyond.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <br />

          <br />
          <br />
          <br />
        </Container>
      </Container>
    </>
  );
}

export default ReserveDetails;
