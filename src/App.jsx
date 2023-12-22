import Random from "./components/Random"
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="w-screen h-auto bg-[#11235A] text-white p-5 flex flex-col items-center gap-5 overflow-x-hidden">
      <div className="w-full text-center bg-black py-2 text-3xl rounded-lg font-bold">Random Gif</div>
      <Random/>
      <Tag/>
    </div>

  );
}
