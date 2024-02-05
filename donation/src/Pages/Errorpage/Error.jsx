import { Link, useRouteError } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

const Error = () => {
  const errors = useRouteError();
  return (
    <div>
      <div className="flex flex-col bg-gray-50 items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-gray-600">Sorry{errors.data}</p>
        <FaSadCry className="text-yellow-300" size={48}></FaSadCry>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Search for content..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-3">Or, you might want to explore:</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
