import React from "react";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import Nav from "./components/Nav/Nav";
import { Gadgets } from "./pages";
import { Preview } from "./pages";
import { Checkout } from "./pages";
import Hero from "./components/Hero/Hero";
import SearchBar from "./components/SearchBar/SearchBar";
import Featured from "./components/Featured/Featured";

const App = () => {
  return (
    <div style={{ display: "flex", flexFlow: "column", gap: "5rem" }}>
      <GlobalStyles />
      <Nav />
      <Hero />
      <SearchBar />
      <Featured />
    </div>
  );
};

export default App;
