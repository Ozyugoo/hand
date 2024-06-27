import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <div className="mt-6 md:w-5/12">
      <h3 className="md:w-full w-full lg:mb-14 mb-8 text-darkMeet text-right lg:ml-36 lg:w-4/6 font-bold text-4xl">
        We&apos;d love to hear from you
      </h3>
      <form onSubmit={handleSubmit} id="form">
        <div className="mb-4">
          <input
            className="appearance-none border-gray border text-black rounded w-full lg:py-6 lg:pl-14 lg:mb-8 py-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name*"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border-gray border text-black rounded w-full lg:py-6 lg:pl-14 py-3 lg:mb-8 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email*"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border-gray border text-black rounded w-full lg:py-6 lg:pl-14 py-3 lg:mb-8 leading-tight focus:outline-none focus:shadow-outline"
            id="website"
            type="text"
            placeholder="Website URL*"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border-gray border text-black rounded w-full py-6 pl-14 lg:mb-8 mb-4 leading-tight focus:outline-none focus:shadow-outline"
            id="projectDetails"
            placeholder="Project Details*"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-darkBtn text-white font-bold lg:py-6 px-4 rounded py-3 focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Send Proposal
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
