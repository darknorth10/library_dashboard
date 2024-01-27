import { Link } from "react-router-dom"
 
function Dialog({openDialog, setOpenDialog}) {

  return (
    <div className='w-screen h-screen bg-slate-800 absolute top-0 left-0 bg-opacity-40 flex justify-center pt-[200px]' >
        <div className="h-1/3 w-1/4 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between animate-fade-down">
            <div className="flex justify-between items-center border-b-2 border-b-gray-100">
                <div className="uppercase text-small font-semibold p-2 flex-1 text-gray-600">
                    <h3>Logout Confirmation</h3>
                </div>
                <div onClick={() => { setOpenDialog(false) }} className="inline-block transition-all hover:bg-slate-200 rounded-full p-1" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="transition-all w-6 h-6 hover:h-7 hover:w-7">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            <div className="text-lg text-center">
                <p>Are you sure you want to logout?</p>
            </div>

            <div className="flex justify-end items-center gap-5 border-t-2 border-t-gray-100 pt-3">
                <button className="bg-slate-200 rounded px-3 py-1 shadow transition-all hover:bg-slate-800 hover:text-white hover:scale-105" onClick={() => { setOpenDialog(false) }}>Cancel</button>
                <Link to={"/"} className="rounded px-3 py-1 bg-indigo-500 text-white shadow transition-all hover:bg-slate-800 hover:text-white hover:scale-105">Confirm</Link>
            </div>
        </div>
    </div>
  )

}

export default Dialog