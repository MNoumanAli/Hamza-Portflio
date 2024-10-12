import {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import PhotoTag from "../../Phototag/PhotoTag";

const HeroSection = () => {
    const [currentDate, setCurrentDate] = useState(dayjs()) 
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(dayjs());
          }, 1000 * 60 * 60 * 24); // Update every 24 hours
      
          return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);
    const formattedDate = currentDate.format('MMMM, DD, YYYY')
    return (
        <div className="flex justify-center flex-col items-center pb-[25px]">
            <span className="w-[100%] h-[80px] block"></span>
            <PhotoTag/>
            <div className = "w-[100%] text-[#918888] text-[13px] flex justify-between items-center pl-[18px] pr-[18px]">
                <p>{formattedDate}</p>
                <p className='w-[40px] h-[40px] border rounded-full border-[#918888]'></p>
            </div>
            <div className='text-[13px] text-[#301D1D] flex flex-col sm:flex-row justify-center items-center pt-[130px] pb-[130px]'>
                <p className='pl-[20px] pr-[20px] pb-[30px] sm:pb-0'>Elevate Your Brand Online</p>
                <p className='pl-[20px] pr-[20px] pb-[30px] sm:pb-0'>Driving Results Through SEO</p>
                <p className='pl-[20px] pr-[20px] pb-[30px] sm:pb-0'>Amplifying Your Web Visibility</p>
                <p className='pl-[20px] pr-[20px]'>Mastering Your Online Presence</p>
            </div>
        </div>
    )
}

export default HeroSection;