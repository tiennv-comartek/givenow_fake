import React from "react";
import Slider from "react-slick";
import msi1 from "../../public/images/msi1.jpg";
import msi2 from "../../public/images/msi2.jpg";
import msi3 from "../../public/images/msi3.jpg";
import msi4 from "../../public/images/msi4.jpg";
import msi5 from "../../public/images/msi5.jpg";

function Fund() {
  const settingfund = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
            <div className="text-4xl font-bold text-center ">
              Sứ giả gây quỹ
            </div>
            <div className="my-10 text-xl max-w-3xl px-14 text-center">
              Bạn có thể trở thành sứ giả gây quỹ cho các dự án bằng cách tạo
              trang gây quỹ với mục tiêu của riêng mình.
            </div>
            <div className="text-center">
              <button className="bg-blue-500 text-white text-xl py-2 px-5 rounded-lg">
                Trở thành sử giả ngay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" list-fund mt-14 lg:mx-32 mx-20">
        <Slider {...settingfund}>
          <div className="wrap-fund rounded-xl text-center">
            <div className="wrap_image mt-8 mb-4">
              <img src={msi5.src} className="img_fund" />
            </div>
            <div className="text-lg font-medium">Messi</div>
            <div className="text-lg font-medium text-gray-light mt-2 mb-6">
              50.000.000đ
            </div>
          </div>
          <div className="wrap-fund rounded-xl text-center">
            <div className="wrap_image mt-8 mb-4">
              <img src={msi4.src} className="img_fund" />
            </div>
            <div className="text-lg font-medium">Messi</div>
            <div className="text-lg font-medium text-gray-light mt-2 mb-6">
              40.000.000đ
            </div>
          </div>
          <div className="wrap-fund rounded-xl text-center">
            <div className="wrap_image mt-8 mb-4 text-center">
              <img src={msi1.src} className="img_fund" />
            </div>
            <div className="text-lg font-medium">Messi</div>
            <div className="text-lg font-medium text-gray-light mt-2 mb-6">
              30.000.000đ
            </div>
          </div>
          <div className="wrap-fund rounded-xl text-center">
            <div className="wrap_image mt-8 mb-4">
              <img src={msi2.src} className="img_fund" />
            </div>
            <div className="text-lg font-medium">Messi</div>
            <div className="text-lg font-medium text-gray-light mt-2 mb-6">
              20.000.000đ
            </div>
          </div>
          <div className="wrap-fund rounded-xl text-center">
            <div className="wrap_image mt-8 mb-4">
              <img src={msi3.src} className="img_fund" />
            </div>
            <div className="text-lg font-medium">Messi</div>
            <div className="text-lg font-medium text-gray-light mt-2 mb-6">
              10.000.000đ
            </div>
          </div>
          <div className="wrap-fund rounded-xl text-center">
            <div className="wrap_image mt-8 mb-4">
              <img src={msi3.src} className="img_fund" />
            </div>
            <div className="text-lg font-medium">Messi</div>
            <div className="text-lg font-medium text-gray-light mt-2 mb-6">
              5.000.000đ
            </div>
          </div>
        </Slider>
      </div>
      <div className="text-center text-red-500 text-base font-medium my-7">
        Xem tất cả(5)
      </div>
    </>
  );
}

export default Fund;
