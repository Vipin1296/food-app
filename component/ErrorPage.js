import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold text-gray-700">{status}</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">
          {statusText.toLowerCase() == "not found"
            ? "Page Not Found"
            : statusText}
        </p>
        <Link
          to={"/"}
          className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
