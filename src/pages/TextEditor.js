import Header from "../components/Header";
import QuillEditor from "../components/QuillEditor";
import Board from "../components/Board";
import PageHeader from "../components/PageHeader";

export default function TextEditor() {
  document.body.style = `background: white`;
  return (
    <>
      <PageHeader />
      <QuillEditor />
    </>
  );
}
