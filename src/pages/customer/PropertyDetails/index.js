import React, { useState, Suspense, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tabs from "components/Tabs/Tab";
import TabPane from "components/Tabs/TabPane";
import Footer from "components/Footers/Footer";
import { AmenitiesData } from "data/AmenitiesData";
import GoogleMapReact from "google-map-react";
import { useParams } from "react-router-dom";
import userServices from "services/httpService/userAuth/userServices";
import CircularProgress from "@mui/material/CircularProgress";
import { ImageEndPoint } from "config/config";
import BnbNav from "components/NavBar/BnbNav";
import { Slide } from "react-slideshow-image";
import { toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate, Link } from 'react-router-dom';
import Moment from 'react-moment';
 import moment from 'moment';
//import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022'
function PropertyDetails({data}) {
  const [allPost, setallPost] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const { id } = useParams();

  const getproperty = async () => {
    setIsLoading(true);
    let res = await userServices.commonGetService(
      `/property/getPropertyByPropertyId/${id}`
    );

    setIsLoading(false);
    console.log("new---------------", res.data);
    setallPost(res.data.data[0]);
  };

  useEffect(() => {
    getproperty();
  }, []);
  const AnyReactComponent = ({ text }) => (
    <div>
      <img
        src="https://i.ibb.co/xqDW27s/Vector.png"
        alt="Vector"
        className="object-contain w-10 h-10"
      />
    </div>
  );
  const defaultProps = {
    center: {},
    zoom: 11,
  };
  const onClickClipBoard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("link has been copied");
  };

  
  let navigate = useNavigate();
  const onClickReserve = () => {

    navigate(`/propertydetails/ReserveDetails`,{state:{offerState:state,propertyDetail:allPost}})
   
  };

 

  const [state, setState] = React.useState({
    checkIn:'',
    checkOut:'',
    guest:0,
    count:0,
    
  })
  
  // var moment = require('moment'); // require
 
  // CheckIn
  // const checkInClick=(newValue)=>{
  //  const checkDate= moment(newValue).format('DD/MM/YYYY')
  //  console.log(checkDate,"Check date")
   
  // }
  const checkInClick= newValue => {
    const valueOfcheckIn = newValue.format();
    console.log(valueOfcheckIn,'checkIn')
 
  setState((prevState) => ({ ...prevState, checkIn: valueOfcheckIn}));
  };

  const checkOutClick=(newValue)=>{
    const valueOfcheckOut = newValue.format();
   console.log(valueOfcheckOut,"checkOut")
   
   setState((prevState) => ({ ...prevState, checkOut: valueOfcheckOut }));
  }

  console.log(state,"my dates")
  const decrementCount=()=>{
    const num = state.count - 1;
    if (num < 0) {
      return;
    } else {
      setState((prevState) => ({ ...prevState, count: num}));
    }
  }
  const incrementCount=()=>{
    const num = state.count + 1;
    if (state.count > 8) {
      return;
    }
  

    setState((prevState) => ({ ...prevState, count: num}));

  }

  // let [count, setCount] = useState(0);
  // function incrementCount() {
  //   const num = count + 1;

  //   if (count > 8) {
  //     return;
  //   }
  //   setCount(num);
  // }
  // function decrementCount() {
  //   const num = count - 1;
  //   if (num < 0) {
  //     return;
  //   } else {
  //     setCount(num);
  //   }
  // }
  return (
    <main className="relative w-full  h-full  min-h-screen my-10 border-2 ">
      {allPost == "" ? (
        <CircularProgress />
      ) : (
        <>
          <section>
            <Container maxWidth="xl">
              <Grid container spacing={2}>
                <Grid item lg={8} md={6} sm={12} xs={12}>
                  <div className="my-2">
                    <div className="float-right grid grid-cols-2 gap-2 mb-2">
                      <button
                        className="border border-color-grey text-sm p-2 px-3 flex rounded-full"
                        onClick={onClickClipBoard}
                      >
                        <i class="fas fa-share-square text-sm mx-2 my-1" />
                        Share
                      </button>
                      <button className="border border-color-grey text-sm p-2 px-3 flex rounded-full">
                        <i class="far fa-heart text-red-500 text-sm mx-2 my-1" />
                        Star
                      </button>
                    </div>
                    <h1 className="text-2xl font-semibold text-black truncate">
                      {allPost.title}
                    </h1>

                    <div className="w-96 my-2 bnbdetailPage-imgSlideWrapper  ">
                      <div className="">
                        <Slide>
                          {allPost.pics.map((slideImage, index) => (
                            <img
                              src={ImageEndPoint + slideImage}
                              className="w-full h-96 object-cover rounded "
                              alt=""
                            />
                          ))}
                        </Slide>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </section>

          <section>
            <Container maxWidth="lg">
              <div className="detailpage-wrapper  flex">
                <div className="w-7/12 dp-item-wrapper ">
                  <Tabs>
                    <TabPane name="About" key="1">
                      <div className="mb-10 w-full h-full  dp-item-wrapper">
                        <div className="flex mb-4">
                          <img
                            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=996&t=st=1667375684~exp=1667376284~hmac=894d80d4b10c99fd135d0686fefdae78ee0a0c720c94c3b0c98ab472030ea433"
                            alt="icon"
                            className="w-14 h-14 rounded-full object-contain"
                          />
                          <div className="my-2 mx-3">
                            <h5 className="text-sm font-semibold text-black">
                              {allPost.user.fname}
                            </h5>
                            <h6 className="text-gray-500 text-xs">
                              {allPost.propertyType}
                            </h6>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-black">
                          Summary
                        </h4>

                        <p className="my-2 text-base text-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam sodales vitae elit sit amet volutpat. Ut
                          placerat tortor ac malesuada malesuada. Phasellus
                          tempor gravida elit, sit amet lobortis dui posuere
                          sed. Duis purus metus, consequat ut risus ut, rutrum
                          tincidunt sem. Nam maximus porta mauris, non accumsan
                          orci rhoncus quis. Maecenas gravida sagittis volutpat.
                          Pellentesque in pulvinar dolor. In consectetur nisl in
                          nulla sollicitudin, eu placerat enim interdum.
                          Curabitur varius arcu id tortor ullamcorper, vitae
                          vulputate libero sollicitudin. Proin enim lectus,
                          convallis nec pretium blandit, condimentum sit amet
                          turpis.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane name="Amenities" key="2">
                      <div className="mb-10">
                        <h4 className="text-xl font-bold text-black mb-4">
                          Amenities
                        </h4>
                        <div className="grid grid-cols-2 gap-2	">
                          {allPost.amenities.map((item) =>
                            item.status ? (
                              <div className="flex my-3 mx-2" key={item.id}>
                                <i class={`${item.font} text-lg mt-1`}></i>
                                <span className="text-black mx-2">
                                  {item.label}
                                </span>
                              </div>
                            ) : (
                              ""
                            )
                          )}
                        </div>
                      </div>
                    </TabPane>
                    <TabPane name="Rates" key="2">
                      coming soon
                    </TabPane>

                    <TabPane name="Reviews" key="2">
                      <div className="mb-10">
                        <h4 className="text-xl font-bold text-black mb-4">
                          0 Reviews
                        </h4>
                        <p>this property doesn't have any reviews</p>
                      </div>
                    </TabPane>

                    <TabPane name="Map" key="2">
                      <div className="mb-10">
                        <h4 className="text-xl font-bold text-black mb-2">
                          Map
                        </h4>
                        <p className="mb-2"> {allPost.address}</p>
                        {allPost.loc ? (
                          <div style={{ height: "45vh", width: "50%" }}>
                            <GoogleMapReact
                              bootstrapURLKeys={{
                                key: "AIzaSyBu2WqDbYFglNC_u5HHcoFQmCgnxps6vH8",
                              }}
                              defaultCenter={{
                                lat: allPost.loc.coordinates[1],
                                lng: allPost.loc.coordinates[0],
                              }}
                              defaultZoom={defaultProps.zoom}
                            >
                              <AnyReactComponent
                                lat={allPost.loc.coordinates[1]}
                                lng={allPost.loc.coordinates[0]}
                                text="My Marker"
                              />
                            </GoogleMapReact>
                          </div>
                        ) : null}
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
                <div className="w-5/12 dp-reserveCardWrapper flex items-center md:justify-center pb-2">
                  <div className="w-80 rounded-xl p-6  drop-shadow-2xl bg-white flex justify-center items-center ">
                    <div className="">
                      <div className="border-2 w-full border-gray-400  rounded-t  flex">
                        <div className="border-r-2 border-gray-400 p-2">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Basic example"
                              value={state.checkIn}
                              dateFormat="LLL"
                              onChange={newValue => checkInClick(newValue)}
                              // onChange={(newValue) => {
                              //   setState((prevState) => ({ ...prevState, checkIn: newValue }));;
                                
                                 
                              // }}
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
                       
                        <div className="p-2">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Basic example"
                              value={state.checkOut}
                              onChange={newValue => checkOutClick(newValue)}
                              // onChange={(newValue) => {
                              //  console.log(newValue)
                              //   setState((prevState) => ({ ...prevState, checkOut: newValue }));;
                              // }}
                              renderInput={({
                                inputRef,
                                inputProps,
                                InputProps,
                                params,
                              }) => (
                                <div className="flex items-center">
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
                      <div className="border-x-2 border-b-2 border-gray-400 rounded-b p-1">
                      <div className=" m-4 lg:mr-2 md:mr-2 ">
                    <div className="flex items-center font-bold">
                      <label htmlFor="">Guests</label>
                      <button className="ml-5" onClick={decrementCount}>
                        -
                      </button>
                      <span className="bg-gray-300 px-4 py-2 rounded-3xl ml-2 ">
                        {state.count}
                      </span>
                      <button className="ml-1" onClick={incrementCount}>
                        +
                      </button>
                    </div>
                  </div>
                      </div>
                     

                      <div className=" mt-4">
                        <button className="px-2 py-3 w-full bg-red-500 rounded text-white"
                        onClick={onClickReserve}
                        >
                          Reserve
                        </button>
                      </div>
                      <p className="text-center">You won't be charged yet</p>
                      <div className="flex justify-between border-t-2 border-gray-400 mt-2">
                        <p>Points</p>
                        <p>$855</p>
                      </div>
                      {/* <div className="flex justify-between">
                        <p>Long stay discount Show price breakdown</p>
                        <p>-$94</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Cleaning fee</p>
                        <p>$5</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Service fee</p>
                        <p>$108</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            {/* <Moment date={dateToFormat} /> */}
            {/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{state.checkIn}</Moment> */}
          </section>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="Basic example"
                                value={checkIn}
                                onChange={(newValue) => {
                                  setCheckIn(newValue);
                                }}
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
                            </LocalizationProvider> */}
        </>
      )}

      {/* <Footer /> */}
    </main>
  );
}

export default PropertyDetails;
