import HttpClient from "../service/HttpClient";

const MainDeliveryAPI = {
  getListByItem: async () => {
    try {
      const path = "/delivery/main/time";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      console.error(e);
    }
  },
};

export default MainDeliveryAPI;
