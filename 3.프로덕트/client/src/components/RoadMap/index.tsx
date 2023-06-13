import React, { useEffect, useState } from "react";
import { NaverMap, Container as MapDiv } from "react-naver-maps";

import ClusterMarker from "../ClusterMarker";
import useItemListByTime from "../../hooks/query/useItemListByTime";
import ItemMarker from "../ItemMarker";
import useMainDeliveryListByStandard from "../../hooks/query/useMainDeliveryListByStandard";
import useSubDeliveryListByStandard from "../../hooks/query/useSubDeliveryListByStandard";

interface RoadMapProps {
  isMainVisible: boolean;
  isSubVisible: boolean;
  standard: string;
}

const RoadMap = ({ isMainVisible, isSubVisible, standard }: RoadMapProps): JSX.Element => {
  const [visibleItemIndex, setVisibleItemIndex] = useState<string>("-1");

  const [{ mainDeliveryList }] = useMainDeliveryListByStandard(standard);
  const [{ subDeliveryList }] = useSubDeliveryListByStandard(standard);
  const [{ itemListById }] = useItemListByTime(visibleItemIndex);

  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number } | string>(
    ""
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  }, []);

  useEffect(() => {
    console.log(myLocation);
  }, [myLocation]);

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "500px",
      }}
    >
      <NaverMap defaultCenter={{ lat: 37.7357297, lng: 127.044549 }} defaultZoom={16}>
        {isMainVisible &&
          mainDeliveryList &&
          mainDeliveryList.map((data: any) => (
            <ClusterMarker
              key={data.cluster_id}
              cluster_id={data.cluster_id}
              index_y={data.index_x}
              index_x={data.index_y}
              deliver_type={data.deliver_type}
              item_num={data.item_num}
              deliver_order={data.deliver_order}
              visibleItemIndex={visibleItemIndex}
              setVisibleItemIndex={setVisibleItemIndex}
            />
          ))}
        {isSubVisible &&
          subDeliveryList &&
          subDeliveryList.map((data: any) => (
            <ClusterMarker
              key={data.cluster_id}
              cluster_id={data.cluster_id}
              index_y={data.index_x}
              index_x={data.index_y}
              deliver_type={data.deliver_type}
              item_num={data.item_num}
              deliver_order={data.deliver_order}
              visibleItemIndex={visibleItemIndex}
              setVisibleItemIndex={setVisibleItemIndex}
            />
          ))}
        {visibleItemIndex !== "-1" &&
          itemListById &&
          typeof itemListById === "object" &&
          Object.values(itemListById.default).map((data: any) => {
            return (
              <ItemMarker
                key={data.id}
                item_id={data.id}
                index_y={data.index_x}
                index_x={data.index_y}
              />
            );
          })}
      </NaverMap>
    </MapDiv>
  );
};

export default RoadMap;
