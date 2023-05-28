import { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useOrder } from "../../hooks/contextOrder";
import { getShopsById, getAddressByLocation } from "../../services/apiBackend";
import { MAP_KEY } from "../../constants/googkeKeys";
import styles from "./Map.module.scss";
interface IProps {
  setAddress: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<string>>;
}

const Map: FC<IProps> = ({ setAddress, setLocation }) => {
  const { order } = useOrder();

  const [response, setResponse] = useState(null);

  const [locationBuyer, setLocationBuyer] = useState();
  const [locationStore, setLocationStore] = useState();

  useEffect(() => {
    if (!locationBuyer) return;

    //@ts-ignore
    setLocation(`${locationBuyer.lat}, ${locationBuyer.lng}`);

    console.log(locationBuyer);

    const controller = new AbortController();

    const load = async () => {
      try {
        const addr = await getAddressByLocation(
          //@ts-ignore
          String(locationBuyer.lat),
          //@ts-ignore
          String(locationBuyer.lng),
          controller
        );
        setAddress(addr);
      } catch (Error) {
        setAddress("");
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, [locationBuyer, setAddress, setLocation]);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const { location } = await getShopsById(order.shop, controller);

        const arrLocation = location.split(",");
        // console.log("arrLocation", Number(arrLocation[0]));
        // console.log("arrLocation", Number(arrLocation[1]));

        setLocationStore({
          //@ts-ignore
          lat: Number(arrLocation[0]),
          lng: Number(arrLocation[1]),
        });
      } catch (Error) {
        setLocationStore({
          //@ts-ignore
          lat: 50.46993065494816,
          lng: 30.501830359078916,
        });
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, [order.shop]);

  const directionsCallback = (response: any) => {
    if (response !== null) {
      if (response.status === "OK") {
        setResponse(response);
      }
    }
  };

  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  const onClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng?.lat() && e.latLng?.lng()) {
      setLocationBuyer({
        //@ts-ignore
        lat: e.latLng?.lat(),
        lng: e.latLng?.lng(),
      });
      setResponse(null);
    }
  };

  return (
    <div className={styles.WrapMap}>
      <LoadScript googleMapsApiKey={MAP_KEY}>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={locationStore}
          zoom={13}
          onClick={onClick}
        >
          {locationBuyer && (
            <Marker
              onLoad={onLoad}
              //@ts-ignore
              position={locationBuyer}
            />
          )}

          {locationStore && (
            <Marker
              onLoad={onLoad}
              //@ts-ignore
              position={locationStore}
            />
          )}

          {!response && locationStore && locationBuyer && (
            <DirectionsService
              options={{
                destination: locationStore,
                origin: locationBuyer,
                //@ts-ignore
                travelMode: "WALKING",
              }}
              callback={directionsCallback}
            />
          )}
          {response && (
            <DirectionsRenderer
              // required
              options={{
                directions: response,
              }}
              routeIndex={0}
            />
          )}
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
