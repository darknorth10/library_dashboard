import burger from '../assets/burger.png'

const Banner = () => {
  return (
    <div className="h-[240px] bg-slate-50 shadow-sm">
        <div className="flex w-4/5 p-5 box-border h-full mx-auto justify-center items-center">
            <h4 className="text-4xl flex-1 font-sans text-zinc-700 text-wrap leading-relaxed px-7 animate-fade-down">Meals and Snacks Delivery from <br /> Order Drive's Best Partners</h4>
            <div className="flex-1 overflow-hidden flex justify-end">
                <img src={burger} className='h-[350px] block animate-fade-down' alt="burgerBanner"/>
            </div>
        </div>
    </div>
  )
}

export default Banner