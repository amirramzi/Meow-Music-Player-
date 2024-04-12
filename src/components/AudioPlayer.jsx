import React, { useState, useRef, useEffect } from "react";
import BtnPlayer from "./BtnPlayer";
import SliderMusic from "./SliderMusic";
const AudioPlayer = ({ src }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying == false) {
      audioRef.current.play();
      setPlayCount(playCount + 1);
    } else {
      audioRef.current.pause();
    }
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <>
      <div className="w-full px-1">
        <audio ref={audioRef} src={src} preload="auto" />
        <SliderMusic
          value={currentTime}
          handleTimeChange={handleTimeChange}
          max={audioRef.current?.duration || 0}
        />
      </div>
      <BtnPlayer
        playMusicClick={handlePlayPause}
        isPlaying={isPlaying}
        playCount={playCount}
      />
    </>
  );
};

export default AudioPlayer;
