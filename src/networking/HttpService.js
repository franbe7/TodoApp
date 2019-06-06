import axios from "axios";
import { Route } from "src/helpers/Route";

class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: Route.BASE_URL,
    });
  }

  get(url, params = {}) {
    return this.axios.get(url, {
      params,
    });
  }

  post(url, body) {
    return this.axios.post(url, body);
  }

  put(url, body) {
    return this.axios.put(url, body);
  }

  patch(url, body) {
    return this.axios.patch(url, body);
  }

  delete(url) {
    return this.axios.delete(url);
  }
}

export default new HttpService();
