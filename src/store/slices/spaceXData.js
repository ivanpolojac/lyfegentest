import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DateTime } from 'luxon';

import api from 'api';

export const fetchLaunchesByDate = createAsyncThunk(
  'spaceXData/fetchLaunchesByDate',
  async (date, { dispatch, getState, rejectWithValues }) => {
    const targetDate = date || getState().spaceXData.selectedDate;

    const data = await api.spaceXData.launches.query({
      'query': {
        'date_utc': {
          '$gte': DateTime.utc(targetDate.year).toUTC(),
          '$lte': DateTime.utc(targetDate.year + 1).minus({ seconds: 1 }).toUTC(),
        },
      },
    });

    return data?.docs || [];
  },
);

export const spaceXDataSlice = createSlice({
  name: 'spaceXData',
  initialState: {
    selectedDate: DateTime.utc(2017).toUTC(),
    launches: [],
    isFetchingLaunches: false,
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLaunchesByDate.pending, (state, action) => {
      state.isFetchingLaunches = true;
    });
    builder.addCase(fetchLaunchesByDate.fulfilled, (state, action) => {
      state.isFetchingLaunches = false;
      state.launches = action.payload;
    });
    builder.addCase(fetchLaunchesByDate.rejected, (state, action) => {
      state.isFetchingLaunches = false;
      state.launches = [];
    });
  },
});

export const {
  setSelectedDate,
} = spaceXDataSlice.actions;

export default spaceXDataSlice.reducer;
