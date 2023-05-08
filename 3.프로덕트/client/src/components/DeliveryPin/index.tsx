import { DeliveryType } from "../../constants/delivery";
interface DeliveryPinProps {
  deliveryType: DeliveryType;
  deliveryTurn: number;
  locationX?: number;
  locationY?: number;
  locationName: string;
}

const DeliveryPin = (props: DeliveryPinProps) => {
  return (
    <div className="indicator">
      <span className="indicator-item badge badge-secondary">
        {props.deliveryTurn}
      </span>
      <button className="btn">{props.locationName}</button>
    </div>
  );
};

export default DeliveryPin;
