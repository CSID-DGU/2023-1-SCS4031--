import { Marker, NaverMap, useNavermaps } from "react-naver-maps";
import React from "react";

interface ClusterMarkerProps {
  cluster_id: number | string;
  index_y: number;
  index_x: number;

  deliver_type: number;
  item_num: number;
  deliver_order: string;
  visibleItemIndex: string;
  setVisibleItemIndex: any;
}

const ClusterMarker = ({
  visibleItemIndex,
  deliver_order,
  deliver_type,
  cluster_id,
  setVisibleItemIndex,
  index_x,
  index_y,
  item_num,
}: ClusterMarkerProps) => {
  const naverMaps = useNavermaps();

  // eslint-disable-next-line consistent-return
  const handleOnClick = () => {
    if (visibleItemIndex === cluster_id) {
      return setVisibleItemIndex("-1");
    }
    setVisibleItemIndex(cluster_id);
  };

  return (
    <Marker
      key={cluster_id}
      position={new naverMaps.LatLng(index_y, index_x)}
      title={deliver_order}
      icon={{
        content: `<div class="indicator">
      <span
          class="indicator-item badge ${
            deliver_type === 1 ? " badge-primary" : " badge-accent"
          }"
      >
        ${item_num}
      </span>
        <button class="btn">${deliver_order}</button>
      </div>`,
      }}
      onClick={handleOnClick}
    />
  );
};

export default ClusterMarker;
