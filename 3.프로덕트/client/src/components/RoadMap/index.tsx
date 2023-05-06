import React, { useEffect, useState } from "react";
import DeliveryPin from "../DeliveryPin";

import {
  NaverMap,
  Marker,
  Container as MapDiv,
  useNavermaps,
} from "react-naver-maps";

const RoadMap = () => {
  const naverMaps = useNavermaps();

  const [myData, setMyData] = useState<any>([]);

  useEffect(() => {
    setMyData([
      {
        deliveryType: 1,
        order: 11,
        station: "잠실새내",
        code: [37.511687, 127.086162],
      },
      {
        deliveryType: 1,
        order: 23,
        station: "종합운동장",
        code: [37.510997, 127.073642],
      },
      {
        deliveryType: 1,
        order: 1456,
        station: "삼성",
        code: [37.508844, 127.06316],
      },
      {
        deliveryType: 1,
        order: 71,
        station: "선릉",
        code: [37.504503, 127.049008],
      },
      {
        deliveryType: 1,
        order: 1341,
        station: "역삼",
        code: [37.500622, 127.036456],
      },
      {
        deliveryType: 1,
        order: 65,
        station: "강남",
        code: [37.497175, 127.027926],
      },
      {
        deliveryType: 1,
        order: 333,
        station: "교대",
        code: [37.493415, 127.01408],
      },
      {
        deliveryType: 1,
        order: 575,
        station: "방배",
        code: [37.481426, 126.997596],
      },
      {
        deliveryType: 1,
        order: 3,
        station: "사당",
        code: [37.47653, 126.981685],
      },
      {
        deliveryType: 1,
        order: 578,
        station: "신대방",
        code: [37.487462, 126.913149],
      },
      {
        deliveryType: 1,
        order: 976,
        station: "구로디지털단지",
        code: [37.485266, 126.901401],
      },
      {
        deliveryType: 1,
        order: 1343,
        station: "신도림",
        code: [37.508725, 126.891295],
      },
      {
        deliveryType: 1,
        order: 2345,
        station: "문래",
        code: [37.517933, 126.89476],
      },
    ]);
  }, []);

  if (myData.length === 0) return;

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <NaverMap
        defaultCenter={{ lat: 37.497175, lng: 127.027926 }}
        defaultZoom={14}
      >
        {myData.map((data: any) => (
          <Marker
            key={data.order}
            position={new naverMaps.LatLng(data.code[0], data.code[1])}
            animation={2}
            title={data.station}
            icon={{
              content: `<button class="markerBox">
                <div class="totalOrder">${data.order}</div>
                ${data.station}</button>`,
            }}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
};

export default RoadMap;
