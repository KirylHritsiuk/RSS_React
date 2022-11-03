import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { getResponseData } from 'components/CardList/helpers/getResponseData';
import { getPage } from 'components/UI/Pagination/helpers/getPage';
import { APIResponse, category } from 'interfaces/API';
import { CAT, Categories, gender, HomeState, status } from './types';

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
  async (url, { rejectWithValue }) => {
    try {
      const res = await fetch(url);
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
    updateCategory(state, action: PayloadAction<category | null>) {
      state.category = action.payload;
    },

    name(state, action: PayloadAction<string>) {
      state.filter.name = action.payload;
    },

    data(state, action: PayloadAction<Categories<CAT>>) {
      state.data = action.payload;
    },

    updateStatus(state, action: PayloadAction<status>) {
      state.filter.status = action.payload;
    },

    updateGender(state, action: PayloadAction<gender>) {
      state.filter.gender = action.payload;
    },

    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetching.pending, (state) => {
        state.loading = true;
        state.data.error = null;
      })
      .addCase(fetching.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filter.page = getPage(action.payload.prev);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.data.error = action.payload;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export default HomeSlice.reducer;
export const { updateCategory, data, name, updateStatus, updateGender, reset } = HomeSlice.actions;
