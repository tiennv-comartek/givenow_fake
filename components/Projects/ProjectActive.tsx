import React from "react";
import { ProjectV1Status } from "../../graphql/generated";
import { useGetAllProject } from "../../hooks/useGetAllProject";
import ProjectPage from "./ProjectPage";

function ProjectActive() {
  const { data, isLoading } = useGetAllProject(ProjectV1Status.Publish);

  return (
    <>
      <div className="text-center my-20">
        <div className="text-3xl font-bold mb-4">
          Các dự án gây quỹ đang gây quỹ
        </div>
        <div className="">Hãy lựa chọn dự án mà bạn quan tâm nhất</div>
      </div>
      <ProjectPage data={data} />
    </>
  );
}

export default ProjectActive;
