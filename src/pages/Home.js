
import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import EnhancedTable from "../components/EnhancedTable"

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <EnhancedTable/>
    </div>
  );
};

export default Home;
