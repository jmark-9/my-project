import "./App.css";
import useSound from "use-sound";
import { getRandomNumber } from "./utils/utils";
import { useState } from "react";

export interface PlayOptions {
  id?: string;
  forceSoundEnabled?: boolean;
  playbackRate?: number;
}

export type PlayFunction = (options?: PlayOptions) => void;

function App() {
  const globalVolume = 10; // Adjust the volume as needed
  const [playAwoooga] = useSound("/awoooga.m4a", {
    volume: globalVolume,
  });
  const [playAah] = useSound("/aah.m4a", { volume: globalVolume });
  const [playBye] = useSound("/bye.m4a", { volume: globalVolume });
  const [playChat] = useSound("/chat.m4a", { volume: globalVolume });
  const [playEuh] = useSound("/euh.m4a", { volume: globalVolume });
  const [playNyooo] = useSound("/nyooo.m4a", {
    volume: globalVolume,
  });
  const [playOink] = useSound("/oink.m4a", { volume: globalVolume });
  const [playSnort] = useSound("/snort.m4a", {
    volume: globalVolume,
  });
  const [playStinky] = useSound("/stinky.m4a", {
    volume: globalVolume,
  });
  const [playWee] = useSound("/wee.m4a", { volume: globalVolume });
  const sounds = [
    () => playAwoooga(),
    () => playAah(),
    () => playBye(),
    () => playChat(),
    () => playEuh(),
    () => playNyooo(),
    () => playOink(),
    () => playSnort(),
    () => playStinky(),
    () => playWee(),
  ];
  const [buttonText, setButtonText] = useState("press me");

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 ">
        <div
          className="button w-100 md:w-160 h-64 bg-rose-400  cursor-pointer select-none
          active:translate-y-2  active:[box-shadow:0_0px_0_0_#f54e83,0_0px_0_0_#1b70f841]
          active:border-b-0
          transition-all duration-100 [box-shadow:0_10px_0_0_#f54e83,0_15px_0_0_#1b70f841]
          rounded-4xl  border border-rose-300"
          onClick={() => {
            const randomIndex = getRandomNumber(sounds);
            sounds[randomIndex]();
          }}
          onMouseEnter={() => {
            setButtonText("👀");
          }}
          onMouseLeave={() => {
            setButtonText("press me");
          }}
          onMouseDown={() => {
            setButtonText("boop");
          }}
        >
          <span className="flex flex-col justify-center items-center h-full text-white-200 font-bold text-6xl ">
            {buttonText}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
