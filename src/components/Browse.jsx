
import { FaChevronRight } from "react-icons/fa6";
import Header from "./Header";



const Browse = () => {
  return (
    <div className="relative w-full bg-black ">
      <Header/>
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
        alt="Netflix Banner"
      />

     
      

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white bg-gradient-to-b from-black/70">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
          Unlimited movies, TV <br/>shows and more
        </h1>
        <h4 className="text-lg md:text-xl mb-3">Starts at ₹149. Cancel at any time.</h4>
        <h6 className="text-sm md:text-base mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </h6>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center w-full max-w-xl gap-3">
          <input
            type="text"
            placeholder="Email address"
            className="w-full sm:flex-1 px-4 py-4 rounded-md border text-white bg-black/50 placeholder-white"

          />
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-md font-semibold cursor-pointer flex items-center gap-2">
  Get Started <FaChevronRight />
</button>

        </div>
      </div>
    </div>
  );
};

export default Browse;
