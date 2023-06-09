import Dashboard from "./dashboard";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-40 flex gap-8 justify-center mt-8">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}
