import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="fixed top-0 z-10 bg-[white] pt-[15px] pb-[15px] border border-b-black w-[100%] flex justify-between item-center pl-[18px] pr-[18px]">
            <span className="flex w-[16%] justify-between items-center text-[#797171] text-[14px]">
                <NavLink to='/Work' className={({isActive}) => { return isActive ? 'text-[green]' : ''}}>Work</NavLink>
                <NavLink to='/service' className={({isActive}) => { return isActive ? 'text-[green]' : ''}}>Services</NavLink>
                <NavLink to='/about' className={({isActive}) => { return isActive ? 'text-[green]' : ''}}>About</NavLink>
            </span>
            <span className="w-[60%] flex justify-center items-center">
            <   p className="font-montserrat text-[22px] font-bolder text-[#301D1D]">Hamza Bashir</p>
            </span>
            <span className="w-[20%] flex justify-end items-center">
                <p className="w-[160px] bg-[#F54035] rounded-full p-[10px] text-[#ECE1E1] text-center text-[14px]">Let's Connect</p>
            </span>
        </nav>
        <Outlet/>
        </>
    )
}
export default Navbar;