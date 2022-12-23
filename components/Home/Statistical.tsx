import React from 'react';
import thebest from "../../public/images/best.png";

function Statistical() {
    return (
        <div className="wrap_stats">
        <div className="stats ">
          <img src={thebest.src} className="img_stats" />
          <div className="title text-red-500 lg:text-4xl md:text-2xl text-xl font-bold">
            Những con số biết nói
          </div>
          <div className="list_stats  grid grid-cols-2 md:grid-cols-4  xl:px-64 lg:px-40 sm:32 gap-1">
            <div className="lg:text-2xl sm:text-xl text-base  text-red-500">
              <div>Số trận thi đấu</div>
              <div className="text-center lg:text-3xl sm:text-2xl text-xl font-semibold">
                7
              </div>
            </div>
            <div className="lg:text-2xl sm:text-xl text-base text-red-500 ">
              <div>Số bàn thắng</div>
              <div className="text-center lg:text-3xl sm:text-2xl text-xl font-semibold">
                7
              </div>
            </div>
            <div className="lg:text-2xl sm:text-xl text-base text-red-500 ">
              <div>Số kiến tạo</div>
              <div className=" font-semibold text-center lg:text-3xl sm:text-2xl text-xl">
                3
              </div>
            </div>
            <div className="lg:text-2xl sm:text-xl text-base text-red-500 ">
              <div>MOTM</div>
              <div className="text-center lg:text-3xl sm:text-2xl text-xl font-semibold">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Statistical;