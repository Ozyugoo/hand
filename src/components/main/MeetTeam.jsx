import Image1 from "../../assets/teamImg1.svg";
import Image2 from "../../assets/teamImg2.svg";
import Image3 from "../../assets/teamImg3.svg";

function MeetTeam() {
  return (
    <div className="mt-16 text-darkMeet">
      <h3 className="text-center font-bold text-lg mb-10">
        Meet the heroes behind the magic
      </h3>
      <div className="w-9/12 flex flex-wrap mx-auto justify-between">
        <div className="bg-white shadow-inner sm:w-full md:w-6/12 lg:w-4/12 items-center p-5 mb-4">
          <img src={Image1} alt="Team Member" className="w-full" />
          <p className="font-bold text-lg">Esther Howard</p>
          <p>Founder</p>
        </div>
        <div className="bg-light">
          <img src={Image2} alt="Team Member" />
          <p></p>
          <p></p>
        </div>
        <div className="bg-light">
          <img src={Image3} alt="Team Member" />
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default MeetTeam;
