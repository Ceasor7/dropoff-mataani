import { useState, useEffect } from 'react';

const images = ['deliveryguy.jpg', 'handingpackages.jpg', 'KICC.jpg'];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trackingNumber, setTrackingNumber] = useState('');

  useEffect(() => {
    // Automatically move to the next slide every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleTrackingNumberChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={image}
            alt=""
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="block text-gray-700 font-bold mb-2">
          Enter Tracking Code
        </p>
        <input
          className="w-full py-2 px-4 rounded-lg bg-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          type="text"
          placeholder="Enter tracking number"
          value={trackingNumber}
          onChange={handleTrackingNumberChange}
        />
      </div>
    </div>
  );
};

export default Slider;
