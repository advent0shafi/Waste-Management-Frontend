import React from 'react'
import WorkerSidebar from '../../Components/Sidebar/WorkerSidebar'
import Navbar from '../../Components/header/Navbar'
import Profile from '../../Components/WorkerHelpers/Profile'
import WorkerOrder from '../../Components/WorkerHelpers/WorkerOrder'

export const Order_Worker = () => {
  return (
    <main className="relative h-screen  bg-gray-100 dark:bg-gray-800">
    <div className="flex items-start justify-between">
      <div className="sticky top-0">
        <WorkerSidebar/>
      </div>
      <div className="flex flex-col w-full md:space-y-4 overflow-hidden relative">
        <div className="sticky top-0">
          <Navbar />
        </div>
       <div>
        <WorkerOrder/>
       </div>
    </div>
      </div>
    
  </main>
  )
}

