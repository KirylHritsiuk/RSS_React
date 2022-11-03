import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getResponseData } from 'components/CardList/helpers/getResponseData';
import { APIResponse } from 'interfaces/API';
import { GLOBAL_URL } from 'utils/url';
import { CAT, Categories, HomeState } from './types';

export const initialState: HomeState<CAT> = {
  url: 'https://rickandmortyapi.com/api/',
  filter: {
    name: '',
    gender: 'All',
    status: 'All',
    page: 1,
  },
  category: null,
  loading: true,
  error: null,
  data: {
    cards: null,
    error: null,
    pages: null,
    count: null,
    prev: null,
    next: null,
  },
};

export const fetching = createAsyncThunk<Categories<CAT>, string, { rejectValue: string }>(
  'HomeCards/fetching',
  async (path = '', { rejectWithValue }) => {
    try {
      const res = await fetch(`${GLOBAL_URL}${path}`);
      if (!res.ok) {
        throw new Error('ServerError');
      }
      const data: APIResponse<CAT> = await res.json();
      return getResponseData(data);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const HomeSlice = createSlice({
  name: 'HomeCards',
  initialState,
  reducers: {
    category(state, action: PayloadAction<HomeState<CAT>>) {
      state.category = action.payload.category;
    },

    data(state, action: PayloadAction<HomeState<CAT>>) {
      state.data = action.payload.data;
    },

    loading(state, action: PayloadAction<HomeState<CAT>>) {
      state.loading = action.payload.loading;
    },

    status(state, action: PayloadAction<HomeState<CAT>>) {
      state.filter.status = action.payload.filter.status;
    },

    gender(state, action: PayloadAction<HomeState<CAT>>) {
      state.filter.gender = action.payload.filter.gender;
    },

    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetching.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data.error = null;
      })
      .addCase(fetching.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
    // .addCase(fetching.rejected, (state, action) => {
    //   state.error = action.error;
    // });
  },
});

export default HomeSlice.reducer;
export const { data, loading, status, gender, reset } = HomeSlice.actions;
