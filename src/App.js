import "./styles.css";
import Editor from "./Editor";
import Header from "./Header";
import Save from "./Save";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Editor />
      <Save />
    </div>
  );
}
