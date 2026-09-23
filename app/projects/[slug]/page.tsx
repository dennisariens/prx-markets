import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileCheck2, MapPin, ShieldCheck } from 'lucide-react';
import { notFound } from 'next/navigation';
import FundingPanel from '../../components/funding-panel';
import { getProject, projects, recoveryRecords } from '../../../lib/prx-data';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project
    ? { title: `${project.name} — PRX Markets`, description: project.headline }
    : { title: 'Project not found — PRX Markets' };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectRecord = recoveryRecords.find((record) => record.projectSlug === project.slug) ?? recoveryRecords[0];
  const visualNumber = project.id.split('-').at(-1) ?? '001';

  return (
    <main className="projectDetail">
      <header className="detailNav"><Link href="/projects"><ArrowLeft size={15}/> MARKET</Link><b>PR<span>X</span></b><span>{project.id} / VERIFIED SUPPLY</span></header>
      <section className="detailHero">
        <div className={`detailVisual ${project.className}`}><div className="visualIndex">{project.coordinates.replace(' / ', '\n')}</div><div className="projectNumber">{visualNumber}</div></div>
        <div className="detailTitle"><p>{project.type.toUpperCase()} RECOVERY · {project.country.toUpperCase()}</p><h1>{project.shortName}<br/>Recovery.</h1><div className="verifiedLine"><ShieldCheck size={16}/> {project.standard.toUpperCase()} VERIFIED <span>·</span> {project.status}</div></div>
      </section>
      <section className="detailGrid">
        <div className="projectStory">
          <p className="label">PROJECT / OVERVIEW</p><h2>{project.headline}</h2><p>{project.description}</p>
          <div className="facts">
            <div><MapPin/><span>LOCATION<strong>{project.place.replace(' · ', ', ')}</strong></span></div>
            <div><ShieldCheck/><span>METHODOLOGY<strong>{project.methodology}</strong></span></div>
            <div><FileCheck2/><span>EVIDENCE<strong>{project.evidence}</strong></span></div>
          </div>
        </div>
        <FundingPanel project={project} />
      </section>
      <section className="evidence">
        <div className="evidenceHead"><p className="label">EVIDENCE CHAIN</p><h2>From recovery<br/>to record.</h2></div>
        <div className="evidenceSteps">{[
          ['01','COLLECTION','Outcome recovered and measured'],
          ['02','PROCESSING','Material or habitat outcome documented'],
          ['03','VERIFICATION','Evidence independently checked'],
          ['04','ISSUANCE','Verified units entered in registry'],
        ].map((step) => <article key={step[0]}><b>{step[0]}</b><span>{step[1]}</span><p>{step[2]}</p></article>)}</div>
      </section>
      <section className="projectMetrics">
        <div><span>RECOVERED TO DATE</span><strong>{project.recoveredToDate}</strong></div>
        <div><span>VERIFIED EVENTS</span><strong>{project.verifiedEvents}</strong></div>
        <div><span>EVIDENCE FILES</span><strong>{project.evidenceFiles.toLocaleString('en-US')}</strong></div>
        <div><span>LAST VERIFICATION</span><strong>{project.lastVerification}</strong></div>
      </section>
      <section className="recordPreview">
        <div><p className="label">PUBLIC REGISTRY</p><h2>Every funded unit<br/>ends with evidence.</h2><p>Once recovery is verified, PRX creates an auditable record linking the funding event to project evidence and the resulting environmental outcome.</p><Link href={`/registry/${projectRecord.id}`} className="registryCta">Inspect example record</Link></div>
        <Link href={`/registry/${projectRecord.id}`} className="registryTicket">
          <header><b>PR<span>X</span></b><small>RECOVERY RECORD</small></header><p>{projectRecord.id}</p>
          <div><span>PROJECT<small>{projectRecord.projectName}</small></span><span>RECOVERY<small>{projectRecord.quantity.toFixed(2)} {projectRecord.unit}</small></span><span>STATUS<small className="ticketVerified">● {projectRecord.status}</small></span><span>OWNER<small>{projectRecord.owner}</small></span></div>
          <footer>{projectRecord.evidenceHash} · {projectRecord.evidenceDocuments} EVIDENCE DOCUMENTS · {projectRecord.verificationCount} VERIFICATION</footer>
        </Link>
      </section>
    </main>
  );
}
