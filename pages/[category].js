import React from "react";
import { Header } from "../components";
import { useRouter } from "next/router";
import { CategoryContent } from "../components/category";

const Category = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <CategoryContent category={router.query.category} />
    </div>
  );
};

export default Category;
