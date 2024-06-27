import Hero from "../../components/mainPages/Hero";
import WhoWeAre from "../../components/mainPages/WhatWeDo";
import MeetTeam from "../../components/mainPages/MeetTeam";
import Statistists from "../../components/mainPages/Statistists";
import Image from "../../assets/image7.svg";
import Form from "../../components/mainPages/Form";


function Main() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <MeetTeam />
      <Statistists />
      <div className="md:flex flex-wrap w-full justify-between items-center p-14">
        <div className="bg-nude md:w-6/12 p-16 w-full">
          <img src={Image} alt="Team" className="object-contain" />
        </div>
        <Form />
      </div>
      
    </div>
  );
}

export default Main;
