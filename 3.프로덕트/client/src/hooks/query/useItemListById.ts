import { useQuery } from "react-query";
import { QueryKey } from "../../constants/enums";
import ItemAPI from "../../api/Item/ItemAPI";

const useItemListById = (id:string) => {
    const { data } = useQuery([QueryKey.ITEM_LIST_BY_Id, id], () =>
        ItemAPI.getItemListById(id)
    );
    return [{ itemListById: data }];
};

export default useItemListById;
