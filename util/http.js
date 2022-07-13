import axios from "axios";
import { firebase } from "./urls";

export const recordPurchase = async purchase => {
  try {
    axios.post(`${firebase}/newpuchase.json`, purchase);
  } catch (error) {
    console.log(error);
  }
};

export const getPurchase = async () => {
  try {
    const response = await axios.get(`${firebase}/newpuchase.json`);
    const data = response.data;
    let records = [];
    for (const key in data) {
      const purchaseObj = {
        id: key,
        creditcard: response.data[key].card,
        date: `${response.data[key].month} / ${response.data[key].year}`,
        amount: response.data[key].total,
      };
      records.push(purchaseObj);
    }
    return records.reverse();
  } catch (error) {
    console.log(error);
  }
};

export const deletePurchase = (id, purchase) => {
  axios.put(`${firebase}/newpuchase/${id}.json`, purchase);
};
export const updatePurchase = () => {
  axios.delete(`${firebase}/newpuchase/${id}.json`);
};
