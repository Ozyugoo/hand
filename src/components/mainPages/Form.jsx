import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <div className="mt-6 md:w-5/12">
      <h3 className="w-6/12 mb-14 text-darkMeet text-right ml-56  font-bold text-4xl">
        We&apos;d love to hear from you
      </h3>
      <form onSubmit={handleSubmit} id="form">
        <div className="mb-4">
          <input
            className="appearance-none border-gray border text-black rounded w-full py-6 pl-14 mb-8 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name*"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border-gray border text-black rounded w-full py-6 pl-14 mb-8 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email*"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border-gray border text-black rounded w-full py-6 pl-14 mb-8 leading-tight focus:outline-none focus:shadow-outline"
            id="website"
            type="text"
            placeholder="Website URL*"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border-gray border text-black rounded w-full py-6 pl-14 mb-8 leading-tight focus:outline-none focus:shadow-outline"
            id="projectDetails"
            placeholder="Project Details*"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-darkBtn text-white font-bold py-6 px-4 rounded focus:outline-none focus:shadow-outline w-full"
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
