import { useState } from "react";
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";


export default function Tag() {

  const [tag, setTag]=useState('car');
  
  const [gif, generator, loading]=useGif(tag)

  function inputHandler(event){
    setTag(event.target.value);
  }




  return (
      <div className="w-[450px] bg-gray-900 p-4 flex flex-col gap-5 items-center">
        <h1 className="text-xl underline">A Random {tag} Gif</h1>
        {loading ? (<Spinner />) : (gif && <img src={gif} alt="Random GIF" />)}
        <input
          type="text"
          onChange={inputHandler}
          name="tag"
          value={tag}
          className="w-full text-center text-black"
        />
        <button onClick={()=>generator()}
        className="w-full py-2 bg-green-500 rounded-lg"
        >Generate</button>
      </div>
    
  );
}
