import Editor from "../components/Editor";
import Board from "../components/Board";

export default function TextEditor() {
  return (
    <>
      <a style={{ color: "red" }} href="/home">
        Home
      </a>
      <Editor />
      <Board />
    </>
  );
}
