import HttpClient from "../service/HttpClient";

const ItemAPI = {
  getTotalItemList: async () => {
    try {
      const path = "/item/all";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      return console.error(e);
    }
  },
  getItemListByTime: async (id?: string) => {
    try {
      const path = `/item/time/${id}`;
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      return [];
    }
  },
};

export default ItemAPI;
