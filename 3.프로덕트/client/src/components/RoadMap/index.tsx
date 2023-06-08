import React, { useEffect, useState } from "react";
import DeliveryPin from "../DeliveryPin";

import {
  NaverMap,
  Marker,
  Container as MapDiv,
  useNavermaps,
} from "react-naver-maps";
import useMainDeliveryListByTime from "../../hooks/query/useMainDeliveryListByTime";
import useSubDeliveryListByTime from "../../hooks/query/useSubDeliveryListByTime";
import MapPin from "../MapMarker";

interface RoadMapProps {
  isMainVisible: boolean;
  isSubVisible: boolean;
}

const RoadMap = ({
  isMainVisible,
  isSubVisible,
}: RoadMapProps): JSX.Element => {
  const naverMaps = useNavermaps();

  const [{ mainDeliveryList }] = useMainDeliveryListByTime();
  const [{ subDeliveryList }] = useSubDeliveryListByTime();

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "500px",
      }}
    >
      <NaverMap
        defaultCenter={{ lat: 37.7357597, lng: 127.047849 }}
        defaultZoom={16}
      >
        {isMainVisible &&
          mainDeliveryList &&
          mainDeliveryList.map((data: any) => (
            <MapPin
              key={data.cluster_id}
              cluster_id={data.cluster_id}
              index_y={data.index_y}
              index_x={data.index_x}
              deliver_type={data.deliver_type}
              item_num={data.item_num}
              deliver_order={data.deliver_order}
            />
          ))}
        {isSubVisible &&
          subDeliveryList &&
          subDeliveryList.map((data: any) => (
            <MapPin
              key={data.cluster_id}
              cluster_id={data.cluster_id}
              index_y={data.index_y}
              index_x={data.index_x}
              deliver_type={data.deliver_type}
              item_num={data.item_num}
              deliver_order={data.deliver_order}
            />
          ))}
      </NaverMap>
    </MapDiv>
  );
};

export default RoadMap;
