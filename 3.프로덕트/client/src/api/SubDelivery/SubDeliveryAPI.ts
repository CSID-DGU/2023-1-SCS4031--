import HttpClient from "../service/HttpClient";

const SubDeliveryAPI = {
  getListByItem: async () => {
    try {
      const path = "/cluster/time/sub";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      return console.error(e);
    }
  },

  getListByDistance: async () => {
    try {
      const path = "/cluster/distance/sub";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      return console.error(e);
    }
  },

  getListByRatio: async () => {
    try {
      const path = "/cluster/ratio/sub";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      return console.error(e);
    }
  },
};

export default SubDeliveryAPI;
