import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import ItemAPI from "../../api/Item/ItemAPI";

const useTotalItemList = () => {
  const { data } = useQuery([QueryKey.TOTAL_ITEM_LIST], () =>
    ItemAPI.getTotalItemList()
  );
  return [{ itemList: data }];
};

export default useTotalItemList;
