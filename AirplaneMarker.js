import React from 'react'
import Leaflet from 'leaflet'
import LeafletTrackingMarker from 'react-leaflet-tracking-marker'
export const AirplaneMarker = ({ data }) => {
    // const icon = new Leaflet.DivIcon({
    //     className: "custom-div-icon",
    //     html:
    //         "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'><img src='https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'></i>",
    //     iconSize: [30, 42],
    //     iconAnchor: [15, 42],
    //     popupAnchor: [-3, -42]
    // });
    // const { latitude, longitude } = data
    // const [prevPos, setPrevPos] = React.useState([latitude, longitude])

    // React.useEffect(() => {
    //     if (prevPos[1] !== longitude && prevPos[0] !== latitude) setPrevPos([latitude, longitude])
    // }, [latitude, longitude, prevPos])
    return (
        <div>
            <LeafletTrackingMarker position={[10.8057, 76.1957]} previousPosition={[10.7767, 76.3759]} duration={5000} />
        </div>
    )
}

