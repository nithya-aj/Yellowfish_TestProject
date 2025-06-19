import "./App.css";
import arrow from "./assets/arrow.svg";
import playBtn from "./assets/play.svg";
import yellowSemiCircle from "./assets/yellow_semicircle.svg";
import violetSemiCircle from "./assets/violet_semicircle.svg";
import guidance from "./assets/guidance.svg";
import wave from "./assets/wave.svg";
import exploring from "./assets/exploring.svg";
import decision from "./assets/decision.svg";
import certificate from "./assets/certificate.svg";
import bg_blur1 from "./assets/bg_blur1.svg";
import bg_blur2 from "./assets/bg_blur2.svg";

function App() {
  return (
    <>
      <div className="bg-[#FFFFFF] px-[90px] pt-[85px]">
        {/* First screen */}
        <div className="flex w-full justify-between items-center">
          {/* Left side */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 ">
              <div className="flex gap-4">
                <p className="font-bold text-[40px] text-[#161616]">
                  We make it the way <br /> your{" "}
                  <span className="underline decoration-wavy decoration-[#FDD400] decoration-2 underline-offset-4 text-[#B42AB5]">
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
                  <img
                    src={yellowSemiCircle}
                    alt=""
                    className="place-self-end"
                  />
                  <div className="bg-[#344AC1] flex flex-col gap-[13px] p-8 z-10">
                    <img src={guidance} alt="" className="w-fit" />
                    <p className="text-[13.06px] font-semibold">Guidance</p>
                    <p className="font-normal text-[13.06px] leading-[17.42px]">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.{" "}
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
                <div className="bg-[#388A7C] flex flex-col gap-[13px] p-8 h-[292.6708984375px]">
                  <img src={exploring} alt="" className="w-fit" />
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
              </div>
              <div class="col-span-2 row-span-2 gap-4">
                <div className="flex gap-3.5 items-start">
                  <div className="bg-[#151517] flex flex-col gap-[13px] p-11">
                    <img src={decision} alt="" className="w-fit" />
                    <p className="text-[13.06px] font-semibold">
                      Exploring skills
                    </p>
                    <p className="font-normal text-[13.06px] leading-[17.42px]">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Amet minim mollit non deserunt ullamco est
                      sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit mollit.
                    </p>
                  </div>
                  <img src={violetSemiCircle} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second screen */}
      <div className="bg-[#E7E9F8] my-[102px] py-[107px] px-[92px] flex justify-between relative">
        <img src={bg_blur1} alt="" className="absolute z-50 bottom-0" />
        <img src={bg_blur2} alt="" className="absolute z-50 bottom-0 right-0" />
        <div className="flex flex-col gap-4 pt-[15px]">
          <p className="font-bold text-[40px] text-[#161616]">
            Much enjoyable{" "}
            <span className="underline decoration-wavy decoration-[#FDD400] decoration-2 underline-offset-4 text-[#B42AB5]">
              sessions
            </span>{" "}
            <br />
            wraps in
          </p>
          <p className="font-medium text-[15px] text-[#616161] w-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis{" "}
          </p>
          <div className="flex items-center gap-4 pt-[25px]">
            <img src={certificate} alt="" />
            <p className="font-semibold text-[14px] text-[#B42AB5]">
              Discover now
            </p>
          </div>
        </div>
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
            <div className="border border-t-0 border-l-0 border-r-0 border-dashed border-b-4 mt-2.5 text-[#E7E9F8] z-0"></div>
            <div className="bg-amber-200 flex items-center">
              <div className="w-[21.717430114746094px] h-[21.717430114746094px] rounded-full absolute bg-[#E7E9F8] z-0 -left-2"></div>
              <div className="w-[21.717430114746094px] h-[21.717430114746094px] rounded-full absolute bg-[#E7E9F8] z-0 -right-2"></div>
            </div>
          </div>
          <div className="uppercase text-white font-normal text-[18px] leading-[17px] text-center pb-4">
            Get now
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
