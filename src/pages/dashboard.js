import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { RiEBike2Fill } from 'react-icons/ri';
import { TiTickOutline } from 'react-icons/ti';
import { BsFillSendFill } from 'react-icons/bs';
import { MdOutlineCallReceived } from 'react-icons/md';
import { MdOutlineFileDownloadDone } from 'react-icons/md';
import { BsShopWindow } from 'react-icons/bs';

function DashboardPage() {
  const router = useRouter();
  const handleClickMtaani = () => {
    router.push('/parcelDetails');
  };

  const [user, loading] = useAuthState(auth);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center bg-white py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl text-gray-800 font-bold mb-4">
          Mtaani Agent Packages
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Packages sent</h2>
              <p className="text-gray-800">45</p>
            </div>
            <BsFillSendFill className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Packages waiting for pickup approval
              </h2>
              <p className="text-gray-800">45</p>
            </div>
            <TiTickOutline className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Dropped</h2>
              <p className="text-gray-800">45</p>
            </div>
            <MdOutlineCallReceived className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Packages in transit
              </h2>
              <p className="text-gray-800">45</p>
            </div>
            <RiEBike2Fill className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Delivered</h2>
              <p className="text-gray-800">45</p>
            </div>
            <BsShopWindow className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Collected</h2>
              <p className="text-gray-800">45</p>
            </div>
            <MdOutlineFileDownloadDone className="text-white text-6xl mr-4" />
          </div>
        </div>

        <button
          onClick={handleClickMtaani}
          className="mt-4 mx-auto w-full sm:w-60vw px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-offset-2"
        >
          Send Mtaani package
        </button>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl text-gray-800 font-bold mb-4">
          Doorstep Delivery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Packages sent</h2>
              <p className="text-gray-800">45</p>
            </div>
            <BsFillSendFill className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Packages waiting for pickup approval
              </h2>
              <p className="text-gray-800">45</p>
            </div>
            <TiTickOutline className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Dropped</h2>
              <p className="text-gray-800">45</p>
            </div>
            <MdOutlineCallReceived className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Packages in transit
              </h2>
              <p className="text-gray-800">45</p>
            </div>
            <RiEBike2Fill className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Delivered</h2>
              <p className="text-gray-800">45</p>
            </div>
            <BsShopWindow className="text-white text-6xl mr-4" />
          </div>

          <div className="p-8 bg-orange-500 shadow rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Collected</h2>
              <p className="text-gray-800">45</p>
            </div>
            <MdOutlineFileDownloadDone className="text-white text-6xl mr-4" />
          </div>
        </div>
        <button className="mt-4 mx-auto w-full sm:w-60vw px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-grey-500 focus:ring-offset-2">
          Send Doorstep package
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
