import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchCard from "components/Cards/SearchCard";
import { ImageEndPoint, mapkey } from "config/config";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import ErrorService from "services/formatError/ErrorService";
import userServices from "services/httpService/userAuth/userServices";
import GoogleMapReact from "google-map-react";
import { useParams } from "react-router-dom";

const PropertyMaker = ({ text }) => (
  <div>
    <a className="bg-white w-12 text-center shadow-lg rounded p-2 font-bold">
      {text}
    </a>
  </div>
);
export default function SearchListings() {
  const { lat, long } = useParams();

  //////console.log(parseFloat(lat), lat);

  let defaultProps = {
    center: {
      lat: lat,
      lng: long,
    },
    zoom: 11,
  };

  const [allPost, setallPost] = React.useState([]);

  console.log(lat);

  console.log(long);

  const getproperty = async () => {
    let res = await userServices.commonGetService(
      `/property/getAllProperty/${lat}/${long}/15`
    );

    setallPost(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getproperty();
  }, []);

  return (
    <div className="mt-20">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="bg-white shadow w-full h-screen  overflow-y-auto">
              <p className="text-xs font-bold px-10 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
                nulla malesuada, pretium sem in, fringilla felis. Quisque
                viverra ullamcorper augue, et cursus neque dapibus et. Donec
                libero lectus, mollis vel iaculis eu, egestas ac justo.
                Suspendisse lobortis cursus orci id vulputate.
              </p>

              {allPost?.map((item) => (
                <SearchCard key={item._id} data={item} />
              ))}
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="w-full h-screen">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: mapkey,
                }}
                defaultCenter={{
                  lat: parseFloat(lat),
                  lng: parseFloat(long),
                }}
                defaultZoom={defaultProps.zoom}
                center={{
                  lat: parseFloat(lat),
                  lng: parseFloat(long),
                }}
              >
                {allPost?.map((item) => (
                  <PropertyMaker
                    lat={item.loc.coordinates[1]}
                    lng={item.loc.coordinates[0]}
                    text={item.price}
                  />
                ))}
              </GoogleMapReact>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
