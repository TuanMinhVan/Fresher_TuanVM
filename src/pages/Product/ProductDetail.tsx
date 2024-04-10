import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  console.log(productId);
  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  );
};
export default ProductDetailPage;
