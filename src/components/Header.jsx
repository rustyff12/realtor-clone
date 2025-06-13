import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-index-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="/realtor-logo-brand.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px] ${
                pathMatchRoute("/")
                  ? "border-b-red-500 text-black"
                  : "border-b-transparent text-gray-400"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                pathMatchRoute("/offers")
                  ? "border-b-red-500 text-black"
                  : "border-b-transparent text-gray-400"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                pathMatchRoute("/sign-in")
                  ? "border-b-red-500 text-black"
                  : "border-b-transparent text-gray-400"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
