import "./App.css";
import arrow from "./assets/arrow.svg";
import playBtn from "./assets/play.svg";
import certificate from "./assets/certificate.svg";
import bg_blur1 from "./assets/bg_blur1.svg";
import bg_blur2 from "./assets/bg_blur2.svg";
import GridLayout from "./components/GridLayout";
import OfferCard from "./components/OfferCard";

function App() {
  return (
    <>
      <div className="bg-[#FFFFFF] px-10 md:px-[90px] pt-[85px]">
        {/* First screen */}
        <div className="flex flex-col sm:flex-col xl:flex-row gap-16 sm:gap-16 xl:gap-0 w-full justify-between items-center">
          {/* Left side */}
          <div className="flex flex-col gap-5 w-[100%] sm:w-auto ">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <p className="font-bold text-[40px] px-0 text-[#161616]">
                  We make it the way{" "}
                  <br className="hidden sm:hidden md:block" /> your{" "}
                  <span className="underline decoration-wavy decoration-[#FDD400] decoration-2 underline-offset-4 text-[#B42AB5]">
                    child
                  </span>{" "}
                  loves it{" "}
                </p>
                <div className="w-[136px] hidden sm:block sm:rotate-45 xl:rotate-0">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <p className="font-medium text-[15px] text-[#616161] w-[100%] max-w-lg px-0">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis{" "}
              </p>
              <div className="flex items-center gap-4 px-0">
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
          <GridLayout />
        </div>
      </div>
      {/* Second screen */}
      <div className="bg-[#E7E9F8] my-[102px] py-[107px] px-10 sm:px-[92px] md:px-9 lg:px-[92px] flex flex-col gap-12 sm:flex-col md:flex-row sm:gap-10 items-center justify-between sm:items-center md:items-start relative md:gap-10 lg:gap-0">
        <img
          src={bg_blur1}
          alt=""
          className="absolute z-50 bottom-0 left-0 sm:left-0 lg:left-auto"
        />
        <img src={bg_blur2} alt="" className="absolute z-50 bottom-0 right-0" />
        {/* Left side */}
        <div className="flex flex-col gap-4 pt-[15px] md:w-[50%] lg:w-auto">
          <p className="font-bold text-[40px] text-[#161616]">
            Much enjoyable{" "}
            <span className="underline decoration-wavy decoration-[#FDD400] decoration-2 underline-offset-4 text-[#B42AB5]">
              sessions
            </span>{" "}
            <br className="md:hidden lg:block" />
            wraps in
          </p>
          <p className="font-medium text-[15px] text-[#616161] max-w-lg flex-wrap">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis{" "}
          </p>
          <div className="flex items-center gap-4 pt-[25px]">
            <img src={certificate} alt="" />
            <p className="font-semibold text-[14px] text-[#B42AB5]">
              Certificate included
            </p>
          </div>
        </div>
        {/* Right side */}
        <OfferCard />
      </div>
    </>
  );
}

export default App;
