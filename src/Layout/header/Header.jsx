import Logo from "../../components/navigation/Logo";
import NavBar from "../../components/navigation/NavBar";
import Button from "../../components/navigation/Button";

function Header() {
  return (
    <div className="flex w-full p-4 bg-white justify-between items-center">
      <div className="lg:w-1/5 md:w-1/6 flex justify-center items-center">
        <Logo />
      </div>
      <div className="lg:w-full md:w-3/5 flex justify-center">
        <NavBar />
      </div>
      <div className="lg:w-1/5 flex justify-center items-center">
        <Button />
      </div>
    </div>
  );
}

export default Header;
