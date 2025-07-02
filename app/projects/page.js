import ProjectsList from "./components/projecstlist";
import { Suspense } from "react";
import ProjectListLoading from "./components/projectlistloading";
import { ErrorBoundary } from "react-error-boundary";

export const metadata = {
  title: "Projects",
  description: "My Projects",
};

export default async function Projects() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ErrorBoundary fallback={<div>Can't load projects</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectsList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
