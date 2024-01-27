import { Link } from "react-router-dom"
import { FaMotorcycle } from "react-icons/fa6";


function header({setOpenDialog}) {
  return (
    <div className="p-5 bg-gradient-to-r from-sky-600 to-teal-600">
        <div className="w-3/4 mx-auto flex justify-between">

            {/* icon and store name */}
            <div className="flex gap-3 text-white items-center animate-fade-down animate-once">
                <FaMotorcycle className="text-3xl"/>
                <Link to={"/dashboard"} className="text-xl uppercase">Order Drive</Link>
            </div>

            {/* Navigation */}
            <div className="w-1/2 flex justify-end gap-3 items-center text-white text-sm font-sans cursor-pointer">
                <Link to="/dashboard" className="py-2 px-4 transition-all rounded-lg uppercase hover:bg-gray-700 hover:bg-opacity-40 animate-fade-down animate-once animate-delay-[200ms]">Dashboard</Link>
                <a href="#" className="py-2 px-4 transition-all rounded-lg uppercase hover:bg-gray-700 hover:bg-opacity-40 text-gray-300 animate-fade-down animate-once animate-delay-[300ms]">Profile</a>
                <a href="#" className="py-2 px-4 transition-all rounded-lg uppercase hover:bg-gray-700 hover:bg-opacity-40 text-gray-300 animate-fade-down animate-once animate-delay-[400ms]">Settings</a>
                
                <a onClick={() => {
                  setOpenDialog(true)
                }} className="py-2 px-4 transition-all rounded-lg uppercase hover:bg-gray-700 hover:bg-opacity-40 text-gray-300 animate-fade-down animate-once animate-delay-[500ms]">Logout</a>
            </div>


        </div>

    </div>
  )
}

export default header