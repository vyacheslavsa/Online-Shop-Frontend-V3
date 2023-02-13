import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_BASEURL;

const getData = createAsyncThunk("getData", async (path, { rejectWithValue }) => {
  const url = path === "products" ? `${BASE_URL}/products` : `${BASE_URL}/additives?category=${path}`
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { getData };
