import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  BASE_URL,
  CategoriesType,
  categoriesUrl,
  CatsType,
} from "../../utils/type";

export interface CounterState {
  status: "success" | "loading" | "failed in data";
  catsData: CatsType[];
  categories: number;
  categoriesData: CategoriesType[];
  showMore: number;
  pushData: CatsType[];
}

const initialState: CounterState = {
  status: "success",
  catsData: [],
  categoriesData: [],
  categories: 1,
  showMore: 1,
  pushData: [],
};

export const generateCatsAsync = createAsyncThunk(
  "cats/generateCatsAsync",
  async (obj: any, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}=10&page=${obj.pageNumber}&category_ids=${obj.categories}`
      );
      const getData = await response.json();
      console.log(getData);

      return getData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getCategoriesChangeAsync = createAsyncThunk(
  "cats/getCategoriesChangeAsync",
  async () => {
    try {
      const response = await fetch(`${categoriesUrl}`);
      const getData = await response.json();
      return getData;
    } catch (error) {
      return error;
    }
  }
);

export const catSliceReducer = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCateGories: (state, action: PayloadAction<number>) => {
      state.categories = action.payload;
    },
    setShowMore: (state, action) => {
      state.showMore += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(generateCatsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        generateCatsAsync.fulfilled,
        (state, action: PayloadAction<CatsType[]>) => {
          state.status = "success";
          state.catsData = action.payload;
        }
      )
      .addCase(generateCatsAsync.rejected, (state) => {
        state.status = "failed in data";
      })
      .addCase(
        getCategoriesChangeAsync.fulfilled,
        (state, action: PayloadAction<CategoriesType[]>) => {
          state.categoriesData = action.payload;
        }
      );
  },
});

export const { setCateGories, setShowMore } = catSliceReducer.actions;

export const selectCount = (state: RootState) => state.cats;

export default catSliceReducer.reducer;
