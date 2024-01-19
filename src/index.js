// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import React from "react";

const root=ReactDOM.createRoot(document.getElementById('root'));
// const example = React.createElement("h1", { style: { color: "red" } }, "Hello World");
// const myElement=<h1>Welcome to JSX</h1>
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


 

