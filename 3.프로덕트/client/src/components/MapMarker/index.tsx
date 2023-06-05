import { Marker, NaverMap, useNavermaps } from "react-naver-maps";
import React from "react";

interface MapMarkerProps {
  cluster_id: number;
  index_y: number;
  index_x: number;

  deliver_type: number;
  item_num: number;
  deliver_order: string;
}

const MapMarker = (props: MapMarkerProps) => {
  const naverMaps = useNavermaps();

  return (
    <Marker
      key={props.cluster_id}
      position={new naverMaps.LatLng(props.index_y, props.index_x)}
      title={props.deliver_order}
      icon={{
        content: `<div class="indicator">
      <span
          class="indicator-item badge ${
            props.deliver_type === 1 ? " badge-primary" : " badge-accent"
          }"
      >
        ${props.item_num}
      </span>
        <button class="btn">${props.deliver_order}</button>
      </div>`,
      }}
    />
  );
};

export default MapMarker;
