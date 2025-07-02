export default function ProjectListLoading() {
    return (
        <div>
          <ul>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <li key={index} className="border-b border-gray-200 p-4">
                  <h2 className="animate-pulse">Loading...</h2>
                  <p className="animate-pulse">Loading...</p>
                  <p className="animate-pulse">Loading...</p>
                </li>
              ))}
          </ul>
        </div>
      );
}