import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";

const Home = () => {
  const categoriesData = useLoaderData();
  const categories = categoriesData.categories;
  console.log(categories);
  return (
    <div className="w-[1480px] mx-auto">
      <Header></Header>
      <h1 className="text-3xl text-center mt-10">Cuisine - Category</h1>

      <div className="grid grid-cols-3 ml-12">
        {categories.map((category) => (
          <Categories category={category}></Categories>
        ))}
      </div>
    </div>
  );
};

export default Home;
