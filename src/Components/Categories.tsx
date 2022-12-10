import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getCategoriesChangeAsync,
  setCateGories,
} from "../features/counter/apiImageSlice";
import { CategoriesType } from "../utils/type";
import "../assets/categories.scss";

const Categories: React.FC = () => {
  const categoriesCats = useAppSelector((state) => state.cats.categoriesData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategoriesChangeAsync());
  }, [dispatch]);
  const clickByChangeCategories = (categoriesType: number) => {
    dispatch(setCateGories(categoriesType));
  };
  return (
    <>
      {categoriesCats.map((item: CategoriesType) => {
        return (
          <button
            className="categories-btn"
            key={item.id}
            onClick={() => clickByChangeCategories(item.id)}
          >
            {item.name}
          </button>
        );
      })}
    </>
  );
};
export default Categories;
