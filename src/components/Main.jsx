// components/Main.js
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Main = () => {
  return (
    <main className="flex-1 p-6 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <ul className="flex items-center space-x-2 text-sm">
            <li><a href="#" className="text-blue-600">Dashboard</a></li>
            <li><i className='bx bx-chevron-right'></i></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
        <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center space-x-2">
          <FaCloudDownloadAlt />
          <span>Download PDF</span>
        </a>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <li className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center space-x-4 shadow-md">
          <div className="bg-blue-100 p-4 rounded-full">
            <i className='bx bxs-calendar-check text-3xl text-blue-600'></i>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Total Sales</h2>
            <p className="text-2xl font-bold text-blue-600">$5,200</p>
          </div>
        </li>
        {/* Add more items here as needed */}
      </ul>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-4">Order ID</th>
              <th className="text-left py-2 px-4">Customer</th>
              <th className="text-left py-2 px-4">Date</th>
              <th className="text-left py-2 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-200 dark:hover:bg-gray-700">
              <td className="py-2 px-4">#12345</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">Aug 20, 2024</td>
              <td className="py-2 px-4">$150</td>
            </tr>
            {/* Add more rows here as needed */}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Main;
