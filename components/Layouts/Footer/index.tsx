import React from "react";
import logo_fund from "../../../public/images/logo-fund.png";

function Footer() {
  return (
    <div className="footer">
      <div className="flex lg:px-64 md:px-28 px-10 sm:justify-start justify-center">
        <div className="logo_footer mt-4">
          <img src={logo_fund.src} />
        </div>
        <div className="text-white font-semibold text-xl max-w-lg pl-12 mt-5 sm:block hidden">
          FIFA World Cup, hay đơn giản là World Cup, còn gọi là Giải vô địch
          bóng đá thế giới
        </div>
      </div>
      <div className="border-b-2 border-white my-7"></div>
      <div className="lg:pl-96 md:pl-60 sm:pl-44 pl-20  flex lg:xl-20 sm:justify-start justify-center">
        <div className="text-white mx-5 ">
          <div>Hotline: 0915440555</div>
          <div>Hotro@givenow.vn</div>
          <div>Số 09, ngõ 04, phố Duy Tân, Cầu Giấy, Hà Nội.</div>
          <div className="mt-3 h-16">© Givenow.vn – All Rights Reserved</div>
        </div>
        <div className="md:block hidden">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fleomessi&tabs&width=240&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
