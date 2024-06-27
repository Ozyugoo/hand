import shape from "../../assets/bg-Shape.svg";
import handImg from "../../assets/handImg.png";

function Hero() {
  return (
    <>
      <div className="bg-customYellow relative">
        <h1 className="m-auto text-darkMeet text-center font-bold absolute lg:text-7xl md:text-6xl text-4xl leading-tight lg:top-20 top-2 w-full lg:w-9/12 left-0 right-0 mx-auto pt-10">
          Let&apos;s create something great together.
        </h1>

        <img
          className="w-full object-cover px-4 md:px-8"
          src={shape}
          alt="Shape"
        />

        <img
          className="w-full object-cover px-1.25 absolute bottom-0 mx-auto left-0 right-0"
          src={handImg}
          alt="DIfferent Hands"
        />
      </div>
    </>
  );
}

export default Hero;
