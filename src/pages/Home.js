import Header from "../components/Header";
import UpperDashboard from "../components/UpperDashboard";
import Explore from "../components/Explore";

export default function Home({ user }) {
  return (
    <>
      <Header />
      <UpperDashboard />
      <div>
        <a
          className="btn btn-dark btn-sm"
          href="/editor"
        >
          Create New Page
        </a>
      </div>
      <Explore />
    </>
  );
}
