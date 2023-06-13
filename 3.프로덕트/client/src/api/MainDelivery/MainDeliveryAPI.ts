import HttpClient from "../service/HttpClient";

const MainDeliveryAPI = {
  // eslint-disable-next-line consistent-return
  getListByItem: async () => {
    try {
      const path = "/cluster/time/main";
      const response = await HttpClient.get(path);
      console.log(response);

      return response;
    } catch (e) {
      console.error(e);
    }
  },

  getListByDistance: async () => {
    try {
      const path = "/cluster/distance/main";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      return console.error(e);
    }
  },

  getListByRatio: async () => {
    try {
      const path = "/cluster/ratio/main";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      return console.error(e);
    }
  },
};

export default MainDeliveryAPI;
