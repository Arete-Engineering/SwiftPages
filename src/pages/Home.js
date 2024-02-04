import Header from "../components/Header";
import UpperDashboard from "../components/UpperDashboard";

export default function Home({ user }) {
  return (
    <>
      <Header />
      <UpperDashboard />
      <div>
        <a
          className="btn btn-light btn-sm"
          style={{ backgroundColor: "#0064e0", color: "white" }}
          href="/editor"
        >
          Start Writing
        </a>
      </div>
    </>
  );
}
