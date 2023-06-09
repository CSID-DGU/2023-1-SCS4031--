export const QueryKey = {
  ITEM_LIST_BY_TIME: "itemListByTime",
  MAIN_DELIVERY_LIST_BY_TIME: "mainDeliveryListByTime",
  SUB_DELIVERY_LIST_BY_TIME: "subDeliveryListByTime",
  ITEM_LIST_BY_Id: "itemListById"
} as const;

export type QueryKey = (typeof QueryKey)[keyof typeof QueryKey];
