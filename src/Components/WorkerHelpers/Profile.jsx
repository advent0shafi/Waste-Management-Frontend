// ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCredentials } from './../../redux/AuthRedux';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user_id);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    profile_img: '',
    is_worker: false,
    address: '',
    is_active: true,
    is_verified: false,
    phone_number: '',
    roles: ''
  });
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/auth/users/${userId}/`);
        setUserData(response.data);
        setProfileImage(response.data.profile_img);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        formData.append(key, userData[key]);
      }
    }
    if (profileImage) {
      formData.append('profile_img', profileImage);
    }

    try {
      const response = await axios.put(`http://127.0.0.1:8000/auth/users/${userId}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUserData(response.data);
      setProfileImage(response.data.profile_img);
      dispatch(setCredentials({ username: response.data.username, roles: response.data.roles, user_id: response.data.id }));
    } catch (error) {
      console.error('Failed to update user data:', error);
    }
  };

  return (
    <div className="container mx-auto px-36 py-10">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
          <label className="block text-sm font-medium text-gray-700">Profile Image</label>
          {profileImage && (
            <div className="mb-4">
              <img
                src={typeof profileImage === 'string' ? profileImage : URL.createObjectURL(profileImage)}
                alt="Profile"
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>
          )}
          <input
            type="file"
            name="profile_img"
            onChange={handleImageChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className='flex gap-4 w-full'>
          <div className='w-full'>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          </div>
          <div className='w-full'>

          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        </div>
        
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={userData.phone_number}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_worker"
            checked={userData.is_worker}
            onChange={handleInputChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label className="ml-2 block text-sm text-gray-900">Is Worker</label>
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;