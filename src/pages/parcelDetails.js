import { useState } from 'react';

function ParcelDetailsPage() {
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
        <form onSubmit={handleSubmit} className="w-full max-w-lg ">
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
          <div class="flex flex-col items-center justify-center bg-orange-400 rounded-10">
            <h2 className="text-xl text-gray-700 font-bold"> Sending to</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
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
            <div className="mb-4">
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
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="location"
              >
                Choose Destination Location
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ParcelDetailsPage;
