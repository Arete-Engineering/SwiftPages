import Header from "../components/Header";
import UpperDashboard from "../components/UpperDashboard";
import Explore from "../components/Explore";
import Footer from "../components/Footer";

export default function Home({ user }) {
  return (
    <>
      <Header />
      <UpperDashboard />
      <Explore />
      <Footer />
    </>
  );
}
