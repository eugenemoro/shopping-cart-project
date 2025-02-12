import FetchData from './FetchData';

const FetchProduct = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const data = FetchData(url);
  if (data) return data;
};

export default FetchProduct;
