export const DeliveryType = {
  MAIN: 0,
  SUB: 1,
} as const;

export type DeliveryType = typeof DeliveryType;
