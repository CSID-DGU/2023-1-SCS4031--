import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import MainDeliveryAPI from "../../api/MainDelivery/MainDeliveryAPI";

const useMainDeliveryListByRatio = () => {
  const { data } = useQuery([QueryKey.MAIN_DELIVERY_LIST_BY_RATIO], () =>
    MainDeliveryAPI.getListByRatio()
  );

  return [{ mainDeliveryList: data }];
};

export default useMainDeliveryListByRatio;
