export const QueryKey = {
  TOTAL_ITEM_LIST: "totalItemList",

  MAIN_DELIVERY_LIST_BY_TIME: "mainDeliveryListByTime",
  SUB_DELIVERY_LIST_BY_TIME: "subDeliveryListByTime",
  ITEM_LIST_BY_TIME: "itemListByTIME",

  MAIN_DELIVERY_LIST_BY_RATIO: "mainDeliveryListByRatio",
  SUB_DELIVERY_LIST_BY_RATIO: "subDeliveryListByRatio",
  ITEM_LIST_BY_RATIO: "itemListByRatio",

  MAIN_DELIVERY_LIST_BY_DISTANCE: "mainDeliveryListByDistance",
  SUB_DELIVERY_LIST_BY_DISTANCE: "subDeliveryListByDistance",
  ITEM_LIST_BY_DISTANCE: "itemListByDistance",

} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type QueryKey = (typeof QueryKey)[keyof typeof QueryKey];
