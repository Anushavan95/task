export const categoriesUrl: string = "https://api.thecatapi.com/v1/categories";
export const BASE_URL: string =
  "https://api.thecatapi.com/v1/images/search?limit";
export const title: string = "My Cats App";
export type CatsType = {
  height: number;
  id: string;
  url: string;
  width: number;
};
export type CategoriesType = {
  id: number;
  name: string;
};
