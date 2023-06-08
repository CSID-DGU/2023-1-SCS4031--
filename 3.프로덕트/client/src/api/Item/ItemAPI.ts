import axios from "axios";
import HttpClient from "../service/HttpClient";

const ItemAPI = {
  getItemListById: async (id?:string) => {
    try {
      let path = `/item/${id ? id : 'time'}`;
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      return [{}]
    }
  },
};

export default ItemAPI;
