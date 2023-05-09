import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

export default function LoginPage() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  //signin with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      route.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  //redirect to dashboard if user is logged in

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to Your Account using your Google account
        </h2>
      </div>
      <button
        onClick={GoogleLogin}
        className="text-white bg-gray-700 w-full sm:w-1/2 mx-auto mt-6 font-medium rounded-lg flex align-middle p-2 sm:p-4 gap-2 text-base sm:text-lg"
      >
        <FcGoogle className="text-2xl sm:text-3xl" />
        <span className="hidden sm:inline">Sign in with Google</span>
      </button>
    </div>
  );
}
