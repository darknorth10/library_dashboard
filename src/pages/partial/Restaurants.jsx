import Banner from "../../components/Banner.jsx"
import Header from "../../components/dashboard/header.jsx"
import jollibee from "../../assets/fastfood/jollibee.jpg"
import mcdo from "../../assets/fastfood/mcdo.jpg"
import chowking from "../../assets/fastfood/chowking.png"
import inasal from "../../assets/fastfood/inasal.jpg"
import shakeys from "../../assets/fastfood/shakeys.jpg"
import Dialog from "../../components/Dialog.jsx"
import { useState } from "react"


export const Restaurants = () => {

    const [openDialog, setOpenDialog] = useState(false)

    return (
        <>
        <div className='bg-white flex flex-col'>
            <Header setOpenDialog={setOpenDialog}/>
            <Banner />

            {/* All restaurants an search */}
            <div className="pt-8 px-4 w-3/4 mx-auto flex justify-between animate-fade-down animate-once animate-delay-700">
                <h3 className="text-2xl text-slate-700">All Fast Food Chain</h3>
                <div className="mb-3 xl:w-96">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2" />

                        {/* <!--Search icon--> */}
                        <span
                            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                            id="basic-addon2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-7 w-7 text-slate-800">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>


            {/* cards fastfood chains */}
            <div className="px-10 py-2 flex-1 w-4/5 mx-auto grid grid-cols-5 gap-8 animate-fade-down animate-once animate-delay-1000">

                <div className="rounded-lg mb-8 flex flex-col overflow-hidden">
                    <div className="h-full p-8 transition-all hover:scale-110">
                        <img src={ jollibee } className="h-full rounded-lg shadow" />
                    </div>
                </div>

                <div className="rounded-lg mb-8 flex flex-col overflow-hidden">
                    <div className="h-full p-8 transition-all hover:scale-110">
                        <img src={ mcdo } className="h-full rounded-lg shadow" />
                    </div>
                </div>

                <div className="rounded-lg mb-8 flex flex-col overflow-hidden">
                    <div className="h-full p-8 transition-all hover:scale-110">
                        <img src={ inasal } className="h-full rounded-lg shadow" />
                    </div>
                </div>

                <div className="rounded-lg mb-8 flex flex-col overflow-hidden">
                    <div className="h-full p-8 transition-all hover:scale-110">
                        <img src={ shakeys } className="h-full rounded-lg shadow" />
                    </div>
                </div>

                <div className="rounded-lg mb-8 flex flex-col overflow-hidden">
                    <div className="h-full p-8 transition-all hover:scale-110">
                        <img src={ chowking } className="h-full" />
                    </div>
                </div>
                
                
                
            </div>
        </div>

        {openDialog && <Dialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>}
        </>
    )
}

