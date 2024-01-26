import { useState, userState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FaMotorcycle } from "react-icons/fa6";

export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const redirect = useNavigate()

  const login = {
    email : "admin@gmail.com",
    password : "password"
  }

  // get email value
  const handleChangeEmail = event => {
    setEmail(event.target.value);
    console.log('value is:', event.target.value);
  };
  // get password value
  const handleChangePassword = event => {
    setPassword(event.target.value);
    console.log('value is:', event.target.value);
  };

  // login function
  const handleLogin = event => {
    // empty field validation
    if (email == "" || password == "") {

      alert("All fields are required");
      return;

    }

    // Incorrect credentials validation
    if (email == login.email && password == login.password) {

      // redirect to dashboard if auth is satisfied
      redirect("/dashboard");

    } else {

      alert("Incorrect email or password");
      return;

    }


  }

  return (
  
    <div className="h-screen w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-teal-500 to-90% pt-[100px]">

      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="flex bg-slate-100 w-[26%] flex-1 flex-col justify-center px-6 py-14 lg:px-8 rounded-lg shadow-lg mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <FaMotorcycle className="text-5xl text-teal-500 mx-auto p-3 rounded-lg box-content bg-white shadow" />

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-teal-600 uppercase">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  onChange={handleChangeEmail}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full p-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-black-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  onChange={handleChangePassword}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full p-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button" onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>


        </div>
      </motion.div>
    </div>

  )
}
