import { useState, useEffect } from 'react';

const images = [
  {
    id: 1,
    src: '/deliveryguy.jpg',
    link: '/page1',
    text: 'If you are looking for a reliable and affordable way to send your parcels to your customers in Nairobi, look no further than Dropoff Mtaani courier service. Dropoff Mtaani is a logistics company that helps you deliver your packages to their agents all over the city for only 100 shillings. Your customers can then pick up their parcels from the nearest agent at their convenience. Dropoff Mtaani is fast, easy and convenient. You can track your delivery status online and get notified when your package reaches the agent. Dropoff Mtaani is the best solution for your delivery needs. Contact them today on 0727 497 852 or visit their Facebook page for more information.',
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
      <div className="absolute inset-x-0 bottom-0 bg-gray-900 bg-opacity-50 px-4 py-6">
        <h2 className="text-xl text-white font-bold mb-4">
          {currentImage.text}
        </h2>
        <a
          href={currentImage.link}
          className="bg-orange-400 text-black py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-700 text-sm"
        >
          {currentImage.buttonText}
        </a>
      </div>
    </div>
  );
};

export default AutoSlider;
