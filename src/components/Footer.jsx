
function Footer() {
    let currentDate = new Date()

  return (
    <div className="p-4 bg-slate-300 m-0">
        <p className="text-sm text-center">&copy; { currentDate.getFullYear() } All Rights Reserve</p>
    </div>
  )
}

export default Footer