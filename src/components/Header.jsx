import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black/80 to-transparent z-10">
      
      {/* Netflix Logo */}
      <img
        className="w-28 md:w-40 ml-30 bg-gradient-to-b from-black"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />

      {/* Right Side Controls */}
      <div className="flex items-center space-x-4 mr-35 " >
        
        {/* Language Selector */}
       <select className="bg-transparent border border-white focus:border-white focus:ring-2 focus:ring-white/30 shadow-md text-white px-8 py-2 rounded-md text-sm">
       <option className="text-black " value="en">English</option>
       <option className="text-black " value="hi">Hindi</option>
       </select>


        {/* Sign In Button */}
        <Link to={"/login"} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-bold cursor-pointer">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
