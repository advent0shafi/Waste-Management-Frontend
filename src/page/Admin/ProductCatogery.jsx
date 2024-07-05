import React, { useState } from "react";
import CategoryList from "../../Components/Product/CategoryList";
import ProductList from "../../Components/Product/ProductList";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,z
} from "@material-tailwind/react";
const ProductCatogery = () => {
  return (
    <div className="h-full">
      <Tabs value="html">
        <TabsHeader>
          <Tab key="catogery" value="catogery">
            Catogery
          </Tab>
          <Tab key="product" value="product">
            Product
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel key="catogery" value="catogery">
            <CategoryList />
          </TabPanel>
          <TabPanel key="product"  value="product">
            <ProductList />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default ProductCatogery;
