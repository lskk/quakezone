import Globals from "../Globals";
import axios from "axios";

export default class EQuakeRestClient {
  url = "";
  globals = new Globals();
  getStaticHeaders = async () => {
    return await {
      Accept: "application/json",
      "Content-Type": "application/json",
      //Authorization: "Basic " + (await this.globals.UserToken())
    };
  };

  buildUrl(endpoint) {
    this.url = this.globals.Protocol + this.globals.Host + "/" + endpoint;
  }

  post = async (endpoint, parameters, callback) => {
    this.buildUrl(endpoint);

    axios
      .post(this.url, parameters, { headers: await this.getStaticHeaders() })
      .then(res => {
        callback(res.data);
      })
      .catch(error => {});
  };

  get = async (endpoint, callback, queryParams) => {
    this.buildUrl(endpoint);

    axios
      .get(this.url, { headers: await this.getStaticHeaders() })
      .then(res => {
        callback(res.data);
      })
      .catch(error => {
      });
  };
}
