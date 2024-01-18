import Header from "../components/Header";

export default function Home({ user }) {
  return (
    <>
      <Header />
      <div>
        <a className="btn btn-success mt-4" href="/editor">
          Start Writing
        </a>
      </div>
    </>
  );
}
