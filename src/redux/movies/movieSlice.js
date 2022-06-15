import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getMoviesAsync = createAsyncThunk(
  "movie/getMoviesAsync",
  async (data) => {
    console.log(data)
    //yıl girildiğinde 2. bir page olmayabilir 
    //kullanıcı bunu farkedemez o yüzde year girildiği anda page 1 e eşitlenmeli
    const res = await axios(
      `https://www.omdbapi.com/?apikey=c5c7df8d&s=${data.search}&page=${data.page}&y=${data.year}&type=${data.type}`
    );
    return res.data; //Backend işle bağlamam işlemmimizi yaptık
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    page: 1,
    totalResult: 0,
    year:"",
    type:"",
    selected:{}
  },
  reducers: {
   changePage:(state,action)=>{
    state.page=action.payload
   },
   changeYear:(state,action)=>{
    state.year=action.payload
    state.page = 1
   },
   changeType:(state,action)=>{
    state.type=action.payload
   },
   setSelected:(state,action)=>{
    state.selected = action.payload;
   }


  },
  extraReducers: {
    [getMoviesAsync.pending]: (state, action) => {},
    [getMoviesAsync.fulfilled]: (state, action) => {
      console.log(action.payload);
      if (action.payload.Response !== "False") {
        state.items = action.payload.Search;
        state.totalResult = action.payload.totalResults;
      }else{
        state.items=[];
      }

    },
    [getMoviesAsync.rejected]: (state, action) => {},
  },
});

export default moviesSlice.reducer;
export const {changeYear,changePage ,changeType,setSelected } =
  moviesSlice.actions;