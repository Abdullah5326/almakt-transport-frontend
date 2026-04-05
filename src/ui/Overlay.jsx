function Overlay({ closeForm }) {
  return (
    <div
      className="absolute cursor-pointer w-full h-full top-0 left-0 right-0 bottom-0 overflow-hidden bg-black/50 z-9"
      onClick={closeForm}
    ></div>
  );
}

export default Overlay;
