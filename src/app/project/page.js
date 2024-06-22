import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main>
      <h1>Project Name</h1>
      <p>
        <Link href="/project/project1">Project1</Link>
      </p>
      <p>
        <Link href="/project/project2">Project2</Link>
      </p>
    </main>
  );
}
