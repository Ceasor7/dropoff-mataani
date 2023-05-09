import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function DashboardPage() {
  const router = useRouter();
  const handleClickMtaani = () => {
    router.push('/parcelDetails');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl text-gray-800 font-bold mb-4">
          Mtaani Agent Packages
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-8 bg-orange-500 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Number of packages sent
            </h2>
            <p className="text-gray-800">45</p>
          </div>
          <div className="p-8 bg-orange-500 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Number of packages waiting for pickup approval
            </h2>
            <p className="text-gray-800">45</p>
          </div>
          <div className="p-8 bg-orange-500 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Number of packages in transit
            </h2>
            <p className="text-gray-800">23</p>
          </div>
          <div className="p-8 bg-orange-500 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Number of packages dropped
            </h2>
            <p className="text-gray-800">23</p>
          </div>
        </div>
        <button
          onClick={handleClickMtaani}
          className="mt-4 mx-auto w-full sm:w-60vw px-8 py-10 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-offset-2"
        >
          Send Mtaani package
        </button>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl text-gray-800 font-bold mb-4">
          Doorstep Delivery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-8 bg-orange-500 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Number of packages sent
            </h2>
            <p className="text-gray-800">23</p>
          </div>
          <div className="p-8 bg-orange-500 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Number of packages waiting for pickup approval
            </h2>
            <p className="text-gray-800">23</p>
          </div>
          <div className="p-8 bg-orange-500 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Number of packages in transit
            </h2>
            <p className="text-gray-800">32</p>
          </div>
          <div className="p-8 bg-orange-500 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Number of packages dropped
            </h2>
            <p className="text-gray-800">23</p>
          </div>
        </div>
        <button className="mt-4 mx-auto w-full sm:w-60vw px-8 py-10 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-offset-2">
          Send Doorstep package
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
