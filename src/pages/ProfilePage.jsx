import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export default function WatchListPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title={
          <div className="text-center">
            <span className="text-yellow-400">My</span>
            <br />
            Profile
          </div>
        }
      />
      <Footer />
    </>
  );
}
