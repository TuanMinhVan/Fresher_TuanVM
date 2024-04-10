import {
  useEffect,
  useRef,
} from 'react';

const LoadMoreHandler: React.FC<{
  hasMore: boolean;
  loadingMore: boolean;
  onLoadMore: () => void;
}> = ({ onLoadMore, hasMore, loadingMore }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
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
