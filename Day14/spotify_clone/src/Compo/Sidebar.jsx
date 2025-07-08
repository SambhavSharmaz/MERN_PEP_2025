
const Sidebar = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <aside className="absolute top-16 left-0 w-64 h-full bg-black p-4 z-50 md:relative md:block">
      <h2 className="text-xl font-bold mb-6">Spotify</h2>
      <nav className="space-y-4">
        <p className="hover:text-green-400 cursor-pointer">Home</p>
        <p className="hover:text-green-400 cursor-pointer">Search</p>
        <p className="hover:text-green-400 cursor-pointer">Your Library</p>
        <hr className="my-4 border-gray-600" />
        <p className="hover:text-green-400 cursor-pointer">Liked Songs</p>
        <p className="hover:text-green-400 cursor-pointer">Discover Weekly</p>
      </nav>
    </aside>
  );
};

export { Sidebar };
