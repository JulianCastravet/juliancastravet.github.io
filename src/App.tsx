import "./App.css";
import { Home } from "./Pages/Home";

function App() {
  const head = document.head;

  const meta = document.createElement("meta");

  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1.0";

  head.append(meta);

  return <Home />;
}

export default App;
