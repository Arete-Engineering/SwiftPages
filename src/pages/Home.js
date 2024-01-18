import Header from "../components/Header";

export default function Home({ user }) {
    document.body.style = `background: #F1F4F7`;
  return (
    <>
      <Header />
      <div style={{backgroundColor: "#F1F4F7"}}>
        <a className="btn btn-success mt-4" href="/editor">
          Start Writing
        </a>
      </div>
    </>
  );
}
