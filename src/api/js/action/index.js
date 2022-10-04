import axios from 'axios';
import apiItem from '../apiItemManage';

const getProducts = (code) => {
  axios.post(apiItem.getProducts + '?code=' + code).then(res => {
    console.log(res);
  }).catch(err => {
    console.error('getProducts api issue');
  });
}

const addProductFun = (title, price, code, notes) => {
  axios.post(`${apiItem.addProduct}?title=${title}&price=${price}&code=${code}&notes=${notes}`).then(res => {
    console.log(res);
  }).catch(err => {
    console.error('addProduct api issue');
  });
}

const funList = {
  getProducts,
  addProductFun
};

export default funList;