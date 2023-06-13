import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import MainDeliveryAPI from "../../api/MainDelivery/MainDeliveryAPI";

const useMainDeliveryListByDistance = () => {
  const { data } = useQuery([QueryKey.MAIN_DELIVERY_LIST_BY_DISTANCE], () =>
    MainDeliveryAPI.getListByDistance()
  );

  return [{ mainDeliveryList: data }];
};

export default useMainDeliveryListByDistance;
