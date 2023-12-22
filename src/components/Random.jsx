import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";



export default function Random() {

  const [gif, generator , loading]=useGif();
  
  return (
    <div className="w-[450px] bg-gray-900 p-4 flex flex-col gap-5 items-center">
      <h1 className="text-xl underline">A Random Gif</h1>
      {loading ? (<Spinner />) : (gif && <img src={gif} alt="Random GIF" />)}
      <button onClick={()=>generator()}
      className="w-full py-2 bg-green-500 rounded-lg"
      >Generate</button>
    </div>
  );
}
