import { useTransform, useScroll, motion} from "framer-motion";
const ServiceBanner = () => {
    const services = ["Digital Marketer" , "SEO" , "Social Media Handler"]
    const repeatedServices = Array(20).fill(services).flat();

    const {scrollYProgress} = useScroll();
    const x = useTransform(scrollYProgress, [0,1] , [0, -400])
    return (
        <div className="overflow-hidden text-[white] w-[100%] h-[270px] bg-[black] flex items-center justify-center flex-col items-center">
            <p className="pb-[10px] text-[gray]">Services</p>
            <div className="flex justify-center w-[100%]">
                <motion.span style={{x}} className="flex MyGradient w-[100%] whitespace-nowrap">
                    {
                        repeatedServices.map((s,i) => {
                            return <><p className="text-[30px] pl-[30px]" key={i}>{s}</p></>
                        })
                    }
                </motion.span>
            </div>
        </div>
    )
}
export default ServiceBanner;