import giphyApi from "giphy-api";
import * as dotenv from 'dotenv';
dotenv.config();

const GIPHY_KEY = process.env.GIPHY_API_KEY;

const API = new giphyApi(GIPHY_KEY);

class Giphy {
  constructor() {
    this.API = API;
  }

  async search(query) {
    const { data } = await this.API.search(query);
    (
        {
            q: String,
            limit: Number,
            offset: Number,
            rating: String,
            lang: String,
            fmt: String
        }
    )
    return data;
  }
}
Giphy = new Giphy();

export default Giphy;