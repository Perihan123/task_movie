import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeType, getMoviesAsync } from "../redux/movies/movieSlice";
import { changePage, changeYear } from "../redux/movies/movieSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const year = useSelector((state) => state.movies.year);
  const page = useSelector((state) => state.movies.page);
  const totalResult = useSelector((state) => state.movies.totalResult);
  const type=useSelector((state)=>state.movies.type)
  const handleChange = async (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    dispatch(getMoviesAsync({ search, page, year,type }));
  }, [search]);
  return (
    <div className="relative">
      <p className="absolute top-4 left-8">Total : {totalResult}</p>
      <div className="flex justify-center items-center text-red-500">
        <button>Search</button>
        <input
          value={search}
          onChange={(e) => handleChange(e)}
          className="border-b-slate-700 bg-zinc-100 p-2 m-2 rounded-lg"
        />
      </div>
      <div>
        <div className="w-full flex flex-row justify-around items-center">
          <div className="flex flex-row items-center space-x-3">
            <label>Yıl : </label>
            <input
              value={year}
              onChange={(e) => dispatch(changeYear(e.target.value))}
              className="focus:outline-none px-2 py-1 border rounded-md border-blue-600"
            />
          </div>
          <div className="flex flex-row items-center space-x-3">
            <label>Type : </label>
            <select
              value={type}
              defaultValue="Seçiniz"
              onChange={(e) => dispatch(changeType(e.target.value))}
              className="focus:outline-none px-2 py-1 border rounded-md border-blue-600"
              
            >
              <option value={"movie"}>movie</option>
              <option value={"series"}>series</option>
              <option value={"episode"}>episode</option>
            </select>
          </div>
          <div className="flex flex-row w-32 justify-between">
            <p>Sayfa : {page}</p>
            <button onClick={() => dispatch(changePage(page - 1))}><i class="fa-solid fa-angle-left"></i></button>
            <button onClick={() => dispatch(changePage(page + 1))}><i class="fa-solid fa-angle-right"></i></button>
          </div>

          <button
            onClick={() => dispatch(getMoviesAsync({ search, page, year,type }))}
            className="px-3 py-2 border border-blue-500 rounded-md shadow-md"
          >
            Uygula
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
