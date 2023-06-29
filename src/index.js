import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { PostProvider } from "./context/postContext";
import { AuthProvider } from "./context/authContext";

makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PostProvider>
  </React.StrictMode>
);
