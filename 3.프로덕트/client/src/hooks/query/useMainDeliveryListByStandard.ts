import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import MainDeliveryAPI from "../../api/MainDelivery/MainDeliveryAPI";

const useMainDeliveryListByRatio = (standard: string) => {
  const { data } = useQuery(["MAIN"], () => {
    if (standard === "ratio") {
      return MainDeliveryAPI.getListByRatio();
    }
    if (standard === "distance") {
      return MainDeliveryAPI.getListByDistance();
    }
    return MainDeliveryAPI.getListByItem();
  });

  return [{ mainDeliveryList: data }];
};

export default useMainDeliveryListByRatio;
