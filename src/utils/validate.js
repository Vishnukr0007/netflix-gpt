export const checkValidate = (email, password, fullname, phonenumber, confirmPassword, gender) => {
   
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isFullNameValid = /^[a-zA-Z ]{3,}$/.test(fullname);
  const isPhoneValid = /^[6-9]\d{9}$/.test(phonenumber);
  const isGenderValid = gender === 'Male' || gender === 'Female' || gender === 'Other';

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password must include uppercase, lowercase, number and be at least 8 characters long";
  if (!isFullNameValid) return "Full name must be at least 3 letters and contain only alphabets and spaces";
  if (!isPhoneValid) return "Invalid phone number format";
  if (password !== confirmPassword) return "Passwords do not match";
 if(!isGenderValid)return"Please select a valid gender";


  return null; // All validations passed
};
