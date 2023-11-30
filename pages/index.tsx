import type { NextPage } from "next";
import DecalContainer from "../components/DecalContainer";
import Group from "../components/Group";

const Frame: NextPage = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center text-left text-base text-dimgray-100 font-ubuntu">
      <div className="relative bg-whitesmoke w-[1439px] h-[760px] overflow-hidden shrink-0">
        <DecalContainer />
        <div className="absolute top-[96px] left-[0px] w-[1555px] overflow-hidden flex flex-col items-end justify-center">
          <div className="w-[1476px] h-[643.5px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-[45px] box-border">
            <div className="relative w-[1319px] h-[630px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[0px] w-[743px] h-[558px] overflow-hidden flex flex-col items-start justify-start gap-[110px]">
                <div className="tracking-[-0.5px] leading-[24px] font-medium inline-block w-[431px] h-[72px] ml-[5px]">
                  DECAL: Revolutionizing charity through secure, transparent,
                  and efficient crypto donations for a lasting philanthropic
                  impact.
                </div>
                <div className="w-[743px] h-[376px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[108px] text-[48px] font-share-tech-mono">
                  <div className="w-[743px] h-[220px] overflow-hidden shrink-0 flex flex-row items-center justify-end">
                    <div className="relative tracking-[4px] leading-[62px] [background:radial-gradient(50%_50%_at_50%_50%,_#001d13,_#06080a),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[743px] h-[220px] shrink-0">
                      Fostering Decentralized Altruism, One Transaction at a
                      Time
                    </div>
                    <div className="h-[43px] flex flex-row items-center justify-center w-[84px] mb-[41px] ml-[-112px]">
                      <div className="w-[43px] h-[43px] flex flex-col items-center justify-center">
                        <div className="w-[36.5px] h-[36.5px] flex flex-col items-end justify-end pt-[18.24335479736328px] pb-0 pr-[10.686708450317383px] pl-0 box-border">
                          <div className="relative box-border w-[28.8px] h-[28.8px] [transform:_rotate(-45deg)] [transform-origin:0_0] border-[3px] border-solid border-black" />
                          <img
                            className="relative w-[27.2px] h-5 mt-[-26px]"
                            alt=""
                            src="/path-8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[195px] h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start ml-[3px]">
                    <button
                      className="cursor-pointer [border:none] py-3 px-6 bg-mediumspringgreen rounded-[90px] w-[162px] h-12 flex flex-row items-start justify-start box-border"
                      autoFocus={true}
                      id="getstarted"
                    >
                      <div className="relative text-base tracking-[2px] leading-[23.5px] font-medium font-ubuntu text-gray-300 text-center">
                        Get Started
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[745px] w-[654px] h-[643.5px] overflow-hidden flex flex-col items-start justify-start py-[20.4853515625px] px-[15px] box-border gap-[24px] bg-[url('/frame3@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[12px] text-silver-200 font-work-sans">
                <img
                  className="relative w-[476px] h-[207px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame.svg"
                />
                <div className="w-[407.8px] h-[289px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[26px]">
                  <div className="w-[374.8px] h-[193px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[140px] ml-[33px]">
                    <img
                      className="relative w-[70px] h-[121px] overflow-hidden shrink-0"
                      alt=""
                      src="/frame1.svg"
                    />
                    <div className="w-[164.8px] h-[193px] flex flex-col items-start justify-end">
                      <div className="w-[160.2px] h-[185.2px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[7px]">
                        <Group
                          imageDimensions="/group-630.svg"
                          groupIconWidth="160.2px"
                          groupIconHeight="184.6px"
                          groupIconPosition="relative"
                        />
                        <div className="self-stretch relative leading-[20px] font-medium inline-block h-[18.2px] shrink-0">
                          Scan QR to Pay
                        </div>
                      </div>
                      <div className="relative rounded-md bg-gray-200 box-border w-[164.8px] h-[67.4px] mt-[-59px] border-[1px] border-solid border-gray-100" />
                    </div>
                  </div>
                  <img
                    className="relative w-[313px] h-[70px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
