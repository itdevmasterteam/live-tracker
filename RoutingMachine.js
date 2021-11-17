import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(8.520627748600772, 76.96099208677003),
            L.latLng(8.5218187660874, 76.96396397440878),
            L.latLng(8.520617138190307, 76.96340071049842),
            L.latLng(8.521099911879555, 76.9625343569632),
            L.latLng(8.520359835475203, 76.96219639861698),
            L.latLng(8.520550823071488, 76.9627221116),




            // L.latLng(8.5241, 76.9366),

        ],
        lineOptions: {
            styles: [{ color: "red", weight: 4 }]
        },
        show: true,
        addWaypoints: true,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
