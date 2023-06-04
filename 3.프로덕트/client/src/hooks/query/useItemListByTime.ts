import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import ItemAPI from "../../api/Item/ItemAPI";

const useItemListByTime = () => {
  const { data } = useQuery([QueryKey.ITEM_LIST_BY_TIME], () =>
    ItemAPI.getItemListByTime()
  );

  return [{ itemListByTime: data }];
};

export default useItemListByTime;
