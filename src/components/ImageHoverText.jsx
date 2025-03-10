import React from "react";

const ImageHoverText = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-xl shadow-lg hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />z
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">{image.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageHoverText;
