import { IoIosArrowRoundDown } from "react-icons/io";

const Work = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="sticky top-0 w-[100%] h-[100vh] flex flex-col items-center justify-center">
                <div className="relative mb-[15px]">
                    <div className="absolute left-[-10px] top-[45px] rotate-[-25deg] w-[65px] rounded-full h-[12px] bg-[#3852D7]"></div>
                    <p className="m-0 md:text-[96px] sm:text-[80px] text-[60px] font-bold">Driving Impact</p>
                </div>
                <span className="w-[450px] text-center text-[13px] text-[#5D5757]">I showcase projects that demonstrate my commitment to creating meaningful impact.
                    Each example reflects my skills in innovation and collaboration, highlighting
                    how I've turned ideas into tangible results.
                </span>
                <div className="text-[#C7BCBC] relative top-[50px] flex flex-col items-center justify-center">
                    <p>Scroll</p>
                    <IoIosArrowRoundDown/>
                </div>     
            </div>
        </div>
        
    )
}
export default Work;