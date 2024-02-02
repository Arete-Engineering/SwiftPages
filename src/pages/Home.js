import Header from "../components/Header";
import UpperDashboard from "../components/UpperDashboard";

export default function Home({ user }) {
  document.body.style = `background: #F1F4F7`;
  return (
    <>
      <Header />
      <UpperDashboard />
      <div style={{ backgroundColor: "#F1F4F7" }}>
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
