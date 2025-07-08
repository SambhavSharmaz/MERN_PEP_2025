import { usePlayer } from "../PlayerContext";

const Footer = () => {
  const { track, isPlaying, togglePlay } = usePlayer();

  return (
    <footer className="bg-gray-800 px-6 py-4 flex justify-between items-center border-t border-gray-700">
      <div className="flex items-center gap-4">
        <img
          src={track?.cover || "https://i.scdn.co/image/ab6761610000e5ebc8e6b6b8e4d9f4c9a4e7a6f4"}
          alt="Album"
          className={`w-12 h-12 rounded ${isPlaying ? "animate-spin-slow" : ""}`}
        />
        <div>
          <h4 className="font-semibold text-green-400">{track?.title || "Select a Song"}</h4>
          <p className="text-sm text-gray-400">{track?.artist || "Unknown Artist"}</p>
        </div>
      </div>
      <div className="flex items-center space-x-6 text-xl">
        <i className="fas fa-play cursor-pointer hover:text-green-400" onClick={togglePlay}></i>
      </div>
    </footer>
  );
};

export { Footer };
