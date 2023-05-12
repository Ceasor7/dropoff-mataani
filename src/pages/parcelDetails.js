import { useState } from 'react';

const prices = {
  Nairobi: 100,
  Kiambu: 150,
  Kitengela: 200,
  Thika: 250,
  Githunguri: 300,
};

function ParcelDetailsPage() {
  const [selectedLocation, setSelectedLocation] = useState('Nairobi');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLocationChange1 = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handlePayClick = () => {
    setShowConfirmation(true);
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
  };

  const price = prices[selectedLocation];

  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [location, setLocation] = useState('');
  const [destinationAgent, setDestinationAgent] = useState('');
  const [agent, setAgent] = useState('');

  const handleReceiverNameChange = (event) => {
    setReceiverName(event.target.value);
  };

  const handleReceiverPhoneChange = (event) => {
    setReceiverPhone(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDestinationAgentChange = (event) => {
    setDestinationAgent(event.target.value);
  };

  const handleAgentChange = (event) => {
    setAgent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, for example by sending the data to an API
    console.log({
      receiverName,
      receiverPhone,
      location,
      destinationAgent,
    });
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200">
      <div className="w-4/5 max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl text-gray-700 font-bold mb-4">
          Parcel Details
        </h1>
        <h2 className="text-xl text-gray-700 font-bold"> Sending from</h2>
        <form onSubmit={handleSubmit}>
          <div class="flex flex-col items-center justify-center bg-gray-400 rounded-10">
            <div class="w-96 mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="location">
                Choose Location
              </label>
              <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                value={location}
                onChange={handleLocationChange}
                required
              >
                <option value="">Select a location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
              </select>
            </div>
            <div class="w-96 mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="agent">
                Choose Agent Name
              </label>
              <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="agent"
                value={agent}
                onChange={handleAgentChange}
                required
              >
                <option value="">Select an Agent</option>
                <option value="agent1">Agent 1</option>
                <option value="agent2">Agent 2</option>
                <option value="agent3">Agent 3</option>
              </select>
            </div>
          </div>
          <h2 className="text-xl text-gray-700 font-bold"> Sending to</h2>
          <div class="flex flex-col items-center justify-center bg-orange-400 rounded-10">
            <div className="mb-4 w-96">
              <label
                className="block text-gray-700  font-bold mb-2"
                htmlFor="receiverName"
              >
                Receiver Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="receiverName"
                type="text"
                placeholder="Enter receiver name"
                value={receiverName}
                onChange={handleReceiverNameChange}
                required
              />
            </div>
            <div className="mb-4 w-96">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="receiverPhone"
              >
                Receiver Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="receiverPhone"
                type="tel"
                placeholder="Enter receiver phone number"
                value={receiverPhone}
                onChange={handleReceiverPhoneChange}
                required
              />
            </div>
            <div className="mb-4 w-96">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="location"
              >
                Choose Destination Location
              </label>
              <select
                id="location"
                value={selectedLocation}
                onChange={handleLocationChange1}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Nairobi">Nairobi</option>
                <option value="Kiambu">Kiambu</option>
                <option value="Kitengela">Kitengela</option>
                <option value="Thika">Thika</option>
                <option value="Githunguri">Githunguri</option>
              </select>
            </div>
            <div className="mb-4 w-96">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="destinationAgent"
              >
                Destination Agent
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="destinationAgent"
                value={destinationAgent}
                onChange={handleDestinationAgentChange}
                required
              >
                <option value="">Select a destination agent</option>
                <option value="destinationagent1">Agent 1</option>
                <option value="destinationagent2">Agent 2</option>
                <option value="destinationagent3">Agent 3</option>
              </select>
            </div>
            <div className="mb-4 w-96">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="receiverPhone"
              >
                Product Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="receiverPhone"
                type="tel"
                placeholder="Enter receiver phone number"
                value={receiverPhone}
                onChange={handleReceiverPhoneChange}
                required
              />
            </div>
            <div className="mb-4 w-96">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="receiverPhone"
              >
                Product Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="receiverPhone"
                type="tel"
                placeholder="Enter receiver phone number"
                value={receiverPhone}
                onChange={handleReceiverPhoneChange}
                required
              />
            </div>
            <div className="mb-4 w-96">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="receiverPhone"
              >
                Product Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="receiverPhone"
                type="tel"
                placeholder="Enter receiver phone number"
                value={receiverPhone}
                onChange={handleReceiverPhoneChange}
                required
              />
            </div>
            <div className="mb-4 w-96">
              <p className="block text-gray-700 font-bold mb-2">
                Price to send parcel to {selectedLocation}:{' '}
                <span className="font-bold">{price} KES</span>
              </p>
            </div>
            <div className="mb-4">
              {!showConfirmation && (
                <button
                  onClick={handlePayClick}
                  className="px-4 py-2 w-96 bg-blue-500 text-white rounded"
                >
                  Pay {price} KES
                </button>
              )}
              {showConfirmation && (
                <div className="flex items-center">
                  <p className="block text-gray-700 font-bold mb-2">
                    Are you sure you want to pay {price} KES?
                  </p>
                  <button
                    onClick={handleCancelClick}
                    className="px-2 py-1 bg-gray-300 text-black rounded"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded ml-2">
                    Confirm
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ParcelDetailsPage;
