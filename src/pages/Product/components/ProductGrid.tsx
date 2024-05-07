import { Product } from '../../../models/product';

interface ProductGridProps {
  products: Product[];
}
/* This code snippet defines a functional component named `ProductGrid` in TypeScript React. The
component takes in a prop `products` of type `Product[]` (an array of `Product` objects). */

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div className="group relative" key={product.id}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700 text-left">
                <a href={'/products/' + product.id}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500 text-left">
                {product.description}
              </p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              {product.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductGrid;
