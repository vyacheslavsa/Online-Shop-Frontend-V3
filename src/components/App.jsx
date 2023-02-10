import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../api";
import { ALL_CATEGORIES } from "../constans";
import MainLayout from "./MainLayout/MainLayout";
import ProductBord from "./ProductBord/ProductBord";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(ALL_CATEGORIES.products));
  }, [dispatch]);

  return (
    <MainLayout>
      <ProductBord />
    </MainLayout>
  );
};

export default App;
