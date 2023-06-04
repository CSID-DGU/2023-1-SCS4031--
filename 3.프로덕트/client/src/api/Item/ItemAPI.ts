import axios from "axios";
import HttpClient from "../service/HttpClient";

const ItemAPI = {
  getItemListByTime: async () => {
    try {
      const path = "/item/time";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      console.error("error", e);
    }
  },
};

export default ItemAPI;
