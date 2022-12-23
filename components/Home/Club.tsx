import React from 'react';
import Slider from 'react-slick';
import brc from "../../public/images/barca.png";
import psg from "../../public/images/psg.png";
import afa from "../../public/images/afa.png";
import soon from "../../public/images/soon.png";


function Club() {
    
  const settingclub = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
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
        <div className="xl:px-60 lg:px-32 md:px-20 px-14 slider-club">
        <div className="text-4xl font-semibold text-center my-10">
          Câu lạc bộ
        </div>
        <Slider {...settingclub}>
          <div className="rounded-xl club">
            <div className="wrap_image mt-8 ">
              <img src={brc.src} className="img_club" />
              <div className="text-lg font-medium title">FC Barcelona</div>
            </div>
            <div className="border-b border-dotted border-gray-300 mb-5"></div>
            <div className="flex mx-14 mb-10 justify-between">
              <div className="text-center font-500">
                <div>Vị trí</div>
                <div>Tiền đạo</div>
              </div>
              <div className="text-center font-500">
                <div>Áo số</div>
                <div>10</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl club">
            <div className="wrap_image mt-8 ">
              <img src={psg.src} className="img_club" />
              <div className="text-lg font-medium title">
                Paris Saint-Germain F.C.
              </div>
            </div>
            <div className="border-b border-dotted border-gray-300 mb-5"></div>
            <div className="flex mx-14 mb-10 justify-between">
              <div className="text-center font-500">
                <div>Vị trí</div>
                <div>Tiền đạo</div>
              </div>
              <div className="text-center font-500">
                <div>Áo số</div>
                <div>30</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl club">
            <div className="wrap_image mt-8 ">
              <img src={afa.src} className="img_club" />
              <div className="text-lg font-medium title">
                Hiệp hội bóng đá Argentina
              </div>
            </div>
            <div className="border-b border-dotted border-gray-300 mb-5"></div>
            <div className="flex mx-14 mb-10 justify-between">
              <div className="text-center font-500">
                <div>Vị trí</div>
                <div>Tiền đạo</div>
              </div>
              <div className="text-center font-500">
                <div>Áo số</div>
                <div>10</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl club">
            <div className="wrap_image mt-8 ">
              <img src={soon.src} className="img_club" />
              <div className="text-lg font-medium title">Comming Soon</div>
            </div>
            <div className="border-b border-dotted border-gray-300 mb-5"></div>
            <div className="flex mx-14 mb-10 justify-between">
              <div className="text-center font-500">
                <div>Vị trí</div>
                <div>??</div>
              </div>
              <div className="text-center font-500">
                <div>Áo số</div>
                <div>??</div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="text-md text-center text-red-600 mt-14 ">
          Xem tất cả(4)
        </div>
      </div>
    );
}

export default Club;