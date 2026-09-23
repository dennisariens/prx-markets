import Link from 'next/link';

export default function RecordNotFound() {
  return <main className="notFound"><span>PRX REGISTRY / 404</span><h1>Recovery record<br/>not found.</h1><p>No public evidence record matches this identifier.</p><Link href="/registry">Search the registry</Link></main>;
}
