import React from "react";
import Slider from "react-slick";
import project from "../../public/images/cup.png";
import logo_fund from "../../public/images/logo-fund.png";

function Project() {
  const settingsmultiple = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-20">
        <div className="flex justify-center ">
          <div className="flex flex-col">
            <div className="text-4xl font-black text-center ">
              Dự án đang gây quỹ
            </div>
            <div className="my-10 text-xl max-w-sm px-12 text-center">
              Hãy chọn dự án trong lĩnh vực mà bạn quan tâm nhất
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 lg:mx-48 md:mx-20">
        <div className="slider-project  ">
          <Slider {...settingsmultiple}>
            <div className="project  ">
              <div className="waper_img">
                <img src={project.src} className="image_project" />
                <div className="waper_logo ml-7">
                  <img src={logo_fund.src} className="logo_fund" />
                </div>
                <div className="text-white category bg-red-500 py-2 px-5 rounded ">
                  Ball
                </div>
              </div>
              <div className="mx-7">
                <div className=" text-base text-gray-light font-medium  pt-6">
                  Champion 2022!!
                </div>
                <div className="description text-xl font-bold  pt-4 h-18 ">
                  Legendary
                </div>
                <div className=" bg-red-300 rounded-full h-2.5 my-4 ">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <div className="text-red-500 text-lg font-medium">
                    8.000.000đ
                  </div>
                  <div className="font-medium text-lg">45%</div>
                </div>
                <div className="text-base text-gray-light font-medium py-5">
                  với mục tiêu 20.000.000đ
                </div>
              </div>
            </div>
            <div className="project  ">
              <div className="waper_img">
                <img src={project.src} className="image_project" />
                <div className="waper_logo ml-7">
                  <img src={logo_fund.src} className="logo_fund" />
                </div>
                <div className="text-white category bg-red-500 py-2 px-5 rounded ">
                  Ball
                </div>
              </div>
              <div className="mx-7">
                <div className=" text-base text-gray-light font-medium  pt-6">
                  Champion 2022!!
                </div>
                <div className="description text-xl font-bold  pt-4 h-18 ">
                  Legendary
                </div>
                <div className=" bg-red-300 rounded-full h-2.5 my-4 ">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <div className="text-red-500 text-lg font-medium">
                    8.000.000đ
                  </div>
                  <div className="font-medium text-lg">45%</div>
                </div>
                <div className="text-base text-gray-light font-medium py-5">
                  với mục tiêu 20.000.000đ
                </div>
              </div>
            </div>
            <div className="project  ">
              <div className="waper_img">
                <img src={project.src} className="image_project" />
                <div className="waper_logo ml-7">
                  <img src={logo_fund.src} className="logo_fund" />
                </div>
                <div className="text-white category bg-red-500 py-2 px-5 rounded ">
                  Ball
                </div>
              </div>
              <div className="mx-7">
                <div className=" text-base text-gray-light font-medium  pt-6">
                  Champion 2022!!
                </div>
                <div className="description text-xl font-bold  pt-4 h-18 ">
                  He became the world cup champion and entered the legendary
                  temple.
                </div>
                <div className=" bg-red-300 rounded-full h-2.5 my-4 ">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <div className="text-red-500 text-lg font-medium">
                    8.000.000đ
                  </div>
                  <div className="font-medium text-lg">45%</div>
                </div>
                <div className="text-base text-gray-light font-medium py-5">
                  với mục tiêu 20.000.000đ
                </div>
              </div>
            </div>
            <div className="project  ">
              <div className="waper_img">
                <img src={project.src} className="image_project" />
                <div className="waper_logo ml-7">
                  <img src={logo_fund.src} className="logo_fund" />
                </div>
                <div className="text-white category bg-red-500 py-2 px-5 rounded ">
                  Ball
                </div>
              </div>
              <div className="mx-7">
                <div className=" text-base text-gray-light font-medium  pt-6">
                  Champion 2022!!
                </div>
                <div className="description text-xl font-bold  pt-4 h-18 ">
                  He became the world cup champion and entered the legendary
                  temple.
                </div>
                <div className=" bg-red-300 rounded-full h-2.5 my-4 ">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <div className="text-red-500 text-lg font-medium">
                    8.000.000đ
                  </div>
                  <div className="font-medium text-lg">45%</div>
                </div>
                <div className="text-base text-gray-light font-medium py-5">
                  với mục tiêu 20.000.000đ
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="text-center text-red-500 text-base font-medium my-7">
        Xem tất cả(4)
      </div>
    </>
  );
}

export default Project;
