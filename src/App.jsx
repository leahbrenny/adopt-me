import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Fern" animal="Cat" breed="Tortishell" />
    <Pet name="Clover" animal="Cat" breed="Dilute Calico" />
    <Pet name="Ivy" animal="Cat" breed="Dilute Tortishell" />
  </div>
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
