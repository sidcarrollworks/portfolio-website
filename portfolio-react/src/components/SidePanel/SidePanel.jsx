import cx from "classnames";
import "./style.css";

const SidePanel = ({ children, isOpen, handleClose }) => {
  return (
    <div
      className={cx(
        "absolute side-panel h-full w-1/2 py-20 px-20 text-white text-start flex flex-col items-start justify-center transition duration-200 ease-in-out z-10",
        isOpen ? "" : "translate-x-[150%]"
      )}
    >
      <div className="relative h-full w-full">
        <button
          className="px-1 py-1 h-8 w-8 text-xs bg-zinc-900 rounded-full absolute -left-10 transition hover:bg-zinc-800 select-none top-10"
          onClick={handleClose}
        >
          X
        </button>
      </div>
      <div className="flex flex-col w-full h-full z-10 px-20">{children}</div>
    </div>
  );
};

export default SidePanel;
