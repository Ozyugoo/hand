import MidImage from "../../assets/midImage.svg";

function WhoWeAre() {
  return (
    <div className="mt-10 mx-14 m-auto text-grey">
      <h2 className="font-sans font-bold text-3xl  mb-6">Who we are</h2>
      <p className="text-[1.4rem] text-left font-medium mb-28">
        We love what we do and create partnerships with our clients to ensure
        their digital transformation is positioned for long-term success.We
        believe that the human dimensions essential to start any successful
        project and that this is where splendid emotional relationships between
        the company and people are born.
      </p>

      <img src={MidImage} alt="Ginger and Lemon" />
    </div>
  );
}

export default WhoWeAre;
