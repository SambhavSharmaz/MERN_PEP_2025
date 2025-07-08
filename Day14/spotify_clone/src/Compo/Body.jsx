import { usePlayer } from "../PlayerContext";

const playlists = [
  {
    title: "Top Hits 2024",
    cover: "https://i.scdn.co/image/ab67616d00001e02e7bb2b8386d2381f4cc2308b",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    artist: "Various Artists"
  },
  // more...
];

const Body = () => {
  const { play, setTrack } = usePlayer();

  const handlePlay = (pl) => {
    setTrack(pl);
    play(pl.audio);
  };

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Playlists</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {playlists.map((pl, idx) => (
          <div
            key={idx}
            onClick={() => handlePlay(pl)}
            className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 cursor-pointer transition"
          >
            <img src={pl.cover} alt={pl.title} className="w-full h-40 object-cover rounded mb-3" />
            <p className="text-sm font-semibold">{pl.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Body };
