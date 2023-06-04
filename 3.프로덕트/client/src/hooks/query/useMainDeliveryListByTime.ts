import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import MainDeliveryAPI from "../../api/MainDelivery/MainDeliveryAPI";

const useMainDeliveryListByTime = () => {
  const { data } = useQuery([QueryKey.MAIN_DELIVERY_LIST_BY_TIME], () =>
    MainDeliveryAPI.getListByItem()
  );

  return [{ mainDeliveryList: data }];
};

export default useMainDeliveryListByTime;
