import "./App.css";
import arrow from "./assets/arrow.svg";
import playBtn from "./assets/play.svg";
import yellowSemiCircle from "./assets/yellow_semicircle.svg";
import violetSemiCircle from "./assets/violet_semicircle.svg";
import guidance from "./assets/guidance.svg";
import wave from "./assets/wave.svg";
import exploring from "./assets/exploring.svg";
import decision from "./assets/decision.svg";

function App() {
  return (
    <div className="bg-[#FFFFFF] px-[90px] py-[85px]">
      <div className="flex w-full justify-between items-center">
        {/* Left side */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4">
              <p className="font-bold text-[40px] text-[#161616]">
                We make it the way <br /> your{" "}
                <span className="underline decoration-wavy decoration-[#FDD400] decoration-2 underline-offset-4">
                  child
                </span>{" "}
                loves it{" "}
              </p>
              <div className="w-[136px]">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p className="font-medium text-[15px] text-[#616161] w-lg">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis{" "}
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-[#B42AB5] w-[56px] h-[56px] flex items-center justify-center rounded-full">
                <img src={playBtn} alt="" className="w-[12px] h-[18px]" />
              </div>
              <p className="font-semibold text-[14px] text-[#B42AB5]">
                Discover now
              </p>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="b border-2 text-[#FFFFFF] w-[48%]">
          <div class="grid grid-flow-col grid-rows-2 gap-4">
            <div class="row-span-3 place-content-center relative ">
              <div className="flex flex-col gap-[18px]  ">
                <img src={yellowSemiCircle} alt="" className="place-self-end" />
                <div className="bg-[#344AC1] flex flex-col gap-[13px] p-8 z-10">
                  <img src={guidance} alt="" className="w-fit" />
                  <p className="text-[13.06px] font-semibold">Guidance</p>
                  <p className="font-normal text-[13.06px] leading-[17.42px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.{" "}
                  </p>
                </div>
                <img
                  src={wave}
                  alt=""
                  className="absolute right-[52px] bottom-14 z-0"
                />
              </div>
            </div>
            <div class="col-span-2 gap-4">
              <div className="bg-[#388A7C] flex flex-col gap-[13px] p-8 z-10 h-[292.6708984375px]">
                <img src={exploring} alt="" className="w-fit" />
                <p className="text-[13.06px] font-semibold">Exploring skills</p>
                <p className="font-normal text-[13.06px] leading-[17.42px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
            <div class="col-span-2 row-span-2 gap-4">
              <div className="flex gap-3.5 items-start">
                <div className="bg-[#151517] flex flex-col gap-[13px] p-11 z-10">
                  <img src={decision} alt="" className="w-fit" />
                  <p className="text-[13.06px] font-semibold">
                    Exploring skills
                  </p>
                  <p className="font-normal text-[13.06px] leading-[17.42px]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. Velit officia consequat duis enim
                    velit mollit.
                  </p>
                </div>
                <img src={violetSemiCircle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
