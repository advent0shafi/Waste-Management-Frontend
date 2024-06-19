// src/components/AddCategory.js
import React, { useState } from "react";
import { createCategory } from "../../services/categoryService";

const AddCategory = ({ onCategoryAdded }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    await createCategory(formData);
    onCategoryAdded();
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <div className="border bg-white shadow-md bg-clip-border rounded-xl p-6 ">
            <form onSubmit={handleSubmit}>
              <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Add Category
              </h5>
              <div>
                <label>Name:</label>
                <input />
              </div>
              <div class="w-72">
                <div class="relative h-10 w-full min-w-[200px] ">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Catogery Name"
                    class="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                </div>
              </div>
              <div class="max-w-xl mt-4">
                <label class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span class="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span class="font-medium text-gray-600">
                      Drop files to Attach, or
                      <span class="text-blue-600 underline">browse</span>
                    </span>
                  </span>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                    name="file_upload"
                    class="hidden"
                  />
                </label>
              </div>

              <button type="submit">Add Category</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
