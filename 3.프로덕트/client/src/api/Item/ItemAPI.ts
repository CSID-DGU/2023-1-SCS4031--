import axios from "axios";
import HttpClient from "../service/HttpClient";

const ItemAPI = {
  getItemListById: async (id?:string) => {
    try {
      const idList = [1, 2, 3, 17, 3, 49]
      const path = `/item/${id && idList.includes(parseInt(id)) ? id : 'time'}`;
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      return []
    }
  },
};

export default ItemAPI;
