import yellowSemiCircle from "../assets/yellow_semicircle.svg";
import violetSemiCircle from "../assets/violet_semicircle.svg";
import guidance from "../assets/guidance.svg";
import wave from "../assets/wave.svg";
import exploring from "../assets/exploring.svg";
import decision from "../assets/decision.svg";

const GridLayout = () => {
  return (
    <div className=" text-[#FFFFFF] w-[100%] sm:w-[95%] md:w-[90%] lg:w-[70%] xl:w-[48%]">
      <div class="grid grid-flow-col grid-cols-2 gap-4">
        <div class=" col-span-full sm:col-span-1 sm:row-span-3 place-content-center relative ">
          <div className="flex flex-col gap-[18px]  ">
            <img
              src={yellowSemiCircle}
              alt=""
              className="place-self-end hidden sm:block"
            />
            <div className="bg-[#344AC1] flex flex-col gap-[13px] p-3 sm:p-8 z-10">
              <img src={guidance} alt="" className="w-fit" />
              <p className="text-[13.06px] font-semibold">Guidance</p>
              <p className="font-normal text-[13.06px] leading-[17.42px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.{" "}
              </p>
            </div>
            <img
              src={wave}
              alt=""
              className="absolute right-2 hidden sm:block sm:right-[52px] bottom-20 sm:bottom-28 md:bottom-14 z-0"
            />
          </div>
        </div>
        <div class="sm:col-span-2 col-span-full gap-4">
          <div className="bg-[#388A7C] flex flex-col gap-[13px] p-3 sm:p-8 h-auto md:h-[292.6708984375px]">
            <img src={exploring} alt="" className="w-fit" />
            <p className="text-[13.06px] font-semibold">Exploring skills</p>
            <p className="font-normal text-[13.06px] leading-[17.42px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div class="sm:col-span-2 col-span-full row-span-2 gap-4">
          <div className="flex gap-3.5 items-start">
            <div className="bg-[#151517] flex flex-col gap-[13px] p-3 sm:p-11">
              <img src={decision} alt="" className="w-fit" />
              <p className="text-[13.06px] font-semibold">Decision making</p>
              <p className="font-normal text-[13.06px] leading-[17.42px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. Amet
                minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <img src={violetSemiCircle} alt="" className="hidden sm:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
