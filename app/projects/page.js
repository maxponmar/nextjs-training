export default async function Projects() {
  const response = await fetch("http://localhost:3001/repos", {
    next: {
      revalidate: 3600,
    },
  });
  const data = await response.json();
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {data.map((repo) => (
          <li key={repo.id} className="border-b border-gray-200 p-4">
            <h2>{repo.title}</h2>
            <p>{repo.description}</p>
            <p>{repo.stargazers_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
