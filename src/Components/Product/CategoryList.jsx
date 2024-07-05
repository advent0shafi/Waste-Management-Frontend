// src/components/CategoryList.js
import React, { useEffect, useState } from "react";
import { getCategories, deleteCategory } from "../../services/categoryService";
import AddCategory from "./AddCategory";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    fetchCategories();
  };

  return (
    <>
      <div>
        <div className="w-full flex flex-col items-center justify-center">
          <Button onClick={() => handleOpen("xl")} variant="gradient">
            add catogery
          </Button>
        </div>
        <div className=" grid grid-cols-3 gap-5">
          {categories.map((category) => (
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div
                key={category.id}
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
              >
                <img src={category.image} alt={category.name} />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {category.name}
                </h5>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleDelete(category.id)}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <Dialog
            open={size === "xl" || size === "xxl"}
            size={size || "md"}
            handler={handleOpen}
          >
            <DialogHeader className="w-full justify-between">
              Add Catogery
              <div>
                <Button
                  variant="text"
                  color="red"
                  onClick={() => handleOpen(null)}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  onClick={() => handleOpen(null)}
                >
                  <span>Confirm</span>
                </Button>
              </div>
            </DialogHeader>
            <DialogBody>
              <AddCategory onCategoryAdded={fetchCategories} />
            </DialogBody>
            <DialogFooter></DialogFooter>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
