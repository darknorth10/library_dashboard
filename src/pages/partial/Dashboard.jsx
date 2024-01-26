import Header from "../../components/dashboard/header"
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"
import Dialog from "../../components/Dialog"
import deliver1 from '../../assets/deliver1.jpg'
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Dashboard = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const redirect = useNavigate()

  return (
    <>
    <div className="flex flex-col h-screen bg-slate-200">
        <Header setOpenDialog={setOpenDialog}/>

        <div className="flex gap-5 justify-between w-4/5 mx-auto my-3 flex-1 p-4">
            <Sidebar />

            {/* Contents */}
            <div className="grow px-4 pb-4 flex flex-col gap-8">

            {/* cards */}
                <div className="w-full bg-gradient-to-r from-sky-600 to-teal-600 p-5 rounded-lg shadow text-white animate-fade-down animate-once animate-delay-500">
                    <h4 className="text-xl font-semibold uppercase" style={{letterSpacing: "2px"}}>Dashboard</h4>
                    
                </div>

                {/* Image Background */}
                <div className="text-xl text-center rounded-lg uppercase h-[200px] bg-black bg-no-repeat bg-top bg-cover animate-fade-down animate-once animate-delay-700" style = {{ backgroundImage: "url(" + deliver1 + ")" }}>
                    {/* <img src={ library_image } alt="asdas" srcset="" className="h-full w-full bg-cover" /> */}
                </div>

                <div className="w-full bg-transparent flex gap-9 animate-fade-down animate-once animate-delay-1000">

                    <div className="p-5 flex justify-center gap-2 rounded-md transition-all bg-white text-black shadow-md flex-1 hover:bg-teal-600 hover:text-white hover:animate-jump hover:animate-once hover:animate-delay-0 hover:animate-ease-out hover:animate-alternate" onClick={() => { redirect('/restaurants'); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        <h3 className="text-center text-base">Order Now</h3>
                    </div>
                    
                    
                    <div className="p-5 flex justify-center gap-2 rounded-md transition-all bg-teal-600 text-white shadow-md flex-1 hover:bg-sky-600 hover:animate-jump hover:animate-once hover:animate-delay-0 hover:animate-ease-out hover:animate-alternate">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>


                        <h3 className="text-center text-base">View Orders</h3>
                    </div>
                    <div className="p-5 flex justify-center gap-2 rounded-md transition-all bg-rose-500 text-white shadow-md flex-1 hover:bg-teal-600 hover:animate-jump hover:animate-once hover:animate-delay-0 hover:animate-ease-out hover:animate-alternate">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                        <h3 className="text-center text-base">Cancellations</h3>
                    </div>
                    <div className="p-5 flex justify-center gap-2 rounded-md transition-all bg-sky-600 text-white shadow-md flex-1 hover:bg-teal-600 hover:animate-jump hover:animate-once hover:animate-delay-0 hover:animate-ease-out hover:animate-alternate">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
                        </svg>

                        <h3 className="text-center text-base">Request Refund</h3>
                    </div>
                   
                </div>
                
                <div className="w-full bg-transparent flex gap-9 animate-fade-down animate-once animate-delay-1000">
                    <div className="p-5 flex justify-center gap-2 rounded-md transition-all bg-sky-600 text-white shadow-md flex-1 hover:bg-teal-600 hover:animate-jump hover:animate-once hover:animate-delay-0 hover:animate-ease-out hover:animate-alternate">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>

                        <h3 className="text-center text-base">My Favorites</h3>
                    </div>
                    <div className="p-5 flex justify-center gap-2 rounded-md transition-all bg-slate-800 text-white shadow-md flex-1 hover:bg-teal-600 hover:animate-jump hover:animate-once hover:animate-delay-0 hover:animate-ease-out hover:animate-alternate">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                        </svg>


                        <h3 className="text-center text-base">My Profile</h3>
                    </div>
                    <div className="p-5 flex justify-center gap-2 rounded-md transition-all bg-teal-600 text-white shadow-md flex-1 hover:bg-sky-600 hover:animate-jump hover:animate-once hover:animate-delay-0 hover:animate-ease-out hover:animate-alternate">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>


                        <h3 className="text-center text-base">Publish Review</h3>
                    </div>

                </div>

                
            </div>
        </div>

        <Footer  />
    </div>

    {/* dialog for logout confirmation */}
    {openDialog && <Dialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>}
    </>
  )
}
