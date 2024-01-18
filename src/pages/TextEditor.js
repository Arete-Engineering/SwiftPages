import Header from "../components/Header";
import Editor from "../components/Editor";
import Board from "../components/Board";
import PageHeader from "../components/PageHeader";

export default function TextEditor() {
  document.body.style = `background: white`;
  return (
    <>
      <PageHeader />
      <Editor />
    </>
  );
}
