import React, { useState } from "react";
import Slider from "react-slick";
import Banner from "../../components/Banner";
import msi1 from "../../public/images/msi1.jpg";
import msi2 from "../../public/images/msi2.jpg";
import msi3 from "../../public/images/msi3.jpg";
import msi4 from "../../public/images/msi4.jpg";
import msi5 from "../../public/images/msi5.jpg";
import logo_fund from "../../public/images/logo-fund.png";
import { UserOutlined } from "@ant-design/icons";
import Content from "../../components/ProjectDetails/Content";
import Supporter from "../../components/ProjectDetails/Supporter";

function projectDetails() {
  const [tab, setTab] = useState<string>("content");

  const item = {
    name: "Giải đấu hấp dẫn nhất hành tinh Would Cup",
    fund_img: logo_fund.src,
    fund_name: "Một trong những huyền thoại vĩ đại của bóng đá",
    img_list: [msi1.src, msi2.src, msi3.src, msi4.src, msi5.src],
    category: "Football",
    target_tamount: 90000000,
    target_current: 70000000,
    supporter: [
      {
        name: "Nguyễn Văn A",
        donation_amount: 20000000,
      },
      {
        name: "Nguyễn Văn A",
        donation_amount: 0,
      },
      {
        name: "Nguyễn Vũ DA",
        donation_amount: 0,
      },
      {
        name: "Nguyễn Văn B",
        donation_amount: 10000000,
      },
      {
        name: "Nguyễn Văn C",
        donation_amount: 25000000,
      },
      {
        name: "Nguyễn Văn D",
        donation_amount: 15000000,
      },
    ],
  };

  const setting = {
    dots: true,
    fade: true,
    arrows: false,
    adaptiveHeight: true,
    customPaging: (i: any) => (
      <div>
        <img src={item.img_list[i]} className="rounded-sm" />
      </div>
    ),
  };
  return (
    <div className="detail_page ">
      <Banner path_1="/" name_1="Trang chủ" name_2="Dự án" />
      <div className="py-10 grid lg:grid-cols-5 lg:px-40 px-10 grid-cols-1">
        <div className="col-span-2">
          <Slider {...setting}>
            {item.img_list.map((item, key) => {
              return (
                <div key={key}>
                  <img src={item} className={"rounded-lg "} />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="pl-6 col-span-3 ">
          <div className="text-xl font-bold mb-3">{item.fund_name}</div>
          <div className=" rounded-md p-7 bg-gray-100 ">
            <div className="flex justify-between items-center">
              <div className="flex items-center ">
                <div className="logo_fund mr-4">
                  <img src={item.fund_img} className="img_fund" />
                </div>
                <div className="text-lg text-red-500 text-ellipsis ">
                  Giải đấu hấp dẫn nhất hành tinh Would Cup
                </div>
              </div>
              <div className="flex items-center  text-lg whitespace-pre-wrap">
                <UserOutlined /> &nbsp;{item?.supporter?.length} người ủng hộ
              </div>
            </div>

            <div className="flex justify-between text-xl mt-3">
              <div>Mục tiêu dự án</div>
              <div>{new Intl.NumberFormat().format(item.target_tamount)}đ</div>
            </div>
            <div className="rounded-md h-2 bg-red-300 mt-5">
              <div
                className="bg-red-500 h-2 rounded-md"
                style={{
                  width: `${(
                    (item.target_current / item.target_tamount) *
                    100
                  ).toFixed()}%`,
                }}
              ></div>
            </div>
            <div className="flex items-center justify-between my-3">
              <div className="text-xl">Đã đạt được</div>
              <div className="text-2xl text-red-600 font-semibold">
                {new Intl.NumberFormat().format(item.target_current)}đ
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 text-xl gap-3 mt-3 text-white">
            <button className="bg-red-600 py-2 rounded-md">Ủng hộ ngay</button>
            <button className="bg-sky-400 py-2 rounded-md">
              Trở thành sử giả
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:mx-40 mx-10 ">
        <div className="flex border-b border-gray-200">
          <div
            className={`py-3 px-5 font-semibold  mr-5 rounded-t-md hover:cursor-pointer
          ${
            tab === "content"
              ? "bg-blue-500 text-white"
              : "text-gray-light bg-gray-100"
          }`}
            onClick={() => setTab("content")}
          >
            Nội dung
          </div>
          <div
            className={`py-3 px-5 font-semibold rounded-t-md hover:cursor-pointer
                  ${
                    tab === "supporter"
                      ? "bg-blue-500 text-white"
                      : "text-gray-light bg-gray-100"
                  }`}
            onClick={() => setTab("supporter")}
          >
            Danh sách ủng hộ
          </div>
        </div>

        <div className="my-5">
          {tab === "content" ? <Content /> : <></>}
          {tab === "supporter" ? (
            <Supporter dataSupoter={item.supporter} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default projectDetails;
