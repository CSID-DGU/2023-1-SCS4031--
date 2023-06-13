import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import SubDeliveryAPI from "../../api/SubDelivery/SubDeliveryAPI";

const useSubDeliveryListByRatio = () => {
  const { data } = useQuery([QueryKey.SUB_DELIVERY_LIST_BY_RATIO], () =>
    SubDeliveryAPI.getListByItem()
  );

  return [{ subDeliveryList: data }];
};

export default useSubDeliveryListByRatio;
