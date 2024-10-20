import { FaArrowRight } from "react-icons/fa6";

const ServiceBanner = () => {
    const services = ["Digital Marketer" , "SEO" , "Social Media Handler","Digital Marketer" , "SEO" , "Social Media Handler",]
    
    return (
        
        <div className="text-[white] w-[100%] h-[270px] flex items-center justify-center flex-col items-center">
            <p className="pb-[10px] text-[gray]">Services</p>
            <div class="marquee h-[100px] MyGradient">
                <div class="track">
                    <div class="content font-bold flex">
                        {
                            services.map((text,i) => {
                                return <div key={i} className="ml-[30px] flex items-center justify-between"><FaArrowRight className="text-[45px] mr-[25px]"/> <span className="text-[60px]">{text}</span></div>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceBanner;