import axios from "axios";

export class SendRequest {
  constructor() {}

  async postRequest(url: string, data: {}) {
    const res = await axios.post(url, data);
    return res;
  }

  async getRequest(url) {
    const res = await axios.get(`${url}/101`);
    return res;
  }

  async updateRequest(url: string, data: {}) {
    const res = await axios.put(url, data);
    return res;
  }

  async deleteRequest(url: string, data: {}) {
    const res = await axios.delete(`${url}/${data["students_id"]}`);
    return res;
  }
}
export const sendRequest = new SendRequest();
