export default async function ProjectsList() {
    const response = await fetch("http://localhost:3001/repos", {cache: "no-store"}	);
      const data = await response.json();
    return (
        <div>
            <ul>
                {data.map((repo) => (
                    <li key={repo.id} className="border-b border-gray-200 p-4">
                        <h2 className="text-lg font-bold">{repo.title}</h2>
                        <p className="text-gray-500">{repo.description}</p>
                        <p className="text-gray-500">{repo.stargazers_count}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}