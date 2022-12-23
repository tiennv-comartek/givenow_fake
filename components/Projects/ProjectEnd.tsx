import React from "react";
import ProjectPage from "./ProjectPage";

function ProjectEnd() {
  return (
    <>
      <div className="text-center my-20">
        <div className="text-3xl font-bold mb-4">Dự án gây quỹ đã kết thúc</div>
        <div className="">Hãy lựa chọn dự án mà bạn quan tâm nhất</div>
      </div>
      <ProjectPage />
    </>
  );
}

export default ProjectEnd;
