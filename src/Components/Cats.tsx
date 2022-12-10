import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  generateCatsAsync,
  setShowMore,
} from "../features/counter/apiImageSlice";
import { CatsType } from "../utils/type";
import "../assets/cats.scss";

const Cats: React.FC = () => {
  const catsData = useAppSelector((state) => state.cats.catsData);
  const categories = useAppSelector((state) => state.cats.categories);
  const status = useAppSelector((state) => state.cats.status);
  const showMore = useAppSelector((state) => state.cats.showMore);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(generateCatsAsync({ pageNumber: showMore, categories }));
  }, [dispatch, categories, showMore]);
  return (
    <>
      <div className="cats-parent">
        {status === "success" ? (
          catsData.map((item: CatsType) => {
            return (
              <div key={item.id} className="cats-block">
                <img src={item.url} alt={item.url} />
              </div>
            );
          })
        ) : (
          <span className="status">{status}</span>
        )}
      </div>
      <button className="show-cats" onClick={() => dispatch(setShowMore(1))}>
        show new Cats
      </button>
    </>
  );
};
export default Cats;
