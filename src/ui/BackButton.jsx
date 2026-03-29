import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function BackButton({ path }) {
  const navigate = useNavigate();
  console.log(path);
  return (
    <div className="flex justify-start mb-8">
      <button
        className="flex items-center gap-3  hover:bg-orange-500 py-1 px-2 rounded-full transition-all cursor-pointer hover:text-white text-stone-500 text-sm"
        onClick={() => navigate(-1)}
      >
        <span>
          <HiArrowLeft />
        </span>
        <span>Back to {path}</span>
      </button>
    </div>
  );
}

export default BackButton;
