import axios from "axios";
let API_KEY = "v86c5xHkVFedJk0WFnyixAb0sz4Pjj0uni3R1zgviSgjaWUt3_T_a2J1btZzY5vxS-ejKrQMD4CzB4MqPC5-29cesvXh3ut1prAflEI1up2Vo9BaFEkb4ms4Ry_TYHYx"
let ENDPOINT = "/businesses/search";
const instance  = axios.create({
  baseURL: `https://api.yelp.com/v3/businesses/search`,
  headers: {
    Authorization:
      `Bearer ${API_KEY}`,
  },
});  
// "https://api.yelp.com/v3/businesses/search?location=charlotte&term=mechanic"



export default instance;
