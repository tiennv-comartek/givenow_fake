import Link from "next/link";
import React from "react";
import banner from "../public/images/banner.png";

interface BannerI {
  path_1?: string;
  name_1?: string;
  name_2?: string;
}

function Banner(props: BannerI) {
  return (
    <div className="wraper_banner">
      <img src={banner.src} className="banner " />
      <div className="md:text-2xl text-xl text-white name_page font-bold md:pb-5 pb-8 ">
        {props.name_2}
      </div>
      <div className="breadcrumb md:text-lg text-base text-white font-medium">
        <Link href={`${props.path_1}`}>{props.name_1}</Link> / {props.name_2}
      </div>
    </div>
  );
}

export default Banner;
