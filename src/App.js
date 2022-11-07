const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Fern",
      breed: "Tortishell",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Clover",
      breed: "Dilute Calico",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Ivy",
      breed: "Dilute Tortishell",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
