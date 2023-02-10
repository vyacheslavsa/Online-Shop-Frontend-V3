import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_BASEURL;

const getData = createAsyncThunk("getData", async (path, { rejectWithValue }) => {
  const route = path === "products" ? "products" : "additives"
  try {
    const response = await fetch(`${BASE_URL}/${route}?category=`+path);
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { getData };
