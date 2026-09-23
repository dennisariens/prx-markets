import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, FileSearch2, Search } from 'lucide-react';
import { recoveryRecords } from '../../lib/prx-data';

function Mark() {
  return <div className="marketLogo">PR<span>X</span><small>MARKETS</small></div>;
}

export default function RegistryPage() {
  const verifiedUnits = recoveryRecords.reduce((sum, record) => sum + record.quantity, 0);

  return (
    <main className="registryPage">
      <header className="exchangeNav">
        <Link href="/"><Mark/></Link>
        <div className="marketNav"><Link href="/projects">MARKET</Link><b>REGISTRY</b><span>METHODOLOGY</span></div>
        <div className="marketActions"><Search size={17}/><button>Connect</button></div>
      </header>
      <section className="registryHero">
        <Link href="/projects" className="back"><ArrowLeft size={14}/> RECOVERY MARKET</Link>
        <div><p className="kicker">PUBLIC EVIDENCE LAYER / PROTOTYPE</p><h1>Recovery,<br/>on record.</h1></div>
        <div className="registryHeroCopy"><FileSearch2 size={34}/><p>Inspect the chain between funding, project activity, verification and the resulting environmental outcome.</p></div>
      </section>
      <section className="registryStats">
        <div><span>PUBLIC RECORDS</span><strong>{String(recoveryRecords.length).padStart(2, '0')}</strong></div>
        <div><span>VERIFIED UNITS</span><strong>{verifiedUnits.toFixed(1)}</strong></div>
        <div><span>EVIDENCE DOCUMENTS</span><strong>{recoveryRecords.reduce((sum, record) => sum + record.evidenceDocuments, 0)}</strong></div>
      </section>
      <section className="registryList">
        <div className="registryListHead"><span>RECORD</span><span>PROJECT</span><span>OWNER</span><span>OUTCOME</span><span>STATUS</span><span></span></div>
        {recoveryRecords.map((record) => (
          <Link href={`/registry/${record.id}`} className="registryRow" key={record.id}>
            <div><small>ISSUED {record.verified}</small><strong>{record.id}</strong></div>
            <span>{record.projectName}</span>
            <span>{record.owner}</span>
            <strong>{record.quantity.toFixed(2)} <small>{record.unit}</small></strong>
            <span className="recordStatus"><CheckCircle2 size={14}/>{record.status}</span>
            <ArrowRight size={17}/>
          </Link>
        ))}
      </section>
      <section className="registryDisclaimer"><span>PROTOTYPE DATA</span><p>These records demonstrate the intended PRX evidence model. They are illustrative and do not represent issued environmental claims.</p></section>
    </main>
  );
}
