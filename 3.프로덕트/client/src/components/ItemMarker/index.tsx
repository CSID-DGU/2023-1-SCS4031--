import {Marker, useNavermaps} from "react-naver-maps";

interface ItemMarkerProps {
    item_id: number;
    index_y: number;
    index_x: number;

}
const ItemMarker = (props: ItemMarkerProps) => {
    const naverMaps = useNavermaps();

    return(
        <Marker
            key={props.item_id}
            position={new naverMaps.LatLng(props.index_y, props.index_x)}
            title={`${props.item_id}`}
        />
    )
}

export default ItemMarker;