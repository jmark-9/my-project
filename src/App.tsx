import "./App.css";
import useSound from "use-sound";
import { getRandomNumber } from "./utils/utils";

export interface PlayOptions {
  id?: string;
  forceSoundEnabled?: boolean;
  playbackRate?: number;
}

export type PlayFunction = (options?: PlayOptions) => void;

function App() {
  const globalVolume = 10; // Adjust the volume as needed
  const [playAwoooga] = useSound("src/assets/awoooga.m4a", {
    volume: globalVolume,
  });
  const [playAah] = useSound("src/assets/aah.m4a", { volume: globalVolume });
  const [playBye] = useSound("src/assets/bye.m4a", { volume: globalVolume });
  const [playChat] = useSound("src/assets/chat.m4a", { volume: globalVolume });
  const [playEuh] = useSound("src/assets/euh.m4a", { volume: globalVolume });
  const [playNyooo] = useSound("src/assets/nyooo.m4a", {
    volume: globalVolume,
  });
  const [playOink] = useSound("src/assets/oink.m4a", { volume: globalVolume });
  const [playSnort] = useSound("src/assets/snort.m4a", {
    volume: globalVolume,
  });
  const [playStinky] = useSound("src/assets/stinky.m4a", {
    volume: globalVolume,
  });
  const [playWee] = useSound("src/assets/wee.m4a", { volume: globalVolume });
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

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-6 ">
        <div
          className="button w-40 h-16 bg-rose-400  cursor-pointer select-none
          active:translate-y-2  active:[box-shadow:0_0px_0_0_#f54e83,0_0px_0_0_#1b70f841]
          active:border-b-0
          transition-all duration-100 [box-shadow:0_10px_0_0_#f54e83,0_15px_0_0_#1b70f841]
          rounded-full  border border-rose-300"
          onClick={() => {
            const randomIndex = getRandomNumber(sounds);
            sounds[randomIndex]();
          }}
        >
          <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
            boop
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
