import Link from 'next/link';

export default function ProjectNotFound() {
  return <main className="notFound"><span>PRX / 404</span><h1>Project record<br/>not found.</h1><p>The requested supply listing does not exist in this prototype market.</p><Link href="/projects">Return to market</Link></main>;
}
