
const Navbar = () => {
    return (
        <nav className="pt-[15px] pb-[15px] border border-b-black w-[100%] flex justify-between item-center pl-[15px] pr-[15px]">
            <span className="flex w-[20%] justify-between items-center">
                <p>Projects</p>
                <p>Services</p>
                <p>About</p>
            </span>
            <span className="w-[60%] flex justify-center items-center">
            <   p className="text-[22px] text-bold">Hamza Bashir</p>
            </span>
            <span className="w-[20%] flex justify-end items-center">
                <p className="w-[150px] bg-[black] rounded-full p-[10px] text-[white] text-center">Let's Connect</p>
            </span>
        </nav>
    )
}
export default Navbar;