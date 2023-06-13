import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import SubDeliveryAPI from "../../api/SubDelivery/SubDeliveryAPI";

const useSubDeliveryListByDistance = () => {
  const { data } = useQuery([QueryKey.SUB_DELIVERY_LIST_BY_DISTANCE], () =>
    SubDeliveryAPI.getListByItem()
  );

  return [{ subDeliveryList: data }];
};

export default useSubDeliveryListByDistance;
