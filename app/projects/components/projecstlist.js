import ProjectCard from "./projectcard";

export default async function ProjectsList() {
    const response = await fetch("http://localhost:3001/repos", {cache: "no-store"}	);
      const data = await response.json();
    return (
        <div>
            <ul>
                {data.map((repo) => (
                    <li key={repo.id} className="border-b border-gray-200 p-4">
                        <ProjectCard project={repo} />
                    </li>
                ))}
            </ul>
        </div>
    )
}