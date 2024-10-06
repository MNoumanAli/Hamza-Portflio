
const ServiceBanner = () => {
    const services = ["Digital Marketr" , "SEO" , "Social Media Handler"]
    return (
        <div className="overflow-hidden text-[white] w-[100%] h-[220px] bg-[black] flex items-center justify-center flex-col items-center">
            <p className="pb-[10px] text-[gray]">Services</p>
            <div className="flex justify-center w-[100%]">
                <span className="flex justify-center w-[60%]">
                    {
                        services.map((s,i) => {
                            return <p className="text-[30px] pl-[20px]" key={i}>{s}</p>
                        })
                    }
                </span>
            </div>
        </div>
    )
}
export default ServiceBanner;