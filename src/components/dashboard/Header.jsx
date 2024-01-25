import { Link } from "react-router-dom"


function header({setOpenDialog}) {
  return (
    <div className="p-5 bg-gradient-to-r from-sky-600 to-teal-600">
        <div className="w-3/4 mx-auto flex justify-between">

            {/* icon and store name */}
            <div className="flex gap-3 text-white items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                </svg>
                <h4 className="text-2xl uppercase">Book Store</h4>
            </div>

            {/* Navigation */}
            <div className="w-1/2 flex justify-end gap-3 items-center text-white font-semibold font-sans cursor-pointer">
                <a href="#" className="py-2 px-4 transition-all rounded-lg uppercase hover:bg-gray-700 hover:bg-opacity-40">Dashboard</a>
                <a href="#" className="py-2 px-4 transition-all rounded-lg uppercase hover:bg-gray-700 hover:bg-opacity-40 text-gray-300">Profile</a>
                <a href="#" className="py-2 px-4 transition-all rounded-lg uppercase hover:bg-gray-700 hover:bg-opacity-40 text-gray-300">Settings</a>
                <a onClick={() => {
                  setOpenDialog(true)
                }} className="py-2 px-4 transition-all rounded-lg uppercase hover:bg-gray-700 hover:bg-opacity-40 text-gray-300">Logout</a>
            </div>


        </div>

    </div>
  )
}

export default header