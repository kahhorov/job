function Item({ obj, setSkill }) {
  const {
    image,
    title,
    create_time,
    work_time,
    work_place,
    company_name,
    skills,
    isNew,
    isFeatured,
    id,
  } = obj;
  function filtredFn(s) {
    setSkill((prev) => {
      if (prev.includes(s)) {
        return prev;
      } else {
        return [...prev, s];
      }
    });
  }
  return (
    <li>
      <div
        className={`flex gap-6 shadow-card bg-white rounded-[5px] py-8 px-10 ${
          isFeatured && "border-l-[5px] border-primary"
        } max-lg:flex-col`}
      >
        <img
          src={image}
          alt={title}
          width={88}
          height={88}
          className="max-md:absolute max-md:mt-[-50px] max-md:w-12 max-md:left-14"
        />
        <div>
          <div className="flex gap-4">
            <h3 className="text-primary-10 font-bold text-lg  ">
              {company_name}
            </h3>
            <div className="flex gap-2 uppercase font-bold text-sm mb-2.5">
              {isNew && (
                <span className="bg-primary-10 text-white-lght tracking-[-0.11px] py-[5px] px-2 rounded-full max-sm:text-[10px]">
                  new!
                </span>
              )}
              {isFeatured && (
                <span className="bg-green-900 text-white-lght tracking-[-0.11px] py-[5px] px-2 rounded-full max-sm:text-[10px]">
                  FEATURED
                </span>
              )}
            </div>
          </div>
          <h3 className="text-text font-bold text-xl-[22px] leading-6 mb-1.75 cursor-pointer hover:text-primary duration-300 ease-in-out">
            {title}
          </h3>
          <div className="flex gap-4 items-center text-gray max-lg:text-[12px]">
            <span>day</span>
            <span className="w-2 h-2 bg-gray rounded-full"></span>
            <span>{work_time}</span>
            <span className="w-2 h-2 bg-gray rounded-full"></span>
            <span>{work_place}</span>
          </div>
        </div>
        {/* skills */}
        <div className="ml-auto flex items-center">
          <ul className="flex gap-4 max-lg:flex max-lg:flex-wrap">
            {skills.map((s, i) => {
              return (
                <button
                  onClick={() => filtredFn(s)}
                  key={i + 1}
                  className="focus:bg-primary focus:text-white bg-skills text-primary py-2 px-2.5 tracking-[-0.12px] font-bold rounded-sm flex items-center cursor-pointer hover:bg-primary hover:text-white time duration-300 ease-in-out"
                >
                  {s}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default Item;
