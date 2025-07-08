import { createContext, useState, useContext, useRef } from "react";

const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = (trackUrl) => {
    if (audioRef.current.src !== trackUrl) {
      audioRef.current.src = trackUrl;
    }
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    isPlaying ? pause() : play(audioRef.current.src);
  };

  return (
    <PlayerContext.Provider value={{ track, setTrack, play, pause, isPlaying, togglePlay }}>
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayer = () => useContext(PlayerContext);

export { PlayerProvider, usePlayer };
