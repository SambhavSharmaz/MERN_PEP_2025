import { Header } from "./Compo/Header";
import { Body } from "./Compo/Body";
import { Footer } from "./Compo/Footer";
import { Sidebar } from "./Compo/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Body />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export { App };
