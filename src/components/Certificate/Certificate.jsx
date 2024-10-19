import { motion } from "framer-motion"
const Certificate = ({certificate, date, color}) => {
    
    const DURATION = 0.25;
    const STAGGER = 0.025;
    return (
        <motion.div       initial="initial"
        whileHover="hovered" className = {`mb-[10px] w-[100%] h-[150px] border-b border-[#BDB4B4] flex flex-col justify-center items-center`}>
            <motion.span
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase"
      style={{
        lineHeight: 0.85,
      }}
    >
      <div>
        {certificate.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="font-montserrat inline-block text-[30px] md:text-[40px] sm:text-[35px] text-[#301D1D] font-extra-bold"
            key={i}
          >
             {l === " " ? <span>&nbsp;</span> : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {certificate.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="font-montserrat inline-block text-[30px] md:text-[40px] sm:text-[35px] text-[#301D1D] font-extra-bold"
            key={i}
          >
            {l === " " ? <span>&nbsp;</span> : l}
          </motion.span>
        ))}
      </div>
    </motion.span>
           
            <p style={{color: `${color}`}} className={`text-[14px] pt-[10px]`}>{date}</p>
        </motion.div>
    )
}
export default Certificate