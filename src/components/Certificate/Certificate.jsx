
const Certificate = ({certificate, date}) => {
    return (
        <div className = "mb-[10px] w-[100%] h-[150px] border-b border-[black] flex flex-col justify-center items-center">
            <p className="pb-1 text-[25px]">{certificate}</p>
            <p>{date}</p>
        </div>
    )
}
export default Certificate