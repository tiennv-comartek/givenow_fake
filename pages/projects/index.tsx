import React, { useState } from "react";
import Banner from "../../components/Banner";
import ProjectActive from "../../components/Projects/ProjectActive";
import ProjectEnd from "../../components/Projects/ProjectEnd";

function index() {
  const [status, setStatus] = useState<String>("active");

  return (
    <>
      <Banner path_1="/" name_1="Trang chủ" name_2="Dự án" />
      <div className="grid grid-cols-2 text-center py-4">
        <div
          className={`font-semibold py-2 ${
            status === "active"
              ? "text-red-600 border-b-2 border-red-500"
              : "border-b-2 border-sky-100"
          }`}
          onClick={() => setStatus("active")}
        >
          Dự án đang gây quỹ
        </div>
        <div
          className={`font-semibold py-2 ${
            status === "end"
              ? "text-red-600 border-b-2 border-red-500 "
              : "border-b-2 border-sky-100"
          }`}
          onClick={() => setStatus("end")}
        >
          Dự án đã kết thúc
        </div>
      </div>
      {status === "active" ? <ProjectActive /> : <></>}
      {status === "end" ? <ProjectEnd /> : <></>}
    </>
  );
}

export default index;
