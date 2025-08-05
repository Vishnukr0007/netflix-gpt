import { useRef, useState } from "react";
import { checkValidate} from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [error,setError]=useState(null)
  const email=useRef(null)
  const password=useRef(null)
  const fullname=useRef(null)
  const phonenumber=useRef(null)
  const confirmPassword=useRef(null)
  const gender=useRef(null)
  const toggleSignUpForm = () => {
    setSignInForm(!isSignInForm);
  };

  const HandleButtonClick=()=>{
    //validate the form data
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const fullNameValue = fullname.current.value;
    const phoneValue = phonenumber.current.value;
    const confirmPasswordValue= confirmPassword.current.value
    const genderValue=gender.current.value
 

const message = checkValidate(emailValue, passwordValue, fullNameValue, phoneValue,confirmPasswordValue,genderValue);

    setError(message)
    
  }

  return (
    <div className="relative bg-black min-h-screen">
      {/* Netflix Logo */}
      <img
        className="w-28 md:w-40 ml-8 pt-4 relative z-20 drop-shadow-lg"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
        alt="Netflix background"
      />

      {/* Form Container */}
      <div className="relative flex justify-center">
        <div className="bg-black/50 p-10 rounded-lg w-full max-w-lg text-white mt-8">
          <h1 className="text-4xl font-bold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col space-y-6">
            {!isSignInForm && (
              <>
                {/* Full Name */}
    <div className="relative">
     <input
     ref={fullname}
    type="text"
    id="fullName"
    required
    placeholder=" "
    className="peer p-4 pt-6 rounded bg-gray-600/50 w-full focus:outline-none focus:ring-2 focus:ring-white"
  />
  <label
    htmlFor="fullName"
    className="absolute left-4 top-4 text-gray-400 transition-all duration-200 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
      peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm"
  >
    Full Name
  </label>
</div>

{/* Phone Number */}
<div className="relative">
  <input
  ref={phonenumber}
    type="tel"
    id="phone"
    required
    placeholder=" "
    className="peer p-4 pt-6 rounded bg-gray-600/50 w-full focus:outline-none focus:ring-2 focus:ring-white"
  />
  <label
    htmlFor="phone"
    className="absolute left-4 top-4 text-gray-400 transition-all duration-200 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
      peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm"
  >
    Phone Number
  </label>
</div>

              </>
            )}
{/* Email */}
<div className="relative">
  <input
    ref={email}
    type="email"
    id="email"
    required
    placeholder=" "
    className="peer p-4 pt-6 rounded bg-gray-600/50 w-full text-white focus:outline-none focus:ring-2 focus:ring-white"
  />
  <label
    htmlFor="email"
    className="absolute left-4 top-4 text-gray-400 transition-all duration-200 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
      peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm"
  >
    Email
  </label>
</div>

{/* Password */}
<div className="relative">
  <input
    ref={password}
    type="password"
    id="password"
    required
    placeholder=" "
    className="peer p-4 pt-6 rounded bg-gray-600/50 w-full text-white focus:outline-none focus:ring-2 focus:ring-white"
  />
  <label
    htmlFor="password"
    className="absolute left-4 top-4 text-gray-400 transition-all duration-200 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
      peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm"
  >
    Password
  </label>
</div>


            {/* Confirm Password (only for sign-up) */}
            {!isSignInForm && (
              <div className="relative">
  <input
  ref={confirmPassword}
    type="password"
    id="confirmPassword"
    required
    placeholder=" "
    className="peer p-4 pt-6 rounded bg-gray-600/50 w-full focus:outline-none focus:ring-2 focus:ring-white"
  />
  <label
    htmlFor="confirmPassword"
    className="absolute left-4 top-4 text-gray-400 transition-all duration-200 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-base
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-white
      peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm"
  >
    Confirm Password
  </label>
</div>
            )}

            {/* Gender (only for sign-up) */}
            {!isSignInForm && (
              <div className="relative">
                <select
                  ref={gender}
                  id="gender"
                  required
                  className="p-4 bg-gray-600/50 rounded w-full focus:outline-none focus:ring-2 focus:ring-white text-white"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}
           <p className="text-red-500 text-sm">{error}</p>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 p-4 rounded font-semibold cursor-pointer"
              onClick={HandleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="mt-8 text-sm text-white">
            <p
              className="cursor-pointer hover:underline"
              onClick={toggleSignUpForm}
            >
              {isSignInForm
                ? "New to Netflix? Sign up now"
                : "Already have an account? Sign in"}
            </p>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
