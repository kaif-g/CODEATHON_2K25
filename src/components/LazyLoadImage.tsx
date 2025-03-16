import { useState } from "react";

const LazyLoadImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-all duration-500 w-full h-full object-cover hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
};

export default LazyLoadImage;
