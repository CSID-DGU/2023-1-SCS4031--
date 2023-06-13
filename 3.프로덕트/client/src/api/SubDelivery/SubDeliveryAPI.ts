import HttpClient from "../service/HttpClient";

const SubDeliveryAPI = {
  // eslint-disable-next-line consistent-return
  getListByItem: async () => {
    try {
      const path = "/cluster/time/sub";
      const response = await HttpClient.get(path);

      return response;
    } catch (e) {
      console.error(e);
    }
  },
};

export default SubDeliveryAPI;
