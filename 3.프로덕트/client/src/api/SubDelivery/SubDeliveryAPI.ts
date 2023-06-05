import HttpClient from "../service/HttpClient";

const SubDeliveryAPI = {
  getListByItem: async () => {
    try {
      const path = "/delivery/sub/time";
      const response = HttpClient.get(path);

      return response;
    } catch (e) {
      console.error(e);
    }
  },
};

export default SubDeliveryAPI;
