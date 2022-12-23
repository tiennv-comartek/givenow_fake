import React from "react";
import vt from "../../public/images/vt.png";

function Partner() {
  return (
    <div className="partner lg:block hidden">
      <div className="text-3xl font-semibold text-center mt-16 mb-10">
        Đối tác
      </div>
      <div className="grid grid-cols-6 gap-6 mx-20 mb-20">
        <div>
          <img src={vt.src} />
        </div>
        <div>
          <img src={vt.src} />
        </div>
        <div>
          <img src={vt.src} />
        </div>
        <div>
          <img src={vt.src} />
        </div>
        <div>
          <img src={vt.src} />
        </div>
        <div>
          <img src={vt.src} />
        </div>
      </div>
    </div>
  );
}

export default Partner;
