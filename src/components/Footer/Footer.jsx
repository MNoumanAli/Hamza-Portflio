
const Footer = () => {
    return (
        <div className = "text-[white] w-[100%] h-[300px] bg-[black] flex flex-col justify-between">
            <div className="relative border-b border-[gray] w-[100%] h-[70px]">
                <p className="bottom-[-20px] text-6xl text-bold absolute">Hamza Bashir</p>
            </div>
            <div className="w-[100%] border-t border-[gray] flex justify-between items-center">
            <div> <p className="pt-[8px] pb-[8px] pl-[25px] pr-[25px] text-[black] rounded-full bg-[#A2DF54]">lehamza@gmail.com</p> </div>
                <span className="w-[15%] right-0 top-[-15px] flex justify-between">
                    <p>Linkedin</p>
                    <p>Instagram</p>
                </span>
            </div>
        </div>
    )
}
export default Footer