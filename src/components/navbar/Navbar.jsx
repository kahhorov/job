import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
function Navbar() {
  return (
    <div className="bg-primary w-full h-[156px] flex items-center justify-end px-6">
      <button className="text-3xl text-white cursor-pointer mr-6">
        <MdOutlineDarkMode />
      </button>
    </div>
  );
}

export default Navbar;
