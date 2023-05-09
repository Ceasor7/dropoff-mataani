import { useState } from 'react';

const prices = {
  USA: 10,
  Canada: 15,
  Europe: 20,
  Asia: 25,
};

export default function Parcel() {
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState(0);

  const handleDestinationChange = (event) => {
    const value = event.target.value;
    setDestination(value);
    setPrice(prices[value] || 0);
  };

  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Parcel Shipping</h1>
      <div className="flex mb-4">
        <label htmlFor="destination" className="mr-4 bg-zinc-950">
          Destination:
        </label>
        <select
          id="destination"
          className="border rounded py-2 px-3 bg-black"
          value={destination}
          onChange={handleDestinationChange}
        >
          <option value="">Select destination</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
      {price > 0 && (
        <div className="bg-orange-300 p-4 rounded">
          <p className="text-lg font-bold mb-2">Price: ${price}</p>
          <p className="text-sm">(Based on destination: {destination})</p>
        </div>
      )}
    </div>
  );
}
