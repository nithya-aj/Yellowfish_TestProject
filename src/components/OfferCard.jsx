const OfferCard = () => {
  return (
    <div
      className=" w-[206.420639px] h-[341.892913px] border-[#FDD40091] 
        bg-[linear-gradient(162.67deg,_#344AC1_-4.43%,_#B42AB5_177.79%)]  
        shadow-[0px_5px_17px_0px_#1927645E] rounded-md relative flex flex-col justify-around mr-10"
    >
      <div className="">
        <div className="flex flex-col gap-5 items-center text-center text-white p-10 pb-6">
          <div className="font-normal text-[50px] leading-[100%] tracking-[0] ">
            ₹ <span className="font-semibold"> 199</span>
          </div>
          <p className="font-normal leading-[100%] text-xl">Per head</p>
        </div>
        <div
          className="p-[10px] border-2 border-[#FDD40091] 
            rounded-[64px] font-normal text-[13px] leading-[100%] text-[#FDD400] px-3 place-self-center"
        >
          60% OFF
        </div>
      </div>
      <div className="">
        <div className="border border-t-0 border-l-0 border-r-0 border-dashed border-b-4 mt-2.5 text-[#E7E9F8] opacity-90"></div>
        <div className="bg-amber-200 flex items-center">
          <div className="w-[21.717430114746094px] h-[21.717430114746094px] rounded-full absolute bg-[#E7E9F8] -left-3 "></div>
          <div className="w-[21.717430114746094px] h-[21.717430114746094px] rounded-full absolute bg-[#E7E9F8] -right-3 "></div>
        </div>
      </div>
      <div className="uppercase text-white font-normal text-[18px] leading-[17px] text-center pb-4">
        Get now
      </div>
    </div>
  );
};

export default OfferCard;
