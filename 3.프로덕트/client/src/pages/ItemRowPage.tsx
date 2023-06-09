import ItemTable from "../components/ItemTable";
import ItemRow from "../components/ItemRow";
import { useEffect, useState } from "react";
import useItemListByTime from "../hooks/query/useItemListByTime";
import {itemType} from "../type/itemType";

const ItemRowPage = () => {
  const [{itemListByTime}] = useItemListByTime();

  return (
    <>
      <ItemTable>
        {itemListByTime && itemListByTime.map((item: itemType) => {
          return <ItemRow key={item.id} itemName={item.name} mainAddress={item.address} delivery_state={item.delivery_state}/>
        })}
      </ItemTable>
    </>
  );
};

export default ItemRowPage;
