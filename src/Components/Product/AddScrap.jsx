import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddScrap() {
    const [scraps, setScraps] = useState([]);
    const [scrapOrders, setScrapOrders] = useState([]);
    const [newScrap, setNewScrap] = useState({
      name: '',
      size: '',
      scrap_description: '',
      scrap_image: null,
    });
  
    useEffect(() => {
      fetchScraps();
      fetchScrapOrders();
    }, []);
  
    const fetchScraps = async () => {
      const response = await axios.get('http://127.0.0.1:8000/scrap/scraps/');
      setScraps(response.data);
    };
  
    const fetchScrapOrders = async () => {
      const response = await axios.get('http://127.0.0.1:8000/scrap/scrap-orders/');
      setScrapOrders(response.data);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewScrap({ ...newScrap, [name]: value });
    };
  
    const handleFileChange = (e) => {
      setNewScrap({ ...newScrap, scrap_image: e.target.files[0] });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      for (let key in newScrap) {
        formData.append(key, newScrap[key]);
      }
  
      await axios.post('http://127.0.0.1:8000/scrap/scraps/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      fetchScraps();
    };
  

  return (
<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Scrap Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Add New Scrap</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newScrap.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <input
              type="text"
              name="size"
              value={newScrap.size}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="scrap_description"
              value={newScrap.scrap_description}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              name="scrap_image"
              onChange={handleFileChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Scrap
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Collection Orders</h2>
        <ul className="divide-y divide-gray-200">
          {scrapOrders.map((order) => (
            <li key={order.id} className="py-4">
              <div className="text-sm font-medium text-gray-900">
                Order ID: {order.id} - Status: {order.status}
              </div>
              <div className="text-sm text-gray-500">User: {order.user_username}</div>
              <div className="text-sm text-gray-500">Scrap: {order.scrap_name}</div>
              <div className="text-sm text-gray-500">Created At: {new Date(order.created_at).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AddScrap;