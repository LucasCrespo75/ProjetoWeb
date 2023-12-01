import React from "react";
import ReactDOMClient from "react-dom/client";
import { Iphone } from "./screens/Iphone";
import { Register } from "./screens/Register/register";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Iphone />);
//root.render(<Register />);

