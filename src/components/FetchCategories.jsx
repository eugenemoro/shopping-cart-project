import FetchData from './FetchData';

const FetchCategories = () => {
  const url = 'https://fakestoreapi.com/products/categories';
  const data = FetchData(url);
  if (data) return data;
};

export default FetchCategories;
