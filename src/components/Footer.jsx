import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <p className="text-white">Dropoff Mtaani © 2023</p>
          </div>
          <div className="flex items-center">
            <a href="https://www.facebook.com/mycompany">
              <FaFacebook className="text-white text-2xl mx-2 hover:text-gray-400" />
            </a>
            <a href="https://www.twitter.com/mycompany">
              <FaTwitter className="text-white text-2xl mx-2 hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com/mycompany">
              <FaInstagram className="text-white text-2xl mx-2 hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
