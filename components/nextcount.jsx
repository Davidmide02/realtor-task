import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Nextcount = () => {
  const counters = [1, 2, 3, 4];
  return (
    <div className="btn-group w-[30%] p-4 flex justify-between">
      <div className="bg-footer-bg p-3 hover:bg-counter-color hover:cursor-pointer">
        <FaArrowLeft />
      </div>
      {counters.map((counter) => (
        <button
          key={counters.indexOf(counter)}
          className="bg-counter-color py-1 hover:bg-footer-bg px-3"
        >
          {counter}
        </button>
      ))}

      <div className="bg-footer-bg hover:bg-counter-color p-3 hover:cursor-pointer">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Nextcount;
