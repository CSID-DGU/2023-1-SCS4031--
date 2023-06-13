import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import ItemAPI from "../../api/Item/ItemAPI";

const useItemListByTime = (id: string) => {
  const { data } = useQuery([QueryKey.ITEM_LIST_BY_TIME, id], () =>
    ItemAPI.getItemListByTime(id)
  );
  return [{ itemListById: data }];
};

export default useItemListByTime;
