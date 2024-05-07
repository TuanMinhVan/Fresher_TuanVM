import { useEffect, useState } from 'react';

import axios from 'axios';

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios(
          'https://dummyjson.com/products/categories'
        );
        const data = await response.data;
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    getCategory();
  }, []);

  return (
    <div className="category-list container  mt-3  mb-3">
      {categories.map((category) => (
        <a className="category-item" key={category} href={`/${category}`}>
          <h5 style={{ textTransform: 'capitalize' }}>{category}</h5>
        </a>
      ))}
    </div>
  );
};
export default CategoryList;
