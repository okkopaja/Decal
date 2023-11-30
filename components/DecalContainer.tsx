import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DecalContainer: NextPage = () => {
  return (
    <div className="absolute top-[19px] left-[79px] w-[1299px] h-[57px] overflow-hidden flex flex-col items-end justify-center text-center text-xl text-black font-ubuntu">
      <div className="h-[49px] overflow-hidden shrink-0 flex flex-row items-center justify-end">
        <div className="w-[1278px] h-12 flex flex-row items-center justify-start gap-[46px]">
          <img
            className="relative w-[102px] h-[39.5px]"
            alt=""
            src="/logo.svg"
          />
          <b className="relative tracking-[6px] leading-[37.5px] inline-block w-[111px] h-[30px] shrink-0">
            Decal
          </b>
          <div className="w-[1123px] h-12 flex flex-row items-center justify-start text-base text-dimgray-200">
            <div className="w-[983px] h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[379px] [transform:_rotate(-0.18deg)] [transform-origin:0_0]">
              <div className="w-[134.5px] h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[39px]">
                <div className="relative bg-silver-100 w-px h-12" />
                <Dropdown
                  overlay={
                    <Menu>
                      {([] as any).map((option: any, index: number) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  trigger={["hover"]}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    {`Products `}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div className="w-[500px] h-12 overflow-hidden shrink-0 flex flex-row items-center justify-end gap-[11px]">
                <div className="w-[279px] h-6 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[48px]">
                  <div className="flex flex-row items-center justify-center gap-[32px]">
                    <div className="relative tracking-[-0.5px] leading-[24px]">
                      About Company
                    </div>
                    <div className="relative tracking-[-0.5px] leading-[24px]">
                      Why Decal
                    </div>
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/iconscommentline.svg"
                  />
                </div>
                <div className="w-[210px] h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start">
                  <div className="relative tracking-[-0.5px] leading-[24px]">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecalContainer;
