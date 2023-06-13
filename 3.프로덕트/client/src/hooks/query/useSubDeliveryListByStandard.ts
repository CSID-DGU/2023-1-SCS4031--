import { useQuery } from "react-query";
import SubDeliveryAPI from "../../api/SubDelivery/SubDeliveryAPI";

const useSubDeliveryListByStandard = (standard: string) => {
  const { data } = useQuery(["SUB", standard], () => {
    if (standard === "ratio") {
      return SubDeliveryAPI.getListByRatio();
    }
    if (standard === "distance") {
      return SubDeliveryAPI.getListByDistance();
    }
    return SubDeliveryAPI.getListByItem();
  });

  return [{ subDeliveryList: data }];
};

export default useSubDeliveryListByStandard;
