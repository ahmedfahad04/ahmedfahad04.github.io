
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold mb-6 text-gray-900">404</h1>
        <p className="text-2xl font-medium text-gray-700 mb-8">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <ArrowLeft size={16} className="mr-2" /> Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
