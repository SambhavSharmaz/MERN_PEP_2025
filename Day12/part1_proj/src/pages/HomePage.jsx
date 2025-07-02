import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Items } from "../components/items.jsx";

const HomePage = (props) => {
  const { text, handleSearchText } = props;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="shadow-md">
        <Header text={text} handleSearchText={handleSearchText} />
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <Items />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        <Footer />
      </footer>
    </div>
  );
};

export { HomePage };
