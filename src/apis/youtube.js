import axios from "axios";

const KEY = "AIzaSyBr_0EvLqfpLCZS_5HugFTsv-0y97Jw3Pw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
