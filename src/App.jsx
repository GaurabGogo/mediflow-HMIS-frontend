import React from "react";
import Page1 from "./pages/Page1";
import page1 from "./constants";
import AddData from "./AddData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Page1 />
      <AddData />
    </div>
  );
}
