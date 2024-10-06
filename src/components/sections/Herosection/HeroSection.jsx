import {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import Navbar from "../../Navbar/Navbar";
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
        <div className="flex justify-center flex-col items-center">
            <Navbar/>
            <PhotoTag/>
            <div className = "w-[100%] flex justify-between items-center">
                <p>{formattedDate}</p>
                <p className='w-[40px] h-[40px] border rounded-full border-black'></p>
            </div>
        </div>
    )
}

export default HeroSection;