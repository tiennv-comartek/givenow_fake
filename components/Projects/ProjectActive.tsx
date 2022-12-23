import React from "react";
import ProjectPage from "./ProjectPage";

function ProjectActive() {
  return (
    <>
      <div className="text-center my-20">
        <div className="text-3xl font-bold mb-4">
          Các dự án gây quỹ đang gây quỹ
        </div>
        <div className="">Hãy lựa chọn dự án mà bạn quan tâm nhất</div>
      </div>
      <ProjectPage />
    </>
  );
}

export default ProjectActive;
