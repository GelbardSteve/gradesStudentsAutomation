import axios from "axios";

class SendRequest {
  constructor() {}

  async postRequest(url: string, data: {}) {
    const res = await axios.post(url, data);
    return res;
  }

  async getRequest(url: string) {
    const res = await axios.get(url);
    return res;
  }

  async updateRequest(url: string, data: {}) {
    const res = await axios.put(url, data);
    return res;
  }

  async deleteRequest(url: string, data: {}, whatToDelete: string) {
    const res = await axios.delete(`${url}/${data[whatToDelete]}`);
    return res;
  }
}
export const sendRequest = new SendRequest();
