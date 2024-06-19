// src/components/AddCategory.js
import React, { useState } from "react";
import { createCategory } from "../../services/categoryService";

const AddCategory = ({ onCategoryAdded }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setImageSrc(reader.result);
          };
          reader.readAsDataURL(file);
      }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    await createCategory(formData);
    onCategoryAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2 className="text-cente">Add Category</h2>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <div className="max-w-xl">
            <label
                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="font-medium text-gray-600">
                        Drop files to Attach, or
                        <span className="text-blue-600 underline">browse</span>
                    </span>
                </span>
                <input type="file" name="file_upload" className="hidden" onChange={handleFileChange} />
            </label>
            {imageSrc && (
                <div className="mt-4">
                    <img src={imageSrc} alt="Uploaded" className="max-w-full h-auto" />
                </div>
            )}
        </div>
        </div>
        <div className="p-6">
       
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
             
            />
          </div>
      
        </div>
        <div className="p-6 pt-0">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="submit"
          >
            Add Category
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddCategory;