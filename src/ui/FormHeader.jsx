import { HiX } from "react-icons/hi";

function FormHeader({ name, description, closeForm }) {
  return (
    <>
      <button
        className="absolute top-3 right-5 hover:bg-white transition-all duration-300 p-1 rounded-full cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          closeForm();
        }}
      >
        <HiX />
      </button>
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <p className="text-sm text-stone-500">{description}</p>
      </div>
    </>
  );
}

export default FormHeader;
