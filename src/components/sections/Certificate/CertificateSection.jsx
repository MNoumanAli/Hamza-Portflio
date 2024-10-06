import Certificate from "../../Certificate/Certificate"

const CertificateSection = () => {
    const certificates = [{text : "Social Media Marketer", date: "23/03/2024"},{text : "SEO Expert", date: "19/03/2023"}, {text : "Dgigtal Expert", date: "19/03/2022"}]
    return (
        <div className="flex flex-col w-[100%]">
            <div className="mb-[10px] w-[100%] h-[150px] relative border-b border-[black]">
                <span className="absolute bottom-[-20px] left-[60px] text-[25px] transfor -rotate-12 w-[220px] p-[10px] flex justify-center items-center border-2 border-black rounded-full bg-[white]">
                    Certificates
                </span>
            </div>
            {
                certificates.map((crtf,i) => {
                    return <Certificate certificate={crtf.text} date={crtf.date} key = {i}/>
                })
            }
        </div>
    )
}
export default CertificateSection