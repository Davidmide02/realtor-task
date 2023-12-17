const Nextcount = () => {
  const counters = [1, 2, 3, 4];
  return (
    <div className="btn-group float-right w-[30%] flex justify-between">
      <button className="bg-bg-3 px-3">prev</button>
      {counters.map((counter) => (
        <button key={counters.indexOf(counter)} className="bg-bg-3 py-1 hover:bg-bg-2 px-3">
          {counter}
        </button>
      ))}
      <button className="bg-bg-3 px-3">next</button>
    </div>
  );
};

export default Nextcount;
