import ProjectsList from "./components/projecstlist";
import { Suspense } from "react";
import ProjectListLoading from "./components/projectlistloading";

export default async function Projects() {
  
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectsList />
      </Suspense>
    </div>
  );
}
