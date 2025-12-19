import React from 'react'
import SideBar from '../components/SideBar'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen ">
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-30 mt-25 mr-10">
        
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow">
            <p className="text-sm text-blue-800 font-bold">Total Transactions</p>
            <h3 className="text-3xl font-bold mt-2">5000</h3>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow">
            <p className="text-sm text-blue-800 font-bold">Fraud Cases</p>
            <h3 className="text-3xl font-bold mt-2">120</h3>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow">
            <p className="text-sm text-blue-800 font-bold">Fraud Rate</p>
            <h3 className="text-3xl font-bold mt-2">2.4%</h3>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow">
            <p className="text-sm text-blue-800 font-bold">Top Active Customer</p>
            <h3 className="text-3xl font-bold mt-2">CUST-1021</h3>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 ">
          <div className="bg-white p-6 rounded-xl shadow h-300px">
            {/* Chart 1 */}
          </div>
          <div className="bg-white p-6 rounded-xl shadow h-300px">
            {/* Chart 2 */}
          </div>
          <div className="bg-white p-6 rounded-xl shadow h-300px">
            {/* Chart 1 */}
          </div>
          <div className="bg-white p-6 rounded-xl shadow h-300px">
            {/* Chart 2 */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
