import data from "./data";

function MeetTeam() {
  return (
    <div className="mt-16 text-darkMeet">
      <h3 className="text-center font-bold text-xl mb-10 md:text-2xl">
        Meet the heroes behind the magic
      </h3>
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-inner w-full md:w-6/12 lg:w-4/12 items-center p-5 mb-4 mx-auto"
          >
            <img
              src={item.image}
              alt="Team Member"
              className="w-full object-cover mb-5"
            />
            <h3 className="font-bold lg:text-xl text-lg">{item.names}</h3>
            <p className="text-gray font-semibold">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetTeam;
