import { createPortal } from "react-dom";
import Overlay from "./Overlay";

function Modal({ children, closeForm }) {
  return createPortal(
    <div
      className="absolute top-0 bottom-0 right-0 left-0"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Overlay closeForm={closeForm} />
      <div className="border border-stone-200 rounded-2xl absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-stone-200   text-stone-800  overflow-auto z-10 animate-showForm">
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
