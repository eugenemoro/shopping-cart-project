import FetchData from './FetchData';

const FetchProducts = (id) => {
  const url = !id ? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${id}`;
  const data = FetchData(url);

  if (data) return data; 
};

export default FetchProducts;
