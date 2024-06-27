import 

function Hero() {
  return (
    <>
      <div className="w-full bg-customYellow justify-center py-14">
        <div className="text-darkMeet mb-6">
          <h1 className="m-auto text-center font-extrabold lg:text-7xl w-4/6 md:text-4xl text-xl">
            Let&apos;s create something great together.
          </h1>
        </div>
        <div className="flex items-center justify-center m-auto w-5/6">
          <img src={image1} alt="hand" className="w-64" />
          <img src={image2} alt="hand" className="w-64" />
          <img src={image3} alt="hand" className="w-64" />
          <img src={image4} alt="hand" className="w-64" />
          <img src={image5} alt="hand" className="w-64" />
          <img src={image6} alt="hand" className="w-64" />
        </div>

        {/* <div className="w-24 h-24 bg-accent rounded-full"></div>
      <div className="w-72 h-72 bg-accent rounded-2xl rotate-45"></div>
      <div>
        <div className="w-32 h-16 bg-accent rounded-full"></div>
        <div className="w-32 h-16 bg-accent rounded-full"></div>
      </div> */}
      </div>
    </>
  );
}

export default Hero;
