import Header from "../components/Header";
import Editor from "../components/Editor";
import Board from "../components/Board";

export default function TextEditor() {
  document.body.style = `background: white`;
  return (
    <>
      <Board />
      <Editor />
    </>
  );
}
