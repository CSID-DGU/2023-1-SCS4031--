import HttpClient from "../service/HttpClient";

const ItemAPI = {
  getItemListByTime: async (id?: string) => {
    try {
      const path = `/item/time/${id}`;
      const response = await HttpClient.get(path);
      console.log(response);

      return response;
    } catch (e) {
      return [];
    }
  },
};

export default ItemAPI;
