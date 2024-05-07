/* The code you provided defines a functional component called `Navigator` in TypeScript with React.
Here's a breakdown of what the component does: */

const Navigator: React.FC = () => {
  // const { handleSearchChange } = useContext(SearchContext);
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   handleSearchChange(searchTerm);
  // };

  // const clearSearch = (event: any) => {
  //   event.preventDefault();
  //   setSearchTerm('');
  //   handleSearchChange('');
  // };

  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Shop của bạn
        </a>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/">Trang Chủ</a>
            </li>
            <li>
              <a href="/products">Sản Phẩm</a>
            </li>
            <li>
              <a href="/about">Về Chúng Tôi</a>
            </li>
          </ul>
        </nav>

        {/* Giỏ hàng  */}
        <a href="/cart" className="text-blue-500 hover:text-blue-700">
          <i className="fas fa-shopping-cart fa-lg"></i>
        </a>
      </div>
    </header>
  );
};

export default Navigator;
