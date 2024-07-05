import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/header/Navbar";
import OrderLists from "../../Components/Product/OrderLists";
const OrderList = () => {
  return (
    <main className="relative h-screen  bg-gray-100 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div className="sticky top-0">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full md:space-y-4 overflow-hidden relative">
          <div className="sticky top-0">
            <Navbar />
          </div>

          <OrderLists/>
        </div>
      </div>
    </main>
  );
};

export default OrderList;