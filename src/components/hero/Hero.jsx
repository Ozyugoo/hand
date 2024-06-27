import shape1 from "../../assets/heroShape1.svg";
import shape2 from "../../assets/heroShape2.svg";
import handImg from "../../assets/handImg.png";

function Hero() {
  return (
    <>
      <div className="w-full bg-customYellow py-14 relative">
        <div className="text-darkMeet mb-6 absolute">
          <h1 className="m-auto text-center font-extrabold lg:text-7xl w-4/6 md:text-4xl text-xl pt-28 ">
            Let&apos;s create something great together.
          </h1>
        </div>
        <div className="flex items-center justify-center w-full -mt-11 px-24">
          <img src={shape1} alt="shape" className="w-96" />
          <img src={shape2} alt="shape" className=" w-3/4 -mt-3" />
        </div>
        <div className="absolute bottom-0">
          <img src={handImg} alt="DIfferent Hands" className="w-4/5 m-auto " />
        </div>
      </div>
    </>
  );
}

export default Hero;
