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

function PropertyDetails() {
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
  return (
   
    <main className="relative w-full  h-full  min-h-screen my-10">
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
                      <button className="border border-color-grey text-sm p-2 px-3 flex rounded-full">
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

                    <div className="my-2">
                      <img
                        src={ImageEndPoint + allPost.pics[0]}
                        className="w-full h-96 object-cover rounded"
                        alt=""
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}></Grid>
              </Grid>
            </Container>
          </section>

          <section>
            <Container maxWidth="lg">
              <Tabs>
                <TabPane name="About" key="1">
                  <div className="mb-10">
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

                    <h4 className="text-xl font-bold text-black">Summery</h4>

                    <p className="my-2 text-base text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam sodales vitae elit sit amet volutpat. Ut placerat
                      tortor ac malesuada malesuada. Phasellus tempor gravida
                      elit, sit amet lobortis dui posuere sed. Duis purus metus,
                      consequat ut risus ut, rutrum tincidunt sem. Nam maximus
                      porta mauris, non accumsan orci rhoncus quis. Maecenas
                      gravida sagittis volutpat. Pellentesque in pulvinar dolor.
                      In consectetur nisl in nulla sollicitudin, eu placerat
                      enim interdum. Curabitur varius arcu id tortor
                      ullamcorper, vitae vulputate libero sollicitudin. Proin
                      enim lectus, convallis nec pretium blandit, condimentum
                      sit amet turpis.
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
                    <h4 className="text-xl font-bold text-black mb-2">Map</h4>
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
            </Container>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}

export default PropertyDetails;
