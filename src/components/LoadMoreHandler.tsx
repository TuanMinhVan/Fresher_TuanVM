import { useEffect, useRef } from 'react';

/**
 * The LoadMoreHandler component is a React functional component that uses IntersectionObserver to
 * trigger a callback function (onLoadMore) when a specified element comes into view, based on the
 * hasMore and loadingMore props.
 * @param  - - `hasMore`: A boolean indicating whether there are more items to load.
 * @returns A React functional component named LoadMoreHandler is being returned. This component sets
 * up an IntersectionObserver to detect when a specified element (loaderRef) becomes visible on the
 * screen. When the element is intersecting with the viewport and certain conditions are met (not
 * loading more data and there is more data to load), the onLoadMore function is called. The component
 * itself returns a div element with a ref set
 */

const LoadMoreHandler: React.FC<{
  hasMore: boolean;
  loadingMore: boolean;
  onLoadMore: () => void;
}> = ({ onLoadMore, hasMore, loadingMore }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      if (loadingMore || !hasMore) return;
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => observer.disconnect();
  }, [hasMore, loadingMore, onLoadMore]);

  return <div ref={loaderRef} />;
};
export default LoadMoreHandler;
