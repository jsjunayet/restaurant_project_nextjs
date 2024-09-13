import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";



export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-dark-gray">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}
