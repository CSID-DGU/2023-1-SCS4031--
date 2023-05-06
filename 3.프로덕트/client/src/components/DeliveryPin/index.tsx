import { DeliveryType } from "../../constants/delivery";
interface DeliveryPinProps {
  deliveryType: DeliveryType;
  deliveryTurn: number;
  locationX?: number;
  locationY?: number;
}

const DeliveryPin = (props: DeliveryPinProps) => {
  return (
    <div>
      test
      {props.deliveryTurn}
    </div>
  );
};

export default DeliveryPin;
