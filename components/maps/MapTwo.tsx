// @ts-nocheck
"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindowF,
} from "@react-google-maps/api";
import toast from 'react-hot-toast';

export const DEFAULT_DISTANCE = 100;
export const zoom = 12;

const containerStyle = {
  width: "100%",
  height: "90vh",
};

async function getLatLng(address: string) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address + ",India"
    )}&key=AIzaSyAW-yfggxPKG70-wGj_e634dgadcJZfe-I`
  );
  const geoCodeResponse = await res.json();
  // console.log(geoCodeResponse);
  if (!geoCodeResponse || geoCodeResponse.status === "ZERO_RESULTS") {
    toast.error("No results found");
    return;
  }
  const { lat, lng } = geoCodeResponse.results[0].geometry.location;
  // console.log(lat, lng);
  return { lng, lat };
}

function MapTwo() {
  const [selected, setSelected] = useState<any>(undefined);
  const [currentPosition, setCurrentPosition] = useState(undefined);
  const [center, setCenter] = useState({ lat: 30.770052, lng: 76.577564 });
  const cityRef = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAW-yfggxPKG70-wGj_e634dgadcJZfe-I",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(zoom)

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const search = async (e) => {
    e.preventDefault();
    // @ts-ignore
    const city = cityRef.current.value;
    // @ts-ignore
    const { lat, lng } = await getLatLng(currentPosition);
    if (!lat || !lng) {
      return;
    }
    setCenter({ lat, lng });
  };

  return (
    <>
      <div className="relative">
        <div className="absolute top-5 left-0 z-10 w-full h-16  flex items-center justify-center">
          <form onSubmit={search}>
            <input
              ref={cityRef}
              onChange={(e) => {
                setCurrentPosition(e.target.value as any);
              }}
              type="text"
              placeholder="Enter city"
              className="w-80 h-10 border border-gray-300 rounded-md px-2"
            />
            <button className="bg-black text-white px-4 py-2 rounded-md ml-2">
              Search
            </button>
          </form>
        </div>

        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
          
            center={center}
            zoom={4}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {places.map((place) => (
              <MarkerF
                key={place.name}
                position={place.location}
                onClick={() => {
                  place === selected
                    ? setSelected(undefined)
                    : setSelected(place);
                }}
              />
            ))}
            {selected ? (
              // @ts-ignore
              <InfoWindowF
                position={selected.location}
                zIndex={30}
                // @ts-ignore
                clickable={true}
                onCloseClick={() => setSelected(undefined)}
              >
                <div>
                  
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selected.image} alt={selected.name} className="w-60 h-40 p-2" />
                  <h2>{selected.name}</h2>
                  <p>{selected.details}</p>
                </div>
              </InfoWindowF>
            ) : null}

            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default React.memo(MapTwo);

const places = [
  {
    name: "Chandigarh",
    location: {
      lat: 30.722885,
      lng: 76.738924,
    },
    details: "Flood affected area",
    image:"https://c.ndtvimg.com/2020-07/h2maeblo_bihar-floods-650_625x300_28_July_20.jpg"
  },
  {
    name: "Kharar",
    location: {
      lat: 30.751191,
      lng: 76.737301,
    },
    details: "Roads are blocked",
    image: "https://images.hindustantimes.com/img/2021/07/19/550x309/0c4483f8-e871-11eb-9a2b-f40b6f7ff9cb_1626686065344.jpg"
  },
  {
    name: "Gharuan",
    location: {
      lat: 30.7754,
      lng: 76.560569,
    },
    details: "Pound are dirty",
    image: "https://img.freepik.com/premium-photo/dirty-pond-with-full-water-hyacinth-inside-village_150101-3118.jpg?w=1800"
  },
  {
    name: "Kochi",
    location: {
      lat: 9.932734,
      lng: 76.297977,
    },
    details: "Kochi Flood affected area",
    image: "https://static.theprint.in/wp-content/uploads/2018/08/2018_8img19_Aug_2018_PTI8_19_2018_000161B.jpg"
  }
  ,
  {
    name: "Rajasthan",
    location: {
      lat: 24.466833,
      lng: 71.311729,
    },
    details: "Padan Flood affected area",
    image: "https://static.theprint.in/wp-content/uploads/2018/08/2018_8img19_Aug_2018_PTI8_19_2018_000161B.jpg"
  },
  {
    name: "Mumbai",
    location: {
      lat: 18.966915,
      lng: 72.969683,
    },
    details: "Mumbai Flood affected area",
    image:"https://c.ndtvimg.com/2020-07/h2maeblo_bihar-floods-650_625x300_28_July_20.jpg"
  },
  {
    name: "Patna",
    location: {
      lat: 26.067989,
      lng: 84.145542,
    },
    details: "Patna Flood affected area",
    image:"https://c.ndtvimg.com/2020-07/h2maeblo_bihar-floods-650_625x300_28_July_20.jpg"
  },
  {
    name: "Nairi",
    location: {
      lat: 19.800392,
      lng: 85.304074,
    },
    details: "Nairi Flood affected area",
    image:"https://c.ndtvimg.com/2020-07/h2maeblo_bihar-floods-650_625x300_28_July_20.jpg"
  },
];
