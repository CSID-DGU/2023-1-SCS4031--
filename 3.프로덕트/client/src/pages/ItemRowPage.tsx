import ItemTable from "../components/ItemTable";
import ItemRow from "../components/ItemRow";
import { itemType } from "../type/itemType";
import useTotalItemList from "../hooks/query/useTotalItemList";

const ItemRowPage = () => {
  const [{ itemList }] = useTotalItemList();

  return (
    <ItemTable>
      {itemList &&
        itemList.map((item: itemType) => {
          return (
            <ItemRow
              key={item.id}
              itemName={item.name}
              mainAddress={item.address}
              delivery_state={item.delivery_state}
            />
          );
        })}
    </ItemTable>
  );
};

export default ItemRowPage;
