import React from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom"; // Import useLocation
import logo1 from "./../../../public/logo-01.png";

const WorkerSidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative hidden h-screen shadow-lg lg:block w-60">
        <div className="h-full bg-white ">
          <div className="flex items-center justify-start pt-6 ml-8">
            <img src={logo1} className="w-[100px]" />
          </div>
          <nav className="mt-6">
            <div>
              <Link to="/worker">
                <a
                  className={`flex items-center justify-start w-full p-2 pl-6 my-2  transition-colors duration-200 ${
                    location.pathname === "/worker"
                      ? "border-l-4 border-purple-500 text-gray-800"
                      : "text-gray-400"
                  }`}
                  href="#"
                >
                  <span className="text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </span>
                  <span className="mx-2 text-sm font-normal">Home</span>
                </a>
              </Link>
              <Link to="/worker/order-list">
                <a
                  className={`flex items-center justify-start w-full p-2 pl-6 my-2  transition-colors duration-200 ${
                    location.pathname === "/worker/order-list"
                      ? "border-l-4 border-purple-500 text-gray-800"
                      : "text-gray-400"
                  }`}
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>

                  <span className="mx-2 text-sm font-normal">User List</span>
                </a>
              </Link>
              <Link to="/worker-list">
                <a
                  className={`flex items-center justify-start w-full p-2 pl-6 my-2 transition-colors duration-200 ${
                    location.pathname === "/worker-list"
                      ? "border-l-4 border-purple-500 text-gray-800"
                      : "text-gray-400"
                  }`}
                  href="#"
                >
                  <span className="text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </span>
                  <span className="mx-2 text-sm font-normal">Worker List</span>
                </a>
              </Link>
              <Link to="/order-list">
                <a
                  className={`flex items-center justify-start w-full p-2 pl-6 my-2  transition-colors duration-200 ${
                    location.pathname === "/order-list"
                      ? "border-l-4 border-purple-500 text-gray-800"
                      : "text-gray-400"
                  }`}
                  href="#"
                >
                  <span className="text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </span>
                  <span className="mx-2 text-sm font-normal">Order List</span>
                </a>
              </Link>
              <Link to="/scrap">
                <a
                  className={`flex items-center justify-start w-full p-2 pl-6 my-2  transition-colors duration-200 ${
                    location.pathname === "/scrap"
                      ? "border-l-4 border-purple-500 text-gray-800"
                      : "text-gray-400"
                  }`}
                  href="#"
                >
                  <span className="text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                  </span>
                  <span className="mx-2 text-sm font-normal">Scrap</span>
                </a>
              </Link>
              {/* <Link to="/admin/payment-pending">
                <a
                  className={`flex items-center justify-start w-full p-2 pl-6 my-2  transition-colors duration-200 ${
                    location.pathname === "/admin/payment-pending"
                      ? "border-l-4 border-purple-500 text-gray-800"
                      : "text-gray-400"
                  }`}
                >
                  <span className="text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      />
                    </svg>
                  </span>
                  <span className="mx-2 text-sm font-normal">
                    Payment Pending
                  </span>
                </a>
              </Link>
              <Link to="/admin/catogery-language">
                <a
                  className={`flex items-center justify-start w-full p-2 pl-6 my-2  transition-colors duration-200 ${
                    location.pathname === "/admin/catogery-language"
                      ? "border-l-4 border-purple-500 text-gray-800"
                      : "text-gray-400"
                  }`}
                >
                  <span className="text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="mx-2 text-sm font-normal">Configure</span>
                </a>
              </Link> */}
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default WorkerSidebar;
