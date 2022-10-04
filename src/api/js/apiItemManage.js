let postAPI = (path) => {
  return 'http://120.24.92.89:8080' + path;
}
const api = {
  getProducts: postAPI("/product/getProducts"),
  deleteProduct: postAPI("/product/deleteProduct"),
  addProduct: postAPI("/product/addProduct"),
  updateProduct: postAPI("/product/updateProduct")
};

export default api;