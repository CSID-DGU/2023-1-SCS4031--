import { Marker, NaverMap, useNavermaps } from "react-naver-maps";
import React from "react";

interface ClusterMarkerProps {
  cluster_id: number;
  index_y: number;
  index_x: number;

  deliver_type: number;
  item_num: number;
  deliver_order: string;
  visibleItemIndex: string;
  setVisibleItemIndex:any;
}

const ClusterMarker = (props: ClusterMarkerProps) => {
  const naverMaps = useNavermaps();

  const handleOnClick = () => {
      if(props.visibleItemIndex === props.deliver_order){
          return props.setVisibleItemIndex('-1');
      }
      props.setVisibleItemIndex(props.deliver_order);
  }

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
      onClick={handleOnClick}
    />
  );
};

export default ClusterMarker;
