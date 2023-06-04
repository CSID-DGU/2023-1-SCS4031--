import ItemTable from "../components/ItemTable";
import ItemRow from "../components/ItemRow";
import { useEffect, useState } from "react";
import useItemListByTime from "../hooks/query/useItemListByTime";

const ItemRowPage = () => {
  const [itemList] = useItemListByTime();

  return (
    <>
      <ItemTable>
        <ItemRow
          itemName={"아이폰 1313133"}
          itemCategory={"전자제품"}
          mainAddress={"경기도 수원시 정자로"}
          subAddress={"209동 403호"}
          date={"23.03.31"}
        />
        <ItemRow
          itemName={"아이폰 1313133"}
          itemCategory={"전자제품"}
          mainAddress={"경기도 수원시 정자로"}
          subAddress={"209동 403호"}
          date={"23.03.31"}
        />
        <ItemRow
          itemName={"아이폰 1313133"}
          itemCategory={"전자제품"}
          mainAddress={"경기도 수원시 정자로"}
          subAddress={"209동 403호"}
          date={"23.03.31"}
        />
      </ItemTable>
    </>
  );
};

export default ItemRowPage;
