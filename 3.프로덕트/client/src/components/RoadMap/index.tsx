import React, { useEffect, useState } from "react";
import DeliveryPin from "../DeliveryPin";

import {
  NaverMap,
  Marker,
  Container as MapDiv,
  useNavermaps,
} from "react-naver-maps";

const RoadMap = (): JSX.Element => {
  const naverMaps = useNavermaps();

  const [myData, setMyData] = useState<any>([]);

  useEffect(() => {
    // setMyData();
  }, []);

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <NaverMap
        defaultCenter={{ lat: 37.7357597, lng: 127.047849 }}
        defaultZoom={16}
      >
        {myData.map((data: any) => (
          <Marker
            key={data.cluster_id}
            position={new naverMaps.LatLng(data.index_y, data.index_x)}
            animation={2}
            title={data.deliver_order}
            icon={{
              content: `<div class="indicator">
                            <span class="indicator-item badge ${
                              data.deliver_type === 1
                                ? "badge-primary"
                                : "badge-accent"
                            }">${data.item_num}</span> 
                            <button class="btn">${data.deliver_order}</button>
                        </div>`,
            }}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
};

export default RoadMap;
