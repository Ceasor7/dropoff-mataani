import { useState, useEffect } from 'react';

const images = [
  {
    id: 1,
    src: '/deliveryguy.jpg',
    link: '/page1',
    text: 'Delivery Guy',
    buttonText: 'Send Mtaani Package',
  },
  {
    id: 2,
    src: '/handingpackages.jpg',
    link: '/page2',
    text: 'Delivering Packages to your doorstep',
    buttonText: 'Send Doorstep Package',
  },
  {
    id: 3,
    src: '/KICC.jpg',
    link: '/page3',
    text: 'Track your Package',
    buttonText: 'Track Package',
  },
];

const AutoSlider = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = images.findIndex(
        (image) => image.id === currentImage.id
      );
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImage]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="relative h-screen">
      <img
        src={currentImage.src}
        alt="Image slider"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 mb-4 flex justify-center">
        {images.map((image) => (
          <div
            key={image.id}
            className={`h-2 w-2 rounded-full mx-2 ${
              currentImage.id === image.id ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-4xl font-bold mb-4">{currentImage.text}</h2>
        <a
          href={currentImage.link}
          className="bg-orange-400 text-black py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-200"
        >
          {currentImage.buttonText}
        </a>
      </div>
    </div>
  );
};

export default AutoSlider;
