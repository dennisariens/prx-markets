import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ExternalLink, FileCheck2, Fingerprint, ShieldCheck } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getProject, getRecord, recoveryRecords } from '../../../lib/prx-data';

type RegistryRecordProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return recoveryRecords.map((record) => ({ id: record.id }));
}

export async function generateMetadata({ params }: RegistryRecordProps): Promise<Metadata> {
  const { id } = await params;
  const record = getRecord(id);
  return { title: record ? `${record.id} — PRX Registry` : 'Record not found — PRX Registry' };
}

export default async function RegistryRecord({ params }: RegistryRecordProps) {
  const { id } = await params;
  const record = getRecord(id);
  if (!record) notFound();
  const project = getProject(record.projectSlug);

  return (
    <main className="recordPage">
      <header className="detailNav"><Link href="/registry"><ArrowLeft size={15}/> REGISTRY</Link><b>PR<span>X</span></b><span>PUBLIC RECOVERY RECORD</span></header>
      <section className="recordHero">
        <div><p className="kicker">AUDITABLE RECOVERY OUTCOME</p><h1>{record.id}</h1><div className="recordVerified"><CheckCircle2 size={16}/> {record.status} <span>·</span> ISSUED {record.verified}</div></div>
        <div className="recordSeal"><Fingerprint/><span>PUBLIC<br/>EVIDENCE</span></div>
      </section>
      <section className="recordCore">
        <div className="recordOutcome"><p className="label">RECORDED OUTCOME</p><strong>{record.quantity.toFixed(2)}</strong><span>{record.unit}</span><p>{record.claim}</p></div>
        <dl className="recordFacts">
          <div><dt>Project</dt><dd><Link href={`/projects/${record.projectSlug}`}>{record.projectName} <ExternalLink size={13}/></Link></dd></div>
          <div><dt>Record owner</dt><dd>{record.owner}</dd></div>
          <div><dt>Funded</dt><dd>{record.funded}</dd></div>
          <div><dt>Verified</dt><dd>{record.verified}</dd></div>
          <div><dt>Methodology</dt><dd>{project?.methodology ?? 'PRX recovery methodology'}</dd></div>
          <div><dt>Evidence hash</dt><dd className="mono">{record.evidenceHash}</dd></div>
        </dl>
      </section>
      <section className="chainSection">
        <div><p className="label">CHAIN OF EVIDENCE</p><h2>What this record<br/>connects.</h2></div>
        <div className="chainCards">
          <article><FileCheck2/><span>01 / PROJECT EVIDENCE</span><strong>{record.evidenceDocuments} documents</strong><p>Activity, measurement and chain-of-custody files attached to the recovery batch.</p></article>
          <article><ShieldCheck/><span>02 / VERIFICATION</span><strong>{record.verificationCount} independent review{record.verificationCount === 1 ? '' : 's'}</strong><p>Evidence reviewed against the project methodology before issuance.</p></article>
          <article><Fingerprint/><span>03 / RECORD</span><strong>{record.status}</strong><p>The outcome is uniquely identified and cannot be claimed by another owner in the PRX model.</p></article>
        </div>
      </section>
      <section className="claimSection"><span>PERMITTED CLAIM / PROTOTYPE</span><blockquote>“{record.claim}”</blockquote><p>This wording illustrates the intended claim boundary. Final claims require legal and methodology review before live issuance.</p></section>
    </main>
  );
}
