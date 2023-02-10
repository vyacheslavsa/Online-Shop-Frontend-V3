import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_BASEURL;

const getData = createAsyncThunk("getData", async (path, { rejectWithValue }) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { getData };
