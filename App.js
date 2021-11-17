import React, { StrictMode, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, Rectangle, FeatureGroup, Circle } from 'react-leaflet';
import RoutineMachine from "./RoutingMachine";
import { AirplaneMarker } from './AirplaneMarker';
import { getRequiredSVGPinByCategory } from './Utils'
const DEFAULT_LAG = 10.8505;
const DEFAULT_LAT = 76.2711;
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]
const purpleOptions = { color: 'purple' }
function App() {

  const [location, setLocation] = React.useState([10.7767, 76.3759])
  console.log({ location })
  // const addMarker = (e) => {
  //   console.log(e.latlng)
  //   // const { markers } = this.state;
  //   setLocation([])
  //   // location.pop();

  //   // location.push(e.latlng);
  //   setLocation(...e.latlng)
  //   // this.setState({ markers });
  // }
  // setInterval(() => {
  //   // console.log('location', location)
  //   setLocation((prevState) => {
  //     console.log('prev', prevState)
  //     return [prevState[0] + 1, prevState[1] + 1]
  //   })
  //   // location?.map((item, index) => {
  //   //   console.log('item', item + 2)
  //   //   // return item + Number(01.0000)
  //   // })
  // }, 8000);
  useEffect(() => {

  }, [location])
  return (
    <div className="App">
      <h3>Map</h3>
      <MapContainer
        className="markercluster-map"
        center={[DEFAULT_LAG, DEFAULT_LAT]}
        // onClick={(e) => addMarker(e)}
        zoom={10}
        maxZoom={22}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location}>
          {/* icon={getRequiredSVGPinByCategory('motorcycle', { fill: 'orange' })} */}
          <Popup>
            <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
          </Popup>
        </Marker>
        <RoutineMachine />
        {/* <AirplaneMarker /> */}
        {/* <Rectangle bounds={rectangle} /> */}
        <FeatureGroup pathOptions={purpleOptions}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[DEFAULT_LAG, DEFAULT_LAT]} radius={200} />
          {/* <Rectangle bounds={rectangle} /> */}
        </FeatureGroup>
      </MapContainer>
    </div>
  );
}

export default App;
