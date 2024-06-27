import stats from "../main/stats.js";

function Statistists() {
  return (
    <div>
      <div className="md:flex flex-wrap justify-between items-center mx-auto  bg-darkBtn text-figures p-10">
        {stats.map((item) => (
          <div key={item.id}>
            <div className="flex">
              <span className="mb-3 text-3xl font-bold">
                {item.stats} &nbsp;
              </span>
              <span className="font-bold text-3xl">{item.increment}</span>
            </div>
            <p className="text-light font-semibold mb-5 text-xl">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistists;
