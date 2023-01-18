import React from 'react';
import ReactDOM from 'react-dom/client';
import Pet from './Pet'

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me Please!"),
    React.createElement(Pet, {
      animal: "Rabbit",
      name: "Bunny",
      breed: "Indian",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Lalu",
      breed: "Indian",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
