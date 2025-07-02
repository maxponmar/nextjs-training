import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}