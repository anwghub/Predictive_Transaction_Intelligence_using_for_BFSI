import React from 'react'
import SideBar from '../components/SideBar'

const Predict = () => {
  return (
    <div className="flex min-h-screen ">
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-30 justify-center items-center mr-30">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Form Section */}
          <div className=" p-8 rounded-4xl border-4 shadow mt-20 ">
            <h2 className="text-lg font-semibold mb-6">Fill Details</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Customer ID"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="KYC Verified"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Account Age"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Transaction Amount"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Channel"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="date"
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </form>
          </div>

          {/* Result Section */}
          <div className=" p-8 rounded-4xl border-4 shadow flex- lg:mt-20 lg:mr-30">
            <h2 className="text-lg font-semibold mb-4 mr-3">Result</h2>

            <div className="flex-1 flex items-center justify-center bg-white rounded-xl border">
              <p className="text-gray-500">Prediction will appear here</p>
            </div>
          </div>
        </div>
        <div className='py-5 text-xl bg-violet-800 gap-4 mt-10 font-bold rounded-full w-40 text-center cursor-pointer'>
            Predict
        </div>

      </div>
    </div>
  )
}

export default Predict
