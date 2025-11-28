import { IoMdClose } from "react-icons/io";

function Filter({ skill, setSkill }) {
  function deleteFn(s) {
    setSkill((prev) => {
      return prev.filter((skl) => skl !== s);
    });
  }
  return (
    <div className="flex justify-between bg-white shadow-card w-full absolute top-0 left-0 -translate-y-1/2 py-5 px-10 rounded-[5px]">
      <ul className="flex flex-wrap gap-4">
        {skill.map((s, i) => {
          return (
            <li
              key={i + 1}
              className="flex items-center bg-primary-1 text-primary-10 font-bold text-sm tracking-[0.12px]"
            >
              <span className="pt-[5px] pb-1.75 px-2.75">{s}</span>
              <button
                onClick={() => deleteFn(s)}
                className="focus:bg-gray-900 hover:bg-gray-900 bg-primary text-white font-bold  py-2.25 px-2.5 rounded-r-[5px]"
              >
                <IoMdClose />
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => setSkill([])}
        className="text-green-900 hover:text-primary-10 font-bold duration-300 ease-in-out hover:underline focus:text-primary-10 focus:underline"
      >
        Clear
      </button>
    </div>
  );
}

export default Filter;
