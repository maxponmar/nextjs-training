export default function ProjectCard({ project }) {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold"><span className="text-gray-500">{project.id}.</span> {project.title}</h2>
      <p className="text-sm text-gray-500">
        {project.stargazers_count} ⭐
      </p>
      </div>
      <p className="text-sm text-gray-500">{project.description}</p>
      
    </div>
  );
}