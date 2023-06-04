import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import SubDeliveryAPI from "../../api/SubDelivery/SubDeliveryAPI";

const useSubDeliveryListByTime = () => {
  const { data } = useQuery([QueryKey.SUB_DELIVERY_LIST_BY_TIME], () =>
    SubDeliveryAPI.getListByItem()
  );

  return { subDeliveryList: data };
};

export default useSubDeliveryListByTime;
