import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleDropdownClick = (event) => {
    // check if the event target is the image
    if (event.target.classList.contains('user-p')) {
      setShowDropdown(!showDropdown);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      router.push('/'); // Redirect to homepage after sign out
    });
  };

  return (
    <nav className="bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="block">
              <img
                src="/logo1.png"
                alt="Dropoff Mtaani logo"
                className="h-16 w-auto"
              />
            </div>
          </Link>
        </div>

        <div className="flex mt-4 sm:mt-0 items-center sm:ml-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <a className="text-gray-300 hover:text-white sm:mt-0 mt-4">About</a>
            <a className="text-gray-300 hover:text-white sm:mt-0 mt-4">
              Track Order
            </a>
            <a className="text-gray-300 hover:text-white sm:mt-0 mt-4">
              Contact Us
            </a>
          </div>

          {user && (
            <div className="relative">
              <div className="rounded-full" onClick={handleDropdownClick}>
                <img
                  referrerPolicy="no-referrer"
                  className="user-p cursor-pointer"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <Link href="/customerView">
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Profile
                      </div>
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          {!user && (
            <Link href="/auth/login">
              <div
                onClick={handleLogin}
                className="ml-4 bg-orange-400 text-gray-900 font-medium rounded-lg px-4 py-2 hover:bg-orange-700"
              >
                Join now
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
