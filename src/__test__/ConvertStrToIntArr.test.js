import React from "react";
import ReactDOM from "react-dom";
import ConvertStrToIntArr from "../Components/ConvertStrToIntArr";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ConvertStrToIntArr/>, div)
});
