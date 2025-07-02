import Link from "next/link";

export default function Header() {
  return (
    <header className="flex  items-center p-4">
      <h1 className="text-2xl font-bold mr-4">My Portfolio</h1>
      <nav className="flex gap-4">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
