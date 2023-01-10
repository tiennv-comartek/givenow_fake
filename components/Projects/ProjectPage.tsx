import Link from "next/link";
import React from "react";
import project from "../../public/images/cup.png";
import logo_fund from "../../public/images/logo-fund.png";

function ProjectPage(props: any) {
  return (
    <div className="pb-16">
      <div className="slider-project  grid grid-cols-1 sm:grid-cols-2 mx-10 md:mx-18 gap-8 md:grid-cols-3 md:gap-8">
        {props?.data?.allProjects?.map((it: any, key: any) => {
          return (
            <div className="project " key={key}>
              <Link href={"projects/slug1"}>
                <div className="waper_img">
                  <img
                    src={`https://givenow.vn/wp-content/uploads/${it?.photoUrl}`}
                    className="image_project"
                  />
                  <div className="waper_logo ml-7">
                    <img src={logo_fund.src} className="logo_fund" />
                  </div>
                  <div className="text-white category bg-red-500 py-2 px-5 rounded ">
                    Ball
                  </div>
                </div>
              </Link>
              <div className="mx-7">
                <div className=" text-base text-gray-light font-medium  pt-6">
                  Champion 2022!!
                </div>
                <div className="description text-xl font-bold  pt-4 h-18 ">
                  {it?.name}
                </div>
                <div className=" bg-red-300 rounded-full h-2.5 my-4 ">
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{
                      width: `${
                        it?.currentAmount
                          ? it?.currentAmount / it?.targetAmount
                          : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <div className="text-red-500 text-lg font-medium">
                    {it?.currentAmount
                      ? new Intl.NumberFormat().format(it?.currentAmount)
                      : 0}
                    đ
                  </div>
                  <div className="font-medium text-lg">
                    {it?.currentAmount
                      ? it?.currentAmount / it?.targetAmount
                      : 0}
                    %
                  </div>
                </div>
                <div className="text-base text-gray-light font-medium py-5">
                  {new Intl.NumberFormat().format(it?.targetAmount)}đ
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectPage;
